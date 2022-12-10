"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./urls/index"));
const router = (0, express_1.Router)();
router.use('/url', index_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map