yaml = require("yamljs");


function json_to_yaml(jsonString) {
    try {
        const lines = JSON.parse(jsonString);
        return yaml.stringify(lines, 4);
    } catch (error) {
        throw error;
    }
}

module.exports = json_to_yaml;