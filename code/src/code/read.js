const yaml = require("js-yaml");
const fs = require("fs");
const catalog = "../../.github/workflows/catalog.yaml"

let yamlFile = fs.readFileSync(catalog, "utf8");
let loadedYaml = yaml.load(yamlFile);

let channels=loadedYaml.channels
channels.forEach(element => {
    console.log(element.name);
    console.log(element.members);

});

