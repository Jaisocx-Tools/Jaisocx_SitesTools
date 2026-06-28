# Set of mini images
  > 💡 pack of images installs to node_modules and turns on by css class name.
  
  | 📖️  **Library**  | `@jaisocx/media_tools_images_mini_mimetypes_base` | 🏷️  **ver.**: `1.2.2` |
  
  | 🗓  **Updated**  | Winter 2026 | `Tue Jan 20 06:28:29 CET 2026` |

  | 📐  **Size**     | 🗂 Folder: 8.8 MB | 📦 Tarball: _ KB | 📋 styles: 23 KB | images: 106 KB | node_modules: 8.6 MB |

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
    /* MediaAndStyles/JscImages_mini_mimetypes_base_main_relative.css */
    
    .jsc .JscImages_mini_mimetypes_base .mini-image.mimetype.audio {
      background-image: url("./cdn/images/audio_and_video_mime_type.png");
    }
  ```



### HTML Node

  ```html
    <item class="mini-image mimetype audio"></item>
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
          href="MediaAndStyles/JscImages_mini_mimetypes_base_main_preprocessed_relative.css"
      />
    </head>
    <body>
      <images-block class="JscImages_mini_mimetypes_base">
        <item class="mini-image mimetype audio"></item>
      </images-block>
    </body>
    </html>
  ```


