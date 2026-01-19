export interface CommandLineArgsInterface {

  getCommandLineArgs(): object;

  getAfterReadNTransformed(): object;

  readCommandLineArgs(): CommandLineArgsInterface;


  /*
    @purpose: --sitesTool_ThemeName="theme_example" --sitesToolName="CssCleanStart"
    =>

    {
      "sitesTool_ThemeName": "theme_example",
      "sitesToolName": "CssCleanStart",
        ...
    }

  */
  transformCommandLineArgs(): CommandLineArgsInterface;
}



