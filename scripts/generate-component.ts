import fs from "fs";
import path from "path";

(() => {
  const templatesPath = path.join(process.cwd(), "scripts", "templates");
  const componentsPath = path.join(process.cwd(), "src", "components");

  const [, , componentName] = process.argv;
  const kebabName = componentName
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();

  const componentTemplate = fs.readFileSync(
    path.join(templatesPath, "component.template"),
    "utf8",
  );
  const indexTemplate = fs.readFileSync(
    path.join(templatesPath, "index.template"),
    "utf8",
  );

  const generatedComponentFile = componentTemplate
    .replace(/{{name}}/g, componentName)
    .replace(/{{kebab-name}}/g, kebabName);

  const generatedIndexFile = indexTemplate
    .replace(/{{name}}/g, componentName)
    .replace(/{{kebab-name}}/g, kebabName);

  fs.mkdirSync(path.join(componentsPath, kebabName));
  fs.writeFileSync(
    path.join(componentsPath, kebabName, `${kebabName}.component.tsx`),
    generatedComponentFile,
  );
  fs.writeFileSync(
    path.join(componentsPath, kebabName, `index.ts`),
    generatedIndexFile,
  );
})();
