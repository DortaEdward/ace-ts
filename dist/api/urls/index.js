"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_1 = require("./service");
const router = (0, express_1.Router)();
router.post('/new', async (req, res, next) => {
    await (0, service_1.createUrl)(req, res);
});
exports.default = router;
//# sourceMappingURL=index.js.map