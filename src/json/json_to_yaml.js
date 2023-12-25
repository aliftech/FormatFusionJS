yaml = require("yamljs");


function json_to_yaml(jsonString, indent) {
    try {
        const lines = JSON.parse(jsonString);
        return yaml.stringify(lines, indent);
    } catch (error) {
        throw error;
    }
}

module.exports = json_to_yaml;