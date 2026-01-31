
# Typescript Package
  `@jaisocx/typescript_package`
  > 💡 The package does ...



#### status
  >  ✅ Ok



####  supports
  > Server Side

```
   Browser |   Express |   Console
     ❌ no |    ✅ yes |     ✅ yes
```



#### 📅 Updated
  > Winter 2026

  **Library**: `@jaisocx/typescript_package` ver. `1.0.1`

  🗓 **timestamp**: `Tue Jan 20 06:28:29 CET 2026`

---



#### size
  > 60 KB - 5 KB

```
  Current Folder |   This lib installed        |   typescript in src/  
                 |     in other node_modules/  |                       
           55 KB |                             |                5 KB   
```

---





## 💡 The aim of the setup
  > The package does ...


## Interfaces




# Site Tool Automation

## How to gen new set of .css files for the improved responsive site's feature

  in the Terminal, in the Root of the Project



## Produce theme responsive .css fresh fileset for the CssCleanStart

```bash

  ./cmd/CssCleanStart_3_MediaAndStyle.sh
  
```



### with debug option

```bash

  ./cmd/CssCleanStart_3_MediaAndStyle.sh --debug

```



## for a sites tool, css or js

```bash

  ./cmd/sitesTool_MediaAndStyles.sh

```



### with debug option

```bash

  ./cmd/sitesTool_MediaAndStyles.sh --debug

```



## Workarounds

### 1. joining bitbufs arrays by reference



## Program flow

### 1. command line args

  in terminal:

```bash

  example_produce_CssTable_themeExample_MediaAndStyles.sh ( args )

```

  calls base bash scipt:

```bash

  produceSitesTool_MediaAndStyles_base.sh ( args )

```


  in docker:

```bash

  /opt/jaisocx/sites_tools/workspace/ts/Jaisocx_SitesTools/packages/SitesToolAutomation/bash/produceSitesToolTemplate.sh ( args )

```


  node in dockerized ts service:

```bash

  node /opt/jaisocx/sites_tools/workspace/ts/Jaisocx_SitesTools/packages/SitesToolAutomation/src/main/produceSitesTool_byExtendedPropsForTemplate.ts ( args )

```



  args mapped to js object:

```typescript

  const terminalInpArgsObject: any = {
    sitesTool_ThemeName: "theme_base",
    sitesToolName: "",
    cssOrJsTool: "",
    template: "",
    withSizesCssConstants: ""
  };
  
```

  line 55: overrides method mainClassInstance.responsiveCssFile.getTemplateDataOverridden.

  in the overriding method You may implement assignemnt of custom values passed to template.



  this method gets 2 args:

  1. responsiveDatasetPropName: id of the json object in dataset
  2. templateDataBase: custom js object, this will be returned from this method to use in the templates.



  The overriding method args explained

  1. responsiveDatasetPropName: id of the json object in dataset at path

  `workspace/ts/Jaisocx_SitesTools/packages/SitesToolAutomation/data/ResponsiveSizes/ResponsiveSizes.json`



  Example of value for responsiveDatasetPropName: **mobile_xs**

```json
  
  {
    ...
    ...
    "data": {
      "mobile_xs": {
        "range_orderby_id": "e02",
        "width": {
          "from": 240,
          "to": 320
        },
        "height": {
          "from": 320,
          ...
          ...
        }
        ...
      }
      ...
    }
    ...
  }

```



---



Have a nice day.

Elias, Software Architect of Jaisocx Company






