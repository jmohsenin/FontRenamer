# FontRenamer

Useful plugin for bulk-renaming fonts across files. Useful for when multiple files have an old version of a font that you no longer have a license to.

## Usage
1. Open `code.ts` and update the `mappings` and `fontstoLoad` variables with the fonts you want to rename. You need to load all the styles for the fonts you intend to rename.
2. Install typescript if you don't have it already: `npm install -g typescript`
3. In the plugin directory, load the latest type definitions: `npm install --save-dev @figma/plugin-typings`
4. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "tsc: watch - tsconfig.json". You will have to do this again every time
    you reopen Visual Studio Code.

That's it!

Note that this plugin doesn't work for mixed text layers - Figma doesn't seem to allow specific range font changing without loading all the fonts used in that node, which doesn't work when you don't have those fonts anymore.