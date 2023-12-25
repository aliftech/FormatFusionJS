const yaml = require("yamljs");
const xml = require("xml-js");


function yaml_to_xml(yamlData) {
    try {
        const lines = yaml.parse(yamlData)
        const jsonData = JSON.stringify(lines);
        return xml.json2xml(jsonData);
    } catch (error) {
        throw error;
    }
}

module.exports = yaml_to_xml;