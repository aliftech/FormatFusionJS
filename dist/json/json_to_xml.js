"use strict";

var xml = require('xml-js');
function json_to_xml(jsonData) {
  try {
    lines = xml.json2xml(jsonData);
    return lines;
  } catch (error) {
    throw error;
  }
}
module.exports = json_to_xml;