"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const validRequest_1 = __importDefault(require("../../middlewares/validRequest"));
const product_validation_1 = require("./product.validation");
const router = express_1.default.Router();
router.post("/", (0, validRequest_1.default)(product_validation_1.ProductValidaions.CreateProductValidationSchema), product_controller_1.ProductController.createProduct);
router.get("/", product_controller_1.ProductController.getAllProducts);
router.get("/:id", product_controller_1.ProductController.getSingleProduct);
router.patch("/:id", 
// validateRequest(ProductValidaions.UpdateProductValidationSchema),
product_controller_1.ProductController.updateProduct);
router.delete("/:id", product_controller_1.ProductController.deleteProduct);
exports.ProductRoutes = router;
