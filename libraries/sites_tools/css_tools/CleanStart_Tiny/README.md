
# clean_start_tiny

  > 💡 Aligning styles of a site, the single file `clean_start_tiny.css` of 740 ( seven hundred fourty ) css code lines.


  | 🗂  **Library**  | `@jaisocx/clean_start_tiny` | 🏷  **ver.**: `1.0.1` |

  | 🗓  **Updated**  | 🌼 Summer 2026 | `02. August AD 2026 12:10 UTC` |

  | 📐  **Size**     | 🗂 Folder: 300 kb | 📦 Tarball: . KB | 📄 .css: 18.28 kb | 📄 .html: 10.34 kb, 46.33 kb | 

  | ⚡  **JS Engine** | 🌐 Browser: ✅ yes | 🧭 Express: ✅ yes | 🖥️ Console: ❌ no | 

---



## The aim of the setup

  > 💡 Aligning styles of a site, the single file `clean_start_tiny.css` of 740 ( seven hundred fourty ) css code lines.

  The tiny css clean start has all styles set hardcoded, 
    and, thanks to this, the css variables code block just has 100 code lines.

  The clean_start_tiny.css file of size 8_660 B, doesn't solve ul li and tables styling. 


## Links

**docs**
[https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/readme__clean_start_tiny.html](https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/readme__clean_start_tiny.html)



### clean_start_tiny examples

**table** 
[https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/clean_start_tiny__table.html](https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/clean_start_tiny__table.html)


**ul li** 
[https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/clean_start_tiny__ul_li.html](https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/clean_start_tiny__ul_li.html)


**all features css 18.28kb**
[https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/template_clean_start_linked__all_features.html](https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/template_clean_start_linked__all_features.html)


**all features in one html file 46.33kb**
[https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/template_clean_start_one__all_features.html](https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/template_clean_start_one__all_features.html)



## Examples

### html example

  ```html
    <html language="en" class="clean_start">
  ```

  ```html
    <html language="en" class="<Namespace> clean_start">
  ```

  ```html
    <html language="en" class="clean_start theme_fonts_a">
  ```

  ```html
    <html language="en" class="clean_start theme_fonts_a font_override">
  ```



### css example

  ```css
    .clean_start {
    
    }
  ```

  ```css
    .clean_start.<Your Namespace> {
      --clean_start--all_tags--font-size: 0.94rem;
    }
  ```



##  Structure

```ls
📚 CleanStart_Tiny/
    🗂 favicon/
      📄 Icon_Jaisocx.ico
    🗂 MediaAndStyles/
        🗂 clean_start_tiny__html_tags/ 
          📄 clean_start_tiny__all_tags.css
          📄 clean_start_tiny__anchor.css
          📄 clean_start_tiny__h.css
          📄 clean_start_tiny__p.css
          📄 clean_start_tiny__pre.css
          📄 clean_start_tiny__site.css
          📒 README.md
        🗂 clean_start_tiny__responsive/ 
          📄 responsive_mobile_friendly.css
        🗂 clean_start_tiny__styles/ 
        🗂 themes/ 
          🗂 theme_base/
            📄 clean_start_tiny__theme_base.css
          🗂 themes_fonts/
            📄 clean_start__font_override.css
            📄 clean_start_tiny__fonts.css
            📄 theme_fonts_a.css
            📄 theme_fonts_b.css
            📄 theme_fonts_c.css
            📄 theme_fonts_old_good_fonts.css
        🗂 tiny_sites_tools/ 
          🗂 tiny_sites_label/ 
          🗂 tiny_sites_scrolls/ 
          🗂 tiny_sites_table/ 
          🗂 tiny_sites_ul_li/ 
        📄 clean_start_tiny__all_features.css
        📄 clean_start_tiny__base.css
    📄 clean_start_tiny__preview.html
    📒 README.md
    📄 template_clean_start_linked__all_features.html
    📄 template_clean_start_one__all_features.html

```



## Theme Base

