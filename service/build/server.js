"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 3000;
const server = (0, express_1.default)();
server.get('/', (req, res) => {
    res.send(('Hello from express server'));
});
server.listen(port, () => {
    console.log(`loc 230430-1353: express is listening on port ${port}`);
});
