"use strict";

var xml = require('xml-js');
var yaml = require('yamljs');
function xml_to_yaml(xmlData, indent) {
  try {
    var lines = xml.xml2json(xmlData);
    var parse = JSON.parse(lines);
    var yamlData = yaml.stringify(parse, indent);
    return yamlData;
  } catch (error) {
    throw error;
  }
}
module.exports = xml_to_yaml;