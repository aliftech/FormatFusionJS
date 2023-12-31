import * as xmljs from 'xml-js';
import * as yaml from 'yamljs';

// Define type aliases for clarity
type JSONData = {}; // Adjust based on your specific JSON structure
type XMLData = string;
type YAMLData = string;

function jsonToXml(jsonData: JSONData): XMLData {
  try {
    const lines = xmljs.json2xml(jsonData as string);
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

function xmlToJson(xmlData: XMLData): JSONData {
  try {
    const lines = xmljs.xml2json(xmlData);
    return lines;
  } catch (error) {
    throw error;
  }
}

function xmlToYaml(xmlData: XMLData, indent: number = 2): YAMLData {
  try {
    const lines = xmljs.xml2json(xmlData);
    const parsed = JSON.parse(lines);
    return yaml.stringify(parsed, indent);
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
    return xmljs.json2xml(jsonData);
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