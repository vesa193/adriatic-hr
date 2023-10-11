# Adriatic.hr

## Minimum requirements

Node version should be at least 18.0.0.

This rule exist into package.json file.

`"node": ">=18"`

## Instructions

After the project repository fetched on the local machine, user needs ensure node version is regular with rules above and install all packages, it allows the application to run further.

Important thing as well, create this folder in the root of `adriatic-hr` project and avoid issues.
Create `.vscode` folder, in it create new folder `settings.json`, it should look like this below.

```bash
{
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

## Usage of api - avoid CORS

If request is forbiden and in console user has error 403 (Forbidden), should do next:

Should go to Network tab in DevTools, then double click on given request, it will open new tab in user's browser and click on button `Request temporary access to the demo server`, it should able request usage.

1. Should double click here at first
   ![Screenshot](./../src/assets/screenshots/adriatic-screenshot-01.png)

2. As second step, user shold click and able request sending and receiving data to client
   ![Screenshot](./../src/assets/screenshots/adriatic-screenshot.png)
