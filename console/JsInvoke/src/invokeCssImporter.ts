import * as path from "node:path";
import * as fs from "node:fs";

import { CommandLineArgs } from "@jaisocx/command-line";
import { CssImporter } from "@jaisocx/css-importer";



// ### invoked by bash script: {PROJECT}/cmd/cssImporter.sh
/**

  ## ./.env: IN_DOCKER_PROJECT_VOLUME="/opt/jaisocx/sites_tools/workspace/ts"
  --Root="${IN_DOCKER_PROJECT_VOLUME}" \

  --BuildData="${IN_DOCKER_PROJECT_VOLUME}/BuildData.json" \

  ## this package's 2 paths, of the folder and of the script being invoked by bash script "./cmd/base/js_invoke.sh"
  --packagePath="Jaisocx_SitesTools/console/JsInvoke" \
  --script="invokeCssImporter.js" \

  // path of the sites tool to build together the entry .css with imports by the @jaisocx/css-importer
      --sitesToolPath="Jaisocx_SitesTools/sites_tools/css_tools/CssCleanStart_2" \

  // the entry .css file of a tool produced by SitesToolAutomation is on relative path
  // MediaAndStyles/${SitesTool_Name}_main_Webpack.css
      --cssFilePath="MediaAndStyles/CssCleanStart_2_main_Webpack.css" \

  // the resulting .css file built together by @jaisocx/css-importer
  // MediaAndStyles/${SitesTool_Name}_main_resolved.css
      --cssTargetFilePath="MediaAndStyles/CssCleanStart_2_main_resolved.css"

*/

export type CommandArgsObject = {
  Root: "",
  BuildData: "",
  packagePath: "",
  script: "",
  sitesToolPath: "",
  cssFilePath: "",
  cssTargetFilePath: ""
};



export async function invokeCssImporter(): Promise<number> {
  let commandLineArgsInstance: CommandLineArgs = new CommandLineArgs();
  let commandArgs: CommandArgsObject = commandLineArgsInstance
    .readCommandLineArgs()
    .transformCommandLineArgs()
    .getCommandLineArgs() as CommandArgsObject;

  console.log (
    "let commandArgs",
    commandArgs
  );

  const buildDataPath: any = path.resolve (
    commandArgs.Root,
    commandArgs.BuildData
  );

  if (false === fs.existsSync( buildDataPath ) ) {
    throw new Error(`BuildData.json not available at path: ${buildDataPath}`);
  }


  // SITES TOOL like @jaisocx/css-clean-start-2, path of the sites tool's folder
  // --sitesToolPath="Jaisocx_SitesTools/sites_tools/css_tools/CssCleanStart_2" \
  let sitesToolPath: any = path.resolve (
    commandArgs.Root,
    commandArgs["sitesToolPath"]
  );

  if (false === fs.existsSync( sitesToolPath ) ) {
    throw new Error(`Sites Tool folder not available at path: --sitesToolPath="${sitesToolPath}"`);
  }


  // the entry .css file of a tool produced by SitesToolAutomation is on relative path
  // MediaAndStyles/${SitesTool_Name}_main_Webpack.css
  let cssFilePath: any = path.resolve (
    sitesToolPath,
    commandArgs["cssFilePath"]
  );

  if (false === fs.existsSync ( cssFilePath ) ) {
    throw new Error(`Entry CSS file not available at path: --cssFilePath="${cssFilePath}"`);
  }

  console.log (
    "let cssFilePath",
    cssFilePath
  );


  // the resulting .css file built together by @jaisocx/css-importer
  // MediaAndStyles/${SitesTool_Name}_main_resolved.css
  let cssTargetFilePath: any = path.resolve (
    sitesToolPath,
    commandArgs["cssTargetFilePath"]
  );

  if (true === fs.existsSync( cssTargetFilePath ) ) {
    fs.unlinkSync( cssTargetFilePath );
    console.log (
      `Before Css Importer task, the previous target CSS file was deleted on path --cssTargetFilePath="${cssTargetFilePath}"`,
      cssTargetFilePath
    );
  }

  fs.writeFileSync (
    cssTargetFilePath,
    "",
    { encoding: "ascii" }
  );

  if (false === fs.existsSync( cssTargetFilePath ) ) {
    throw new Error( `New CSS file could NOT be created on path --cssTargetFilePath="${cssTargetFilePath}"` );
  } else {
    console.log (
      `New CSS file was created on path --cssTargetFilePath="${cssTargetFilePath}"`,
      cssTargetFilePath
    );
  }

  console.log (
    "let cssTargetFilePath",
    cssTargetFilePath
  );



  let cssImporter: CssImporter = new CssImporter();
  cssImporter
    .setPackagePath( sitesToolPath )
    .setCssFilePath( cssFilePath )
    .setCssTargetFilePath( cssTargetFilePath );

  let result: number = await cssImporter.build();

  console.log (
    "let result: number (\"CssImporter.build() result\")",
    result
  );

  let retVal: number = 2;


  return retVal;
}


// INVOKES THE MAIN SCRIPT IN THIS .ts FILE
// Line 44: ### export async function invokeCssImporter(): Promise<number> {
invokeCssImporter()
  .then (
    ( retVal: number ) => {
      console.info (
        "CssImporter Done.",
        retVal
      );
    }
  );


