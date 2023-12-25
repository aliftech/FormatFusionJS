const xml = require('xml-js');

function xml_to_json(xmlData) {
    try {
        const lines = xml.xml2json(xmlData);
        return lines;
    } catch (error) {
        throw error;
    }
}

module.exports = xml_to_json;