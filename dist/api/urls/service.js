"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUrl = exports.getUrl = void 0;
const schema_1 = require("./schema");
async function getUrl(req, res) {
    try {
        const results = await schema_1.Urls.findOne({ shorten: req.params.shorten });
        res.redirect(results?.originalUrl);
    }
    catch (error) {
        res.status(500).send(error);
    }
}
exports.getUrl = getUrl;
async function createUrl(req, res) {
    try {
        const payload = {
            originalUrl: req.body.originalUrl,
            shorten: req.body.shorten
        };
        const results = await schema_1.Urls.insertOne(payload);
        if (!results.acknowledged)
            throw new Error('Error creating Url');
        res.status(201);
    }
    catch (error) {
        res.status(500).send(error);
    }
}
exports.createUrl = createUrl;
;
//# sourceMappingURL=service.js.map