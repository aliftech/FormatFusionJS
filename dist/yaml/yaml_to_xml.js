"use strict";

var yaml = require("yamljs");
var xml = require("xml-js");
function yaml_to_xml(yamlData) {
  try {
    var lines = yaml.parse(yamlData);
    var jsonData = JSON.stringify(lines);
    return xml.json2xml(jsonData);
  } catch (error) {
    throw error;
  }
}
module.exports = yaml_to_xml;