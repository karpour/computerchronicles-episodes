"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var InternetArchiveMetadata_1 = __importDefault(require("./InternetArchiveMetadata"));
InternetArchiveMetadata_1.default.forEach(function (item) {
    var tags = [];
    if (item.ia_subject) {
        tags = item.ia_subject.split(/;\s?/).filter(function (item) { return item; });
    }
});
