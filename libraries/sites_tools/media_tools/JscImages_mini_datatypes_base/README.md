# Set of mini images
  > 💡 pack of images installs to node_modules and turns on by css class name.
  
  | 📖️  **Library**  | `@jaisocx/media_tools_images_mini_datatypes_base` | 🏷️  **ver.**: `1.2.2` |
  
  | 🗓  **Updated**  | Winter 2026 | `Tue Jan 20 06:28:29 CET 2026` |
  
  | 📐  **Size**     | 🗂 Folder: 8.7 MB | 📦 Tarball: _ KB | 📋 styles: 13 KB | images: 12 KB | node_modules: 8.6 MB | 

  | ⚡  **JS Engine** | 🌐 Browser: ✅ yes | 🧭 Express: ✅ yes | 🖥️ Console: ❌ no |

---



## Aim Of The Setup
  > 💡 pack of images installs to node_modules and turns on by css class name.

  Other sites tools 
  don't have to publish mini-images along with `.ts` and `.css`
  for preview purposes.



## Examples

### CSS Example

  ```css  
    /* MediaAndStyles/JscImages_mini_datatypes_base_main_relative.css */
    
    .jsc .JscImages_mini_datatypes_base .mini-image.datatype.number {
      background-image: url("./images/icons8-3-100.png");
    }
  ```



### HTML Node

  ```html
    <item class="mini-image datatype number"></item>
  ```



### HTML Page

  ```html
    <!DOCTYPE html>
    <html lang="en" class="jsx theme_darkmode jsc">
    <head>

      <link
          rel="stylesheet"
          type="text/css"
          charset="utf-8"
          href="MediaAndStyles/JscImages_mini_datatypes_base_main_preprocessed_relative.css"
      />

    </head>
    <body>
      <images-block class="JscImages_mini_datatypes_base">
        <item class="mini-image datatype number"></item>
      </images-block>
    </body>
    </html>
  ```


