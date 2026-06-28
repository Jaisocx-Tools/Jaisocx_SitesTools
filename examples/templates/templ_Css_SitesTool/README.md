# Sites Tool Package
  > 💡 The package does ...

  | 📖️  **Library**  | `@jaisocx/sites_tool` | 🏷️  **ver.**: `1.2.3` |
  
  | 🗓  **Updated**  | 2025 | `Nov 16 22:40 CET 2025` |
  
  | 📐  **Size**     | 🗂 Folder:   53 KB | 📦 Tarball:   12 KB | 📋 .js:        4 KB |
  
  | ⚡  **JS Engine** | 🌐 Browser: ✅ yes | 🧭 Express: ✅ yes | 🖥️ Console: ✅ yes | ❌ no |

---



## 💡 The aim of the setup
  > The package does ...



## 🗂 Structure

```ls
🗂 <Sites_tool_name>
    🗂 MediaAndStyles/
      🗂 themes/
        🗂 theme_base/
          🗂 responsive/
            📋 responsive_size_d05_very_small_xxs_landscape__<Sites_tool_name>_theme_base.css
            ...
            ...
          📋 <Sites_tool_name>_theme_base_main.css
          📋 responsive_size_Imports_<Sites_tool_name>_theme_base_Relative.css
          📋 responsive_size_Imports_<Sites_tool_name>_theme_base_Webpack.css
          📋 responsive_size_Imports_<Sites_tool_name>_theme_base_Webpack_minimal.css
        🗂 <theme_name>/
        ...
        ...
      📋 <Sites_tool_name>_main.css
      📋 <Sites_tool_name>_relative.css
      📋 <Sites_tool_name>_resolved.css
      📋 <Sites_tool_name>_resolved_minimal.css
      📋 <Sites_tool_name>_webpack.css
      📋 <Sites_tool_name>_webpack_minimal.css
    🗂 src/
      📋 index.ts
      📋 webpack.aliases.cjs
      📋 webpack.aliases.mjs
      📋 webpackAliases.ts
    🗂 transpiled/
      🗂 CommonJS/
      🗂 ESNext/
      🗂 Webpack/
        📋 <Sites_tool_name>_bundle.js
    📋 index_preview.html
    📋 index_preview.mhtml
    📋 index_preview.eml
    📋 <Sites_tool_name>_preview.html
    📋 package.json
    📋 package-lock.json
    📋 README.md
    📋 README.eml
    📋 README.html
    📋 README.mhtml
    📋 webpack.aliases.json

```





## package structure

`favicon/*.ico` site logo to show in browser's tab label above, referenced in index.example.html in `<link rel="icon" ... />` tag.

`MediaAndStyles/*.css` styles where css props are set via css variables. For example `font-size: var(--jsx--sitestool--htmlelem--font-size);`.

`MediaAndStyles/themes` styles where the css variables get their values. For example `--jsx--sitestool--htmlelem--font-size: 1rem;`.

`MediaAndStyles/themes/theme_base` all css variables from main.css get their values. The responsive fileset is imported in relative and webpack aliased .css imports.

`MediaAndStyles/themes/color_themes` examples of themes where just the color and background color css variables get their values. May also set border-color and background images, shadows and other color themes relevant css variables if referenced in main.css.

`MediaAndStyles/themes/theme_layout_example` a theme with responsive fileset produced by SitesToolAutomation. The responsive fileset is relevant mostly for fine tuning sites for mobile portrait, tablet and big displays, since for the layout themes for sure the sizes of the displays are relevant.

`src/index.ts` styles imports to be accessed later when built with Webpack, and the produced by The Webpack `bundle.js` is referenced like `<script src="bundle.js"` in .html.

`src/webpack...` infrastructure static files for the Webpack.

`BuildData.example.json` The template of a json config for building a sites tool. You may use to copy paste to BuildData.json for a new sites tool.

`index.example.html` the sites tool preview, locally and when installed with the new command `./cmd/install_and_view_sites_tool.sh`.

`package-lock.json` npm system file.

`package.json` the main conf file for this npm package.

`README.md` documentation file in md format.

`webpack.aliases.json` the webpack alias' name and the relative path in this npm package folders structure.










