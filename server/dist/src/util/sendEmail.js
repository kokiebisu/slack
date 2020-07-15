"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendInvitationEmail = exports.sendLinkEmail = exports.sendDigitEmail = void 0;
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
function sendDigitEmail(email, digit) {
    return __awaiter(this, void 0, void 0, function* () {
        const msg = {
            to: email,
            from: 'kenichikona@gmail.com',
            subject: 'Slack confirmation',
            text: 'confirmation',
            html: `the number is ${digit}`,
        };
        yield sgMail.send(msg);
    });
}
exports.sendDigitEmail = sendDigitEmail;
sendDigitEmail('a01056715@gmail.com', 123456);
function sendLinkEmail(email, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const msg = {
            to: email,
            from: 'kenichikona@gmail.com',
            subject: email,
            text: 'Slack confirmation',
            html: `<a href='http://localhost:3000/get-started/check/${token}'>http://localhost:3000/get-started/check/${token}</a>`,
        };
        sgMail.send(msg);
    });
}
exports.sendLinkEmail = sendLinkEmail;
function sendInvitationEmail(email, invitorId, invitor, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const msg = {
            to: email,
            from: 'kenichikona@gmail.com',
            subject: `${invitor} has invited you to a Slack Workspace`,
            text: 'Slack confirmation',
            html: `<a href='http://localhost:3000/get-started/invited/${invitorId}/${token}'>Open Slack</a>`,
        };
        sgMail.send(msg);
    });
}
exports.sendInvitationEmail = sendInvitationEmail;
//# sourceMappingURL=sendEmail.js.map