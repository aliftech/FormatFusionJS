const xml = require('xml-js');
const yaml = require('yamljs');


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

module.exports = xml_to_yaml;