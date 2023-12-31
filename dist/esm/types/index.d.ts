type JSONData = {};
type XMLData = string;
type YAMLData = string;
declare function jsonToXml(jsonData: JSONData): XMLData;
declare function jsonToYaml(jsonString: string, indent?: number): YAMLData;
declare function xmlToJson(xmlData: XMLData): JSONData;
declare function xmlToYaml(xmlData: XMLData, indent?: number): YAMLData;
declare function yamlToJson(yamlString: YAMLData): string;
declare function yamlToXml(yamlData: YAMLData): XMLData;
export { jsonToXml, jsonToYaml, xmlToJson, xmlToYaml, yamlToJson, yamlToXml, };
//# sourceMappingURL=index.d.ts.map