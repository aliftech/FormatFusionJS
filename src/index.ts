import * as xmljs from 'xml-js';
import * as yaml from 'yamljs';
import * as xml2js from 'xml2js';

// Define type aliases for clarity
type JSONData = {}; // Adjust based on your specific JSON structure
type XMLData = string;
type YAMLData = string;

function jsonToXml(jsonData: JSONData): XMLData {
  try {
    const lines = xmljs.json2xml(jsonData as string);
    return lines;
  } catch (error) {
    throw error;
  }
}

function jsonToYaml(jsonString: string, indent: number = 2): YAMLData {
  try {
    const lines = JSON.parse(jsonString);
    return yaml.stringify(lines, indent);
  } catch (error) {
    throw error;
  }
}

function xmlToJson(xmlData: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      const parser = new xml2js.Parser();
      parser.parseString(xmlData, (err, jsonData: { [key: string]: any }) => {
        if (err) {
          reject(err);
        } else {
          // Convert the JSON data to the desired structure
          const convertedData: { [key: string]: any } = {};
          for (const key in jsonData) {
            if (jsonData.hasOwnProperty(key)) {
              const value = jsonData[key];

              // If the value is an object, recursively convert it
              if (typeof value === 'object') {
                convertedData[key] = xmlToJson(JSON.stringify(value)); // Recursively convert nested objects
              } else {
                // Otherwise, just add the value to the result
                convertedData[key] = value;
              }
            }
          }
          resolve(convertedData);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

function xmlToYaml(xmlData: string, indent: number = 2): YAMLData {
  try {
    const lines = xmlToJson(xmlData);
    return yaml.stringify(lines, indent);
  } catch (error) {
    throw error;
  }
}

function yamlToJson(yamlString: YAMLData): string {
  try {
    const lines = yaml.parse(yamlString);
    return JSON.stringify(lines, null, 2); // Pretty-printed JSON
  } catch (error) {
    throw error;
  }
}

function yamlToXml(yamlData: YAMLData): XMLData {
  try {
    const lines = yaml.parse(yamlData);
    const jsonData = JSON.stringify(lines);
    return xmljs.json2xml(jsonData);
  } catch (error) {
    throw error;
  }
}

// Export the functions for use in other modules
export {
  jsonToXml,
  jsonToYaml,
  xmlToJson,
  xmlToYaml,
  yamlToJson,
  yamlToXml,
};