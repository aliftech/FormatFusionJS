import * as xmljs from 'xml-js';
import { parseString, Builder } from "xml2js";
import * as yaml from 'yamljs';

// Define type aliases for clarity
type JSONData = {}; // Adjust based on your specific JSON structure
type XMLData = string;
type YAMLData = string;

function jsonToXml(jsonData: string) {
  try {
    const builder = new Builder();
    const lines = builder.buildObject(jsonData);
    return lines;
  } catch (error) {
    throw error;
  }
}

function jsonToYaml(jsonString: string, indent: number = 2): YAMLData {
  try {
    const lines = JSON.parse(jsonString);
    return yaml.stringify(lines, indent);
  } catch (error) {
    throw error;
  }
}

function xmlToJson(xmlData: XMLData) {
  try {
    parseString(xmlData, { explicitArray: false }, function(error, result) {
        return result;
    });
  } catch (error) {
    throw error;
  }
}

function xmlToYaml(xmlData: XMLData, indent: number = 2): YAMLData {
  try {
    const lines = xmlToJson(xmlData);
    return yaml.stringify(lines, indent);
  } catch (error) {
    throw error;
  }
}

function yamlToJson(yamlString: YAMLData): string {
  try {
    const lines = yaml.parse(yamlString);
    return JSON.stringify(lines, null, 2); // Pretty-printed JSON
  } catch (error) {
    throw error;
  }
}

function yamlToXml(yamlData: YAMLData): XMLData {
  try {
    const lines = yaml.parse(yamlData);
    const jsonData = JSON.stringify(lines);
    return jsonToXml(jsonData);
  } catch (error) {
    throw error;
  }
}

// Export the functions for use in other modules
export {
  jsonToXml,
  jsonToYaml,
  xmlToJson,
  xmlToYaml,
  yamlToJson,
  yamlToXml,
};