
# clean_start_tiny

  > 💡 Aligning styles of a site, the single file `clean_start_tiny.css` of 340 ( three hundred fourty ) css code lines.


  | 🗂  **Library**  | `@jaisocx/clean_start_tiny` | 🏷  **ver.**: `1.0.1` |

  | 🗓  **Updated**  | 🌼 Summer 2026 | `29. Jul AD 2026 05:08 UTC` |

  | 📐  **Size**     | 🗂 Folder: . KB | 📦 Tarball: . KB | 📄 .js: . KB |

  | ⚡  **JS Engine** | 🌐 Browser: ✅ yes | 🧭 Express: ✅ yes | 🖥️ Console: ❌ no | 

---



## The aim of the setup

  >  💡  Aligning styles of a site, the single file `clean_start_tiny.css` of 340 ( three hundred fourty ) css code lines.

  The tiny css clean start has all styles set hardcoded, 
    and, thanks to this, the css variables code block just has 100 code lines.

  The clean_start_tiny.css file of size 8_660 B, doesn't solve ul li and tables styling. 



## Examples

### html example

  ```html
    <html language="en" class="clean_start">
  ```


### css example

  ```css
  
    .clean_start {
    
    }
   
  ```



##  Structure

```ls
📚 CeanStart_Tiny/
    🗂 favicon/
      📄 Icon_Jaisocx.ico
    🗂 MediaAndStyles/
      🗂 clean_start_tiny__html_tags/
        📄 clean_start_tiny__all_tags.css
        📄 clean_start_tiny__anchor.css
        📄 clean_start_tiny__display.css
        📄 clean_start_tiny__h.css
        📄 clean_start_tiny__p.css
        📄 clean_start_tiny__pre.css
        📄 clean_start_tiny__site.css
        📒 README.md
      🗂 themes/
        🗂 theme_base/
          📄 clean_start_tiny__theme_base.css
      🗂 tiny_sites_tools/
        🗂 tiny_sites_table/
          📄 clean_start_tiny__table.css
        🗂 tiny_sites_ul_li/
          📄 clean_start_tiny__ul_li.css
          📄 tiny_sites_tools__ul_li.css
      📄 clean_start_tiny.css
    📄 clean_start_tiny__preview.html
    📒 README.md

```





```css

.clean_start {
                                         /* microsoft, ios, linux, android */
  --clean_start--handwrite--font-family: "<microsoft>",   "Bradley Hand",   "Z003",   "cursive";
  --clean_start--sans--font-family:      "Arial";
  --clean_start--serif--font-family:     "Times New Roman";
  --clean_start--monospace--font-family: "Courier";
}


.clean_start {

  --clean_start--rem: 16px;

  --clean_start--all_tags--font-family: var(--clean_start--sans--font-family);
  --clean_start--all_tags--font-size: 0.95rem;
  --clean_start--all_tags--line-height: 1.29rem;
  --clean_start--all_tags--color: black;
  --clean_start--all_tags--border-width: 0px;

  --clean_start--anchor--color: navy;
  --clean_start--anchor_hover--color: blue;

  --clean_start--h1--font-size: 1.25rem;
  --clean_start--h1--line-height: 1.7rem;

  --clean_start--h--font-size: 0.9rem;
  --clean_start--h--line-height: 1.4rem;
  --clean_start--h--margin: 1.4rem 0 0.4rem 0;
  --clean_start--h--color: black;

  --clean_start--p--margin: 1.4rem 0 0 0;


  /* ul li i */
  --clean_start--ul--margin: 0.3rem 0 0.4rem 1rem;
  --clean_start--ul_li_a--padding: 0 0 0 1rem;
  --clean_start--ul_li_a--list_style--content: '🟠';
  --clean_start--ul_li_a--list_style--left: 0;
  --clean_start--ul_li_a--list_style--color: var(--clean_start--all_tags--color);
  --clean_start--ul_li_a--list_style--font-size: 0.4rem;

  /* ul.list_style_dotted */
  --clean_start--ul_li_a--list_style--top: 0.55rem;
  --clean_start--ul_li_a--list_style--size: 4px;
  --clean_start--ul_li_a--list_style--border: 0 solid #33bc4a;
  --clean_start--ul_li_a--list_style--border-radius: 2px;
  --clean_start--ul_li_a--list_style--background-color: #33bc4a;


  /* pre */
  --clean_start--pre--font-family: var(--clean_start--monospace--font-family);
  --clean_start--pre--font-size: 0.9rem;
  --clean_start--pre--line-height: 1.2rem;


  --clean_start--site--min-height: 100vh;
  --clean_start--site--max-height: unset;
  --clean_start--site--height: auto;

  --clean_start--site--min-width: 72%;
  --clean_start--site--max-width: 100%;
  --clean_start--site--width: 72%;

  --clean_start--site--padding: 1rem 1rem 1rem 1rem;
  --clean_start--site--margin: 0 auto 0 auto;

  --clean_start--site--overflow-x: hidden;
  --clean_start--site--overflow-y: visible;

  --clean_start--body_tag--background: #eefefa;
  --clean_start--site--background: #fdfdfd;


  /* table */
  --clean_start--table_caption--text-align: center;
  --clean_start--table_caption--color: #fdfdfd;
  --clean_start--table_caption--background-color: darkgreen;
  --clean_start--table_caption--border: 0.5px solid green;

  --clean_start--thead--background-color: #eefedd;
  --clean_start--tfoot--background-color: #ddfedd;


  /* scroll */
  --clean_start--scrollbar-thumb--background-color: lime;
  --clean_start--scrollbar-track--background-color: #fafefa;
  --clean_start--webkit-scrollbar--size: 0.3rem;
  --clean_start--scrollbar--width: thin;
  --clean_start--scrollbar--color: lime #e5fee5;
}

```



Have a nice day, Jaisocx Software Architect Elias


