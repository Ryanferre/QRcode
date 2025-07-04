"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const qrcode_1 = __importDefault(require("qrcode"));
const ApiQR = (0, express_1.default)();
ApiQR.use((0, cors_1.default)());
ApiQR.get('/codeqrgenerate', async (req, res) => {
    const textToQr = req.query.text || 'https://github.com/Ryanferre';
    try {
        const QrGenerate = await qrcode_1.default.toDataURL(textToQr);
        res.send(`<img src="${QrGenerate}" />`);
    }
    catch (error) {
        res.send('erro de geracao');
    }
});
const port = process.env.PORT || 3000;
ApiQR.listen(port, function () {
    console.log('servidor rodando na porta:' + port);
});
