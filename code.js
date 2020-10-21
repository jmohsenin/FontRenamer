var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mappings = [
    { old: "SFUIDisplay", new: "SF Pro Display" },
    { old: "SFUIText", new: "SF Pro Text" }
];
const fontsToLoad = [
    { family: "SF Pro Text", style: "Ultralight" },
    { family: "SF Pro Text", style: "Thin" },
    { family: "SF Pro Text", style: "Light" },
    { family: "SF Pro Text", style: "Regular" },
    { family: "SF Pro Text", style: "Medium" },
    { family: "SF Pro Text", style: "Semibold" },
    { family: "SF Pro Text", style: "Bold" },
    { family: "SF Pro Text", style: "Heavy" },
    { family: "SF Pro Text", style: "Black" },
    { family: "SF Pro Display", style: "Ultralight" },
    { family: "SF Pro Display", style: "Thin" },
    { family: "SF Pro Display", style: "Light" },
    { family: "SF Pro Display", style: "Regular" },
    { family: "SF Pro Display", style: "Medium" },
    { family: "SF Pro Display", style: "Semibold" },
    { family: "SF Pro Display", style: "Bold" },
    { family: "SF Pro Display", style: "Heavy" },
    { family: "SF Pro Display", style: "Black" }
];
function loadFonts(fonts) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = fonts.map((font) => figma.loadFontAsync(font));
        yield Promise.all(promises);
        return fonts;
    });
}
loadFonts(fontsToLoad).then(() => {
    let count = 0;
    function traverse(node) {
        if (node.type == "TEXT" && node.hasMissingFont) {
            for (let i = 0; i < mappings.length; i++) {
                if (node.fontName["family"] == mappings[i]["old"]) {
                    node.fontName = { family: mappings[i]["new"], style: node.fontName["style"] };
                    count++;
                }
            }
            if ("children" in node) {
                if (node.type !== "INSTANCE") {
                    for (const child of node.children) {
                        traverse(child);
                    }
                }
            }
        }
    }
    traverse(figma.root);
    console.log("Updated " + count + " text nodes");
    figma.closePlugin();
});
