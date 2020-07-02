"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const refreshToken_1 = require("../api/refreshToken");
const router = express.Router();
exports.router = router;
router.post('/', refreshToken_1.refreshToken);
//# sourceMappingURL=tokenRoutes.js.map