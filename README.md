# FontRenamer

Figma plugin for bulk-renaming fonts across files. Useful for when multiple files have an old version of a font that you no longer have a license to.

## Usage
1. Open `code.ts` and update the `mappings` and `fontsToLoad` variables with the fonts you want to rename. You need to load all the styles for the fonts you intend to rename.
2. Install TypeScript if you don't have it already: `npm install -g typescript`
3. In the plugin directory, load the latest type definitions: `npm install --save-dev @figma/plugin-typings`
4. Compile TS to JS: in VsCode, `Run Build Task...` and select `tsc: wach -tsconfig.json`. You'll have to do this every time you re-open VSCode.

That's it!

Note that this plugin doesn't work for mixed text layers - Figma doesn't seem to allow specific range font changing without loading all the fonts used in that node, which doesn't work when you don't have those fonts anymore.