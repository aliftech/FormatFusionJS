## **JSON To YAML**

```javascript
const ff = require("formatfusionjs");

const jsonData = `{
    "name": "John Doe",
    "age": 30,
    "address": {
        "street": "Jalan Merdeka",
        "city": "Jakarta",
        "province": "DKI Jakarta"
    }
}`;

console.log(ff.jsonToYaml(jsonData));
```

## **JSON To XML**

```javascript
const ff = require("formatfusionjs");

const jsonData = {
  Employee: {
    name: "Aravind",
    age: 24,
    sex: "Male",
  },
};

console.log(ff.jsonToXml(jsonData));
```

## **XML To JSON**

```javascript
const ff = require("formatfusionjs");

const xml = `<note><title>Happy</title><todo>Work</todo><todo>Play</todo></note>`;

data = ff.xmlToJson(xml);

console.log(data);
```

## **XML To YAML**

```javascript
const ff = require("formatfusionjs");

const xml = `<note><title>Happy</title><todo>Work</todo><todo>Play</todo></note>`;

data = ff.xmlToYaml(xml);

console.log(data);
```

## **YAML To JSON**

```javascript
const ff = require("formatfusionjs");

yaml_data = `name: John Doe
age: 30
address:
  street: Jalan Merdeka
  city: Jakarta
  province: DKI Jakarta
`;

data = ff.yamlToJson(yaml_data);

console.log(data);
```

## **YAML To XML**

```javascript
const ff = require("formatfusionjs");

yaml_data = `name: John Doe
age: 30
address:
  street: Jalan Merdeka
  city: Jakarta
  province: DKI Jakarta
`;

data = ff.yamlToXml(yaml_data);

console.log(data);
```
