import * as path from "node:path";
import * as fs from "node:fs";
import { CommandLineArgs } from "@jaisocx/command-line";
import { CssImporter } from "@jaisocx/css-importer";
export async function invokeCssImporter() {
    let commandLineArgsInstance = new CommandLineArgs();
    let commandArgs = commandLineArgsInstance
        .readCommandLineArgs()
        .transformCommandLineArgs()
        .getCommandLineArgs();
    console.log("let commandArgs", commandArgs);
    const buildDataPath = path.resolve(commandArgs.Root, commandArgs.BuildData);
    if (false === fs.existsSync(buildDataPath)) {
        throw new Error(`BuildData.json not available at path: ${buildDataPath}`);
    }
    // SITES TOOL like @jaisocx/css-clean-start-2, path of the sites tool's folder
    // --sitesToolPath="Jaisocx_SitesTools/sites_tools/css_tools/CssCleanStart_2" \
    let sitesToolPath = path.resolve(commandArgs.Root, commandArgs["sitesToolPath"]);
    if (false === fs.existsSync(sitesToolPath)) {
        throw new Error(`Sites Tool folder not available at path: --sitesToolPath="${sitesToolPath}"`);
    }
    // the entry .css file of a tool produced by SitesToolAutomation is on relative path
    // MediaAndStyles/${SitesTool_Name}_main_Webpack.css
    let cssFilePath = path.resolve(sitesToolPath, commandArgs["cssFilePath"]);
    if (false === fs.existsSync(cssFilePath)) {
        throw new Error(`Entry CSS file not available at path: --cssFilePath="${cssFilePath}"`);
    }
    console.log("let cssFilePath", cssFilePath);
    // the resulting .css file built together by @jaisocx/css-importer
    // MediaAndStyles/${SitesTool_Name}_main_resolved.css
    let cssTargetFilePath = path.resolve(sitesToolPath, commandArgs["cssTargetFilePath"]);
    if (true === fs.existsSync(cssTargetFilePath)) {
        fs.unlinkSync(cssTargetFilePath);
        console.log(`Before Css Importer task, the previous target CSS file was deleted on path --cssTargetFilePath="${cssTargetFilePath}"`, cssTargetFilePath);
    }
    fs.writeFileSync(cssTargetFilePath, "", { encoding: "ascii" });
    if (false === fs.existsSync(cssTargetFilePath)) {
        throw new Error(`New CSS file could NOT be created on path --cssTargetFilePath="${cssTargetFilePath}"`);
    }
    else {
        console.log(`New CSS file was created on path --cssTargetFilePath="${cssTargetFilePath}"`, cssTargetFilePath);
    }
    console.log("let cssTargetFilePath", cssTargetFilePath);
    let cssImporter = new CssImporter();
    cssImporter
        .setPackagePath(sitesToolPath)
        .setCssFilePath(cssFilePath)
        .setCssTargetFilePath(cssTargetFilePath);
    let result = await cssImporter.build();
    console.log("let result: number (\"CssImporter.build() result\")", result);
    let retVal = 2;
    return retVal;
}
// INVOKES THE MAIN SCRIPT IN THIS .ts FILE
// Line 44: ### export async function invokeCssImporter(): Promise<number> {
invokeCssImporter()
    .then((retVal) => {
    console.info("CssImporter Done.", retVal);
});
//# sourceMappingURL=invokeCssImporter.js.map