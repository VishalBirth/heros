"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("../schemas/user.schema");
const category_schema_1 = require("../schemas/category.schema");
const product_schema_1 = require("../schemas/product.schema");
class ModelCreation {
    static createModels(connection) {
        var model = Object();
        model.user = (connection.model("User", user_schema_1.userSchema));
        model.category = (connection.model("Category", category_schema_1.categorySchema));
        model.product = (connection.model("Product", product_schema_1.productSchema));
        return model;
    }
}
exports.ModelCreation = ModelCreation;
