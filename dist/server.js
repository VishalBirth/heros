"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_api_1 = require("./apis/product.api");
const category_api_1 = require("./apis/category.api");
const user_api_1 = require("./apis/user.api");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const errorHandler = require("errorhandler");
const methodOverride = require("method-override");
const index_route_1 = require("./routes/index.route");
var config = require("../config.json");
const mongoose = require("mongoose");
const api_1 = require("./apis/api");
const databaseconnection_1 = require("./utilities/databaseconnection");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.model = Object();
        this.app = express();
        this.config();
        this.api();
    }
    api() {
        this.app.use("/", (new api_1.API).getRouter());
        this.app.use("/user/", (new user_api_1.User).getRouter());
        this.app.use("/category/", (new category_api_1.Category).getRouter());
        this.app.use("/product/", (new product_api_1.Product).getRouter());
    }
    config() {
        global.Promise = require("q").Promise;
        mongoose.Promise = global.Promise;
        databaseconnection_1.DatabaseConnection.openConnection();
        this.app.set('etag', false);
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "pug");
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(cookieParser(config["cookie_secret"]));
        this.app.use(methodOverride());
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
    }
    routes() {
        let router;
        router = express.Router();
        index_route_1.IndexRoute.create(router);
        this.app.use(router);
    }
}
exports.Server = Server;
