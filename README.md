# Calculator App

**App description:** Calculator app that does simple arithmetic calculations.

## How to run the app locally in a web browser

> [!NOTE]
> This instruction is for how to run the app in the Vscode editor.

- Get extenstion (if you don't have it yet): In code editor, go to extentions and get the "live server" extension (ensure you are connected to the internet).
- Open application in the browser: After installing extension, click on the provided "Go live" button at the buttom right of the code editor to open application in the browser at (default) port "5500".
- Changing live server port to desired port: Vscode editor should automatically add the `.vscode` folder in the root of this directory containing a `settings.json` file. This settings file will contain some `JSON` content. The liveserver port settings will look like this inside the settings file:

````
{
    "liveServer.settings.port": 5500
}
````
Change the port number as desired.

> If Vscode does not automatically add this folder for you, you can just manually create a .vscode folder in the root of this directory, add a settings.json file and add the JSON content in the code block above. And then change the browser port as desired.


