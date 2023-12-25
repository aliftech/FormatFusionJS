const yaml = require('yamljs');

function yaml_to_json(yamlString) {
    try {
      const lines = yaml.parse(yamlString)
      return JSON.stringify(lines, null, 2); // Pretty-printed JSON
    } catch (error) {
      throw error; // Re-throw the error to allow for handling
    }
}
  
module.exports = yaml_to_json;