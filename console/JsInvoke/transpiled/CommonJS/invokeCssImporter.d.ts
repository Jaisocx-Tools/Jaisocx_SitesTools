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
    Root: "";
    BuildData: "";
    packagePath: "";
    script: "";
    sitesToolPath: "";
    cssFilePath: "";
    cssTargetFilePath: "";
};
export declare function invokeCssImporter(): Promise<number>;
//# sourceMappingURL=invokeCssImporter.d.ts.map