```css

.clean_start {
                                         /* microsoft, ios, linux, android */
  --clean_start--handwrite--font-family: "<microsoft>",   "Bradley Hand",   "Z003",   "cursive";
  --clean_start--sans--font-family:      "Arial";
  --clean_start--serif--font-family:     "Times New Roman";
  --clean_start--monospace--font-family: "Courier";
}


.clean_start {

.clean_start {

  --clean_start--rem:  16px;

  --clean_start--all_tags--font-family:   var(--clean_start--sans--font-family);
  --clean_start--all_tags--font-size:     0.95rem;
  --clean_start--all_tags--line-height:   1.49rem;
  --clean_start--all_tags--color:         black;
  --clean_start--all_tags--border-width:  0;

  --clean_start--anchor--color:           navy;
  --clean_start--anchor_hover--color:     #2292e5;

  --clean_start--h1--font-size:           1.25rem;
  --clean_start--h1--line-height:         1.7rem;

  --clean_start--h--font-size:            0.9rem;
  --clean_start--h--line-height:          1.4rem;
  --clean_start--h--margin:               1.4rem 0 0.4rem 0;
  --clean_start--h--color:                black;

  --clean_start--p--margin:               1.4rem 0 0 0;


  /* ul li i */
  --clean_start--ul--margin:              0.3rem 0 0.4rem 0.5rem;
  --clean_start--i_ul--margin:            0.3rem 0 0.4rem 3.0rem;

  --clean_start--ul_li_i--padding:        0 0 0 0.5rem;
  --clean_start--i_ul_li_i--padding:      0 0 0 0.2rem;

  --clean_start--ul_li_i--font-size:      var(--clean_start--all_tags--font-size);
  --clean_start--ul_li_i--line-height:    var(--clean_start--all_tags--line-height);

  /* .tag_content */
  --clean_start--ul_li_i_c--content: '-';
  --clean_start--ul_li_i_c--top:          0;
  --clean_start--ul_li_i_c--left:         -0.5rem;
  --clean_start--ul_li_i_c--font-size:    var(--clean_start--ul_li_i--font-size);
  /* --clean_start--ul_li_i_c--line-height: var(--clean_start--ul_li_i--line-height); */
  --clean_start--ul_li_i_c--color:        #33ab55;

  /* ul.tag_border */
  --clean_start--ul_li_i_o--tag_border--content: '';
  --clean_start--ul_li_i_o--tag_border--top:            0.4rem;
  --clean_start--ul_li_i_o--tag_border--left:           0;
  --clean_start--ul_li_i_o--tag_border--font-size:      0;
  --clean_start--ul_li_i_o--tag_border--size:           8px;
  --clean_start--ul_li_i_o--tag_border--border-radius:  5px;
  --clean_start--ul_li_i_o--tag_border--border:         1px solid lime;
  --clean_start--ul_li_i_o--tag_border--background:     #eafdf2;


  /* label */
  --clean_start--label--display:           block;

  --clean_start--label--font-size:         0.79rem;
  --clean_start--label--line-height:       var(--clean_start--label--font-size);

  --clean_start--label--padding:           0.12rem 0.5rem 0.16rem 0.5rem;
  --clean_start--label--margin:            0 0 0 0;

  --clean_start--label--color:             green;
  --clean_start--label--background-color:  #eefafd;

  --clean_start--label--border:            1px solid green;
  --clean_start--label--border-radius:     0.8rem;


  /* pre */
  --clean_start--pre--font-family:    var(--clean_start--monospace--font-family);
  --clean_start--pre--font-size:      0.9rem;
  --clean_start--pre--line-height:    1.2rem;


  /* site */
  --clean_start--site--padding:              1rem 1rem 1rem 1rem;
  --clean_start--site--width:                72%;

  --clean_start--site--background:           #fdfdfd;
  --clean_start--body_tag--background:       #eefefa;


  /* table */
  --clean_start--table--border:                     0.5px solid green;

  --clean_start--table_caption--text-align:         left;
  --clean_start--table_caption--color:              #333;
  --clean_start--table_caption--background-color:   #fdfdfd;
  --clean_start--table_caption--border:             0.5px solid green;

  --clean_start--table_th--text-align:              center;
  --clean_start--table_th--color:                   black;
  --clean_start--table_th--background-color:        #eefedd;

  --clean_start--table_td--color:                   green;
  --clean_start--table_td--background-color:        #fdfdfd;

  --clean_start--table_td_odd--color:               #553322;
  --clean_start--table_td_odd--background-color:    #fafaf2;

  --clean_start--table_td_even--color:              darkgreen;
  --clean_start--table_td_even--background-color:   #f2faf2;

  --clean_start--table_tfoot--color:                black;
  --clean_start--table_tfoot--background-color:     #fdfdfd;


  /* scroll */
  --clean_start--scrollbar-thumb--background-color: lime;
  --clean_start--scrollbar-track--background-color: #fafefa;
  --clean_start--scrollbar--size:                   0.3rem;

  /*
  scrollbar-width: auto;
  scrollbar-width: thin;
  scrollbar-width: none;
  */
  --clean_start--scrollbar--width: thin;
}


/* ul inline */
.clean_start ul.inline {
  --clean_start--ul_li_i_c--content: '🔵';

  --clean_start--ul_li_i_c--top:     0;
  --clean_start--ul_li_i_c--left:   -0.5rem;

  --clean_start--ul--margin:         0.3rem 0 0.4rem 0.5rem;
  --clean_start--i_ul--margin:       0 0 0 0;

  --clean_start--ul_li_i--padding:     0 0.44rem 0 0.44rem;
  --clean_start--i_ul_li_i--padding:   0 0 0 0;

  --clean_start--ul_li_i_c--font-size:    0.4rem;
  --clean_start--ul_li_i_c--line-height:  var(--clean_start--ul_li_i--line-height);

  --clean_start--ul_li_i_c--color: #33ab55;
}


/* ul inline slash */
.clean_start ul.inline.slash {
  --clean_start--ul_li_i_c--content: '|';

  --clean_start--ul_li_i_c--top:   0;
  --clean_start--ul_li_i_c--left: -0.5rem;

  --clean_start--ul--margin:      0.3rem 0 0.4rem 0.5rem;
  --clean_start--i_ul--margin:    0 0 0 0;

  --clean_start--ul_li_i--padding:     0 0.44rem 0 0.44rem;
  --clean_start--i_ul_li_i--padding:   0 0 0 0;

  --clean_start--ul_li_i_c--font-size:    var(--clean_start--ul_li_i--font-size);
  --clean_start--ul_li_i_c--line-height:  var(--clean_start--ul_li_i--line-height);

  --clean_start--ul_li_i_c--color:    #33ab55;
}


/* ul tag_border */
.clean_start ul.tag_border {
  --clean_start--ul_li_i_c--content: '';
  --clean_start--ul_li_i_o--tag_border--content: '';

  --clean_start--ul_li_i_o--tag_border--display: block;

  --clean_start--ul_li_i_o--tag_border--top:     0.63rem;
  --clean_start--ul_li_i_o--tag_border--left:   -0.7rem;

  --clean_start--ul--margin:        0.3rem 0 0.4rem 0.7rem;
  --clean_start--i_ul--margin:      0.3rem 0 0.4rem 3.0rem;

  --clean_start--ul_li_i--padding:      0 0 0 0.23rem;
  --clean_start--i_ul_li_i--padding:    0 0 0 0.2rem;


  --clean_start--ul_li_i_o--tag_border--font-size:    0;
  --clean_start--ul_li_i_o--tag_border--line-height:  0;

  --clean_start--ul_li_i_o--tag_border--border:   0px solid #eefef2;
  --clean_start--ul_li_i_o--tag_border--size:           0.4rem;
  --clean_start--ul_li_i_o--tag_border--border-radius:  0.2rem;
  --clean_start--ul_li_i_o--tag_border--background:   lime; /* #eafdf2; */
}


/* ul inline tag_border */
.clean_start ul.inline.tag_border {

  --clean_start--ul_li_i_c--content: '';
  --clean_start--ul_li_i_o--tag_border--content: '';

  --clean_start--ul_li_i_o--tag_border--display: block;

  --clean_start--ul_li_i_o--tag_border--top:   0.63rem;
  --clean_start--ul_li_i_o--tag_border--left: -0.7rem;

  --clean_start--ul--margin:      0.3rem 0 0.4rem 0.7rem;
  --clean_start--i_ul--margin:    0 0 0 0;

  --clean_start--ul_li_i--padding:        0 1.9rem 0 0.23rem;
  --clean_start--i_ul_li_i--padding:      0 0 0 0;


  --clean_start--ul_li_i_o--tag_border--font-size:     0;
  --clean_start--ul_li_i_o--tag_border--line-height:   0;

  --clean_start--ul_li_i_o--tag_border--border:         1px solid lime;
  --clean_start--ul_li_i_o--tag_border--size:           0.32rem;
  --clean_start--ul_li_i_o--tag_border--border-radius:  0.16rem;
  --clean_start--ul_li_i_o--tag_border--background:     #eafdf2;


  --clean_start--ul_li_i_c--top:           var(--clean_start--ul_li_i_o--tag_border--top);
  --clean_start--ul_li_i_c--left:          var(--clean_start--ul_li_i_o--tag_border--left);

  --clean_start--ul_li_i_c--font-size:     0;
  --clean_start--ul_li_i_c--line-height:   0;

  --clean_start--ul_li_i_c--color:         unset;
}

```



Have a nice day, Jaisocx Software Architect Elias


