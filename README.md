# Adriatic.hr

## Minimum requirements

Node version should be at least 18.0.0.

This rule exist into package.json file.

`"node": ">=18"`

## Instructions

After the project repository fetched on the local machine, user needs ensure node version is regular with rules above and install all packages, it allows the application to run further.

Important thing as well, create this folder in the root of `adriatic-hr` project and avoid issues.
Create `.vscode` folder, in it create new folder `settings.json`, it should look like this below.

```{
    "files.associations": {
        "*.css": "tailwindcss"
    },
    "emmet.includeLanguages": {
        "postcss": "css"
    }
}
```

Should copy code above into .vscode/`settings.json`

As next step this command should run in the terminal:

`npm install`

After this, the link of the localhost will appear in the terminal, open it and app will running.
