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
const nodemailer = require('nodemailer');
function sendDigitEmail(email, digit) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: 'kenichikona@gmail.com',
                pass: 'Kronos140819',
            },
        });
        transporter.sendMail({
            from: 'kenichikona@gmail.com',
            to: email,
            subject: 'Slack confirmation',
            html: `the number is ${digit}`,
        });
    });
}
exports.sendDigitEmail = sendDigitEmail;
function sendLinkEmail(email, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: 'kenichikona@gmail.com',
                pass: 'Kronos140819',
            },
        });
        transporter.sendMail({
            from: 'kenichikona@gmail.com',
            to: email,
            subject: 'Slack confirmation',
            html: `<a href='http://localhost:3000/get-started/check/${token}'>http://localhost:3000/get-started/check/${token}</a>`,
        });
    });
}
exports.sendLinkEmail = sendLinkEmail;
function sendInvitationEmail(email, invitorId, invitor, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: 'kenichikona@gmail.com',
                pass: 'Kronos140819',
            },
        });
        transporter.sendMail({
            from: 'kenichikona@gmail.com',
            to: email,
            subject: `${invitor} has invited you to a Slack Workspace`,
            html: `<a href='http://localhost:3000/get-started/invited/${invitorId}/${token}'>Open Slack</a>`,
        });
    });
}
exports.sendInvitationEmail = sendInvitationEmail;
//# sourceMappingURL=sendEmail.js.map