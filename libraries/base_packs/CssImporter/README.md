
# Css Importer
  > 💡 packs all .css into single .css file | 

  | 📖️  **Library**  | `@jaisocx/css-importer` | 🏷️  **ver.**: `1.4.2` | 

  | 🗓  **Updated**  | Winter 2026 | `Tue Jan 20 06:28:29 CET 2026` | 

  | 📐  **Size**     | 🗂 Folder: 106 KB | 📦 Tarball: _ KB | 📋 .js: 5 KB | 

  | ⚡  **JS Engine** | 🌐 Browser: ❌ no | 🧭 Express: ❌ no | 🖥️ Console: ✅ yes | 

---



##  The aim of the setup
  > 💡  CssImporter bundles all css files, referenced with @import url() expressions to one css file.
  > 
  > For example, the entry .css file references other .css files, prefixed with aliases:

```css

  /* css variables */
  @import url("@jaisocx-css-clean-start-MediaAndStyles/themes/theme-base/clean-start-theme-base.css");
  
  /* responsive */
  @import url("@jaisocx-css-clean-start-MediaAndStyles/responsive/clean-start--responsive-imports-main-webpack.css");

```



## CssImporter methods explained

  1. `.setPackagePath( packagePath )`
  2. `.setCssFilePath( cssFilePath )` sets the path to the entrypoint .css file, where @import url() expressions are set.
  3. `.setCssTargetFilePath( cssTargetFilePath )` sets the path to the packaged .css file.
  4. `webpack.aliases.json` is the predefined file name.
  5. `${packageRoot}` is the predefined placeholder to point the path in .setPackagePath( packagePath )




## where is the webpack.aliases.json

  for example, at the css tool packagePath cssCleanStartPath there is already webpack.aliases.json, and this is imported automatique.

```json
  {
    "@jaisocx-css-clean-start-MediaAndStyles": "${packageRoot}/MediaAndStyles/"
  }
```



## TypeScript coding examples

```typescript
  
  import * as path from "node:path";
  import { CssImporter } from "@jaisocx/css-importer";
  
  
  // paths examples:
  const cssCleanStartPath: any = path.resolve( "www/sites_tools/css_tools/CssCleanStart" );
  const cssFilePath: any = path.resolve( cssCleanStartPath, "MediaAndStyles/clean-start-main-webpack.css" );
  const cssTargetFilePath: any = path.resolve( cssCleanStartPath, "MediaAndStyles/clean-start-main-packaged.css" );
  
  
  let cssImporter: CssImporter = new CssImporter();
  
  cssImporter
    .setPackagePath( cssCleanStartPath )
    .setCssFilePath( cssFilePath )
    .setCssTargetFilePath( cssTargetFilePath )
    .build()
      .then( ( result: number ) => {
          console.log("build result", result);
        }
      );

```


---



Have a nice day.

Elias, Software Architect of Jaisocx Company


