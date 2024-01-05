const xml = require("xml-js");
const yaml = require("yamljs");

function json_to_yaml(jsonString) {
  try {
      const lines = JSON.parse(jsonString);
      return yaml.stringify(lines, 4);
  } catch (error) {
      console.error('Error parsing JSON:', error);
      throw error;
  }
}

function json_to_xml(jsonData) {
  try {
      lines = xml.json2xml(jsonData);
      return lines;
  } catch (error) {
      throw error;
  }
}

function xml_to_json(xmlData) {
  try {
      const lines = xml.xml2json(xmlData);
      return lines;
  } catch (error) {
      throw error;
  }
}

function xml_to_yaml(xmlData, indent) {
  try {
      const lines = xml.xml2json(xmlData);
      const parse = JSON.parse(lines);
      const yamlData = yaml.stringify(parse, indent);
      return yamlData;
  } catch (error) {
      throw error;
  }
}

function yaml_to_xml(yamlData) {
  try {
      const lines = yaml.parse(yamlData)
      const jsonData = JSON.stringify(lines);
      return xml.json2xml(jsonData);
  } catch (error) {
      throw error;
  }
}

function yaml_to_json(yamlString) {
  try {
    const lines = yaml.parse(yamlString);
    return JSON.stringify(lines, null, 2); // Pretty-printed JSON
  } catch (error) {
    throw error; // Re-throw the error to allow for handling
  }
}

module.exports = {
  json_to_xml,
  json_to_yaml,
  xml_to_json,
  xml_to_yaml,
  yaml_to_json,
  yaml_to_xml
};