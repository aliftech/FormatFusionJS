# **FormatFusion**

## About FormatFusion

Effortlessly Convert Between Data Formats with FormatFusion
FormatFusion is your one-stop solution for seamless conversion between YAML, JSON, and XML formats. This user-friendly tool empowers developers, data analysts, and anyone working with data.

:star: If you find FormatFusion useful, please consider giving us a star on GitHub! Your support helps us continue to innovate and deliver exciting features.

![GitHub contributors](https://img.shields.io/github/contributors/aliftech/FormatFusionJS)
![GitHub Repo stars](https://img.shields.io/github/stars/aliftech/FormatFusionJS)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/w/aliftech/FormatFusionJS/master)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/aliftech/FormatFusionJS)
![GitHub release (with filter)](https://img.shields.io/github/v/release/aliftech/FormatFusionJS)
![GitHub License](https://img.shields.io/github/license/aliftech/FormatFusionJS)

## Features

- **Read file:** Read any data from file with any format.
- **Scan url:** Read any data from url.
- **Save file:** Save data in any file format.
- **YAML To JSON Data Conversion:** Convert yaml data to json.
- **JSON To YAML Data Conversion:** Convert json data to yaml.
- **YAML To XML Data Conversion:** Convert yaml data to xml.
- **XML To YAML Data Conversion:** Convert xml data to yaml.
- **JSON To XML Data Conversion:** Convert json data to xml.
- **XML To JSON Data Conversion:** Convert xml data to json.

## Who Can Use This ?

- **Developers:** Convert configuration files and application data between formats with ease.
- **Data Analysts:** Transform data from various sources into JSON for seamless analysis and visualization.
- **Technical Professionals:** Work with data in different formats smoothly and confidently.

# FormatFusionJS Setup Instructions

## Prerequisites

- A computer with NodeJS installed
- npm installed

## Installation

1. Open a terminal or command prompt.
2. Run the following command:
   ```bash
   npm install formatfusionjs
   ```

## Quick Start

Here is the example of using FormatFusion to convert yaml data to json.

```javascript
const ff = import formatfusionjs


yaml_data = `
   name: John Doe
   age: 30
   city: New York
`;

json_data = ff.yaml_to_json(yaml_data);
console.log(json_data);
```

For more examples, you can visit our <a href="https://github.com/aliftech/FormatFusion/blob/master/DOCUMENTATION.md">documentation</a>.

## Contributing

Kindly read our [Contributing Guide](CONTRIBUTING.md) to familiarize yourself with ToolJet's development process, how to suggest bug fixes and improvements, and the steps for building and testing your changes. <br>

## Contributors

<a href="https://github.com/aliftech/FormatFusion/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=aliftech/FormatFusion" />
</a>

## License

FormatFusion © 2023, Released under the MIT License.