"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToXml = exports.yamlToJson = exports.xmlToYaml = exports.xmlToJson = exports.jsonToYaml = exports.jsonToXml = void 0;
const xmljs = __importStar(require("xml-js"));
const yaml = __importStar(require("yamljs"));
function jsonToXml(jsonData) {
    try {
        const lines = xmljs.json2xml(jsonData);
        return lines;
    }
    catch (error) {
        throw error;
    }
}
exports.jsonToXml = jsonToXml;
function jsonToYaml(jsonString, indent = 2) {
    try {
        const lines = JSON.parse(jsonString);
        return yaml.stringify(lines, indent);
    }
    catch (error) {
        throw error;
    }
}
exports.jsonToYaml = jsonToYaml;
function xmlToJson(xmlData) {
    try {
        const lines = xmljs.xml2json(xmlData);
        return lines;
    }
    catch (error) {
        throw error;
    }
}
exports.xmlToJson = xmlToJson;
function xmlToYaml(xmlData, indent = 2) {
    try {
        const lines = xmljs.xml2json(xmlData);
        const parsed = JSON.parse(lines);
        return yaml.stringify(parsed, indent);
    }
    catch (error) {
        throw error;
    }
}
exports.xmlToYaml = xmlToYaml;
function yamlToJson(yamlString) {
    try {
        const lines = yaml.parse(yamlString);
        return JSON.stringify(lines, null, 2); // Pretty-printed JSON
    }
    catch (error) {
        throw error;
    }
}
exports.yamlToJson = yamlToJson;
function yamlToXml(yamlData) {
    try {
        const lines = yaml.parse(yamlData);
        const jsonData = JSON.stringify(lines);
        return xmljs.json2xml(jsonData);
    }
    catch (error) {
        throw error;
    }
}
exports.yamlToXml = yamlToXml;
