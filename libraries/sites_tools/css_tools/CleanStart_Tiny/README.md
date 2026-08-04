
# clean_start_tiny

  > 💡 Aligning styles of a site, the single file `clean_start_tiny__all_features.css` of 740 ( seven hundred fourty ) css code lines.


  | 🗂  **Library**  | `@jaisocx/clean_start_tiny` | 🏷  **ver.**: `1.0.1` |

  | 🗓  **Updated**  | 🌼 Summer 2026 | `02. August AD 2026 12:10 UTC` |

  | 📐  **Size**     | 🗂 Folder: 300 kb | 📦 Tarball: . KB | 📄 .css: 18.28 kb | 📄 .html: 10.34 kb, 46.33 kb | 

  | ⚡  **JS Engine** | 🌐 Browser: ✅ yes | 🧭 Express: ✅ yes | 🖥️ Console: ❌ no | 

---



## The aim of the setup

  > 💡 Aligning styles of a site, the single file `clean_start_tiny__all_features.css` of 740 ( seven hundred fourty ) css code lines.

  The tiny css clean start has all styles set hardcoded, 
    and, thanks to this, the css variables code block just has 230 code lines.

  The `clean_start_tiny__base.css` file of smaller size doesn't resolve all features.


## Links

### clean_start_tiny examples

**table** 
[https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/clean_start_tiny__table.html](https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/clean_start_tiny__table.html)


**ul li** 
[https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/clean_start_tiny__ul_li.html](https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/clean_start_tiny__ul_li.html)


**all features css 18.28kb**
[https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/template_clean_start_linked__all_features.html](https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/template_clean_start_linked__all_features.html)


**all features in one html file 46.33kb**
[https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/template_clean_start_one__all_features.html](https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/template_clean_start_one__all_features.html)



**readme**
[https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/readme__clean_start_tiny.html](https://jaisocx-tools.github.io/jaisocx_sites_tools/libraries/sites_tools/css_tools/CleanStart_Tiny/readme__clean_start_tiny.html)



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



##  Tasks solved


### Four fonts themes

    💡  Texts look well, saving SIM mobile traffic.


  Multiplatform tested font styles, set by styles variables for 4 font familie groups:

  . sans

  . serif

  . handwrite

  . monospace

  ```css
                                           /* microsoft,  ios,         linux,               android  */
    --clean_start--monospace--font-family:   "Consolas",  "Rockwell",  "DejaVu Sans Mono",  "monospace";
  ```



#### Jaisocx workaround, class .font_override

  text renders by the monospace font,
  set by fonts theme class="theme_fonts_c" for 4 font familie groups:
  
  . sans

  . serif

  . handwrite

  . monospace


  
  ```css
    .clean_start.theme_fonts_c,
    .clean_start  .theme_fonts_c {
      ...
      --clean_start--monospace--font-family: "Consolas", "Rockwell", "DejaVu Sans Mono", "monospace";
      ...
    }
  ```


  ```html
    <html class="clean_start theme_fonts_c">
      ...
      <layout-block class="font_override">
        <text-line class="font_monospace"> text rendered with the monospace font </text-line>
     
        <text-line class="font_handwrite">
          friendly regards, Illia
        </text-line>
      </layout-block>
     ...
    </html>
  ```



##  Structure

```ls
📚 CleanStart_Tiny/                                    145_147 b  l_d0_d
_________________________________________________________________
    🗂 favicon/                                          4_286 b  l_d1_f
      📄 Icon_Jaisocx.ico                                4_286 b
    _____________________________________________________________
    🗂 MediaAndStyles/                                  44_610 b  l_d1_d
        🗂 clean_start_tiny__html_tags/                  6_876 b  l_d2_f
          📄 clean_start_tiny__all_tags.css                844 b
          📄 clean_start_tiny__anchor.css                  361 b
          📄 clean_start_tiny__h.css                       787 b
          📄 clean_start_tiny__p.css                       504 b
          📄 clean_start_tiny__pre.css                     281 b
          📄 clean_start_tiny__site.css                  1_566 b
          -------------------------------------------------------
          📚 SUM filesizes                               4_343 b  sum_l_d2_f
          _______________________________________________________
          📒 README.md                                   2_533 b
        _________________________________________________________
        🗂 clean_start_tiny__responsive/                 3_120 b  l_d2_f
          📄 clean_start_tiny__mobile_friendly.css       3_120 b
        _________________________________________________________
        🗂 clean_start_tiny__styles/                     1_982 b  l_d2_f
          📄 clean_start_tiny__display.css               1_175 b
          📄 clean_start_tiny__scrollbar.css               807 b
          -------------------------------------------------------
          📚 SUM filesizes                               1_982 b  sum_l_d2_f
          _______________________________________________________
        🗂 themes/                                      14_210 b  l_d2_d
          🗂 theme_base/                                 9_723 b  l_d3_f
            📄 clean_start_tiny__theme_base.css          9_723 b
          _______________________________________________________
          🗂 themes_fonts/                               5_246 b  l_d3_f
            📄 clean_start__font_override.css            1_650 b
            📄 theme_fonts_a.css                           592 b
            📄 theme_fonts_b.css                           619 b
            📄 theme_fonts_c.css                           572 b
            📄 theme_fonts_old_good_fonts.css              957 b
          -------------------------------------------------------
            📚 SUM filesizes                             5_246 b  sum_l_d3_f
          _______________________________________________________
        ---------------------------------------------------------
          📚 SUM filesizes                              14_210 b  sum_l_d2_d
        _________________________________________________________
        _________________________________________________________
        🗂 tiny_sites_tools/                            12_425 b  l_d2_d
          _______________________________________________________
          🗂 tiny_sites_label/                           3_300 b  l_d3_f
            📄 clean_start_tiny__label.css               3_300 b
          _______________________________________________________
          🗂 tiny_sites_scrolls/                           486 b  l_d3_f
            📄 tiny_sites_tools__scrolls.css               486 b
          _______________________________________________________
          🗂 tiny_sites_table/                           1_856 b  l_d3_f
            📄 clean_start_tiny__table.css               1_856 b
          _______________________________________________________
          🗂 tiny_sites_ul_li/                           6_783 b  l_d3_f
            📄 clean_start_tiny__ul_li.css               1_838 b
            📄 theme__tiny_sites_tools__ul_li.css        3_645 b 
            📄 tiny_sites_tools__ul_li.css               1_300 b
          -------------------------------------------------------
            📚 SUM filesizes                             6_783 b  sum_l_d3_f
          _______________________________________________________
        ---------------------------------------------------------
          📚 SUM filesizes                              12_425 b  sum_l_d2_d
        _________________________________________________________
      -----------------------------------------------------------
        📚 SUM filesizes                                44_610 b  sum_l_d1_d
      ___________________________________________________________
        
        📚 clean_start_tiny__all_features.css           22_160 b
        📚 clean_start_tiny__base.css                   22_300 b
    📒 README.md                                        14_600 b
    📦 clean_start_tiny.tar.gz                           7_920 b
    📄 template_clean_start_linked__all_features.html   18_104 b
    📚 template_clean_start_one__all_features.html      55_627 b

```



## Theme Base

```css

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
      --clean_start--p--font-size:            var(--clean_start--all_tags--font-size);
      --clean_start--p--line-height:          var(--clean_start--all_tags--line-height);

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
      --clean_start--ul_li_i_o--tag_border--top:            0.44rem;
      --clean_start--ul_li_i_o--tag_border--left:           0;
      --clean_start--ul_li_i_o--tag_border--font-size:      0;
      --clean_start--ul_li_i_o--tag_border--size:           0.32rem;
      --clean_start--ul_li_i_o--tag_border--border-radius:  0;
      --clean_start--ul_li_i_o--tag_border--border:         1px solid yellow;
      --clean_start--ul_li_i_o--tag_border--background:     #fdfda0;


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

      --clean_start--label--overflow-x:        hidden;
      --clean_start--label--overflow-y:        hidden;


      /* pre */
      --clean_start--pre--font-family:    var(--clean_start--monospace--font-family);
      --clean_start--pre--font-size:      0.9rem;
      --clean_start--pre--line-height:    1.2rem;


      /* site */
      --clean_start--site--padding:              1.4rem 1.9rem 12rem 1.9rem;
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

      --clean_start--ul_li_i_o--tag_border--top:     0.44rem;
      --clean_start--ul_li_i_o--tag_border--left:   -0.7rem;

      --clean_start--ul--margin:        0.3rem 0 0.4rem 0.7rem;
      --clean_start--i_ul--margin:      0.3rem 0 0.4rem 3.0rem;

      --clean_start--ul_li_i--padding:      0 0 0 0.23rem;
      --clean_start--i_ul_li_i--padding:    0 0 0 0.2rem;


      --clean_start--ul_li_i_o--tag_border--font-size:    0;
      --clean_start--ul_li_i_o--tag_border--line-height:  0;

      --clean_start--ul_li_i_o--tag_border--border:   0px solid green;
      --clean_start--ul_li_i_o--tag_border--size:           0.4rem;
      --clean_start--ul_li_i_o--tag_border--border-radius:  0;
      --clean_start--ul_li_i_o--tag_border--background:   green; /* #eafdf2; */
    }


    /* ul inline tag_border */
    .clean_start ul.inline.tag_border {

      --clean_start--ul_li_i_c--content: '';
      --clean_start--ul_li_i_o--tag_border--content: '';

      --clean_start--ul_li_i_o--tag_border--display: block;

      --clean_start--ul_li_i_o--tag_border--top:   0.385rem;
      --clean_start--ul_li_i_o--tag_border--left: -0.7rem;

      --clean_start--ul--margin:      0.3rem 0 0.4rem 0.7rem;
      --clean_start--i_ul--margin:    0 0 0 0;

      --clean_start--ul_li_i--padding:        0 1.9rem 0 0.23rem;
      --clean_start--i_ul_li_i--padding:      0 0 0 0;


      --clean_start--ul_li_i_o--tag_border--font-size:     0;
      --clean_start--ul_li_i_o--tag_border--line-height:   0;

      --clean_start--ul_li_i_o--tag_border--border:         1px solid green;
      --clean_start--ul_li_i_o--tag_border--size:           0.4rem;
      --clean_start--ul_li_i_o--tag_border--border-radius:  0.2rem;
      --clean_start--ul_li_i_o--tag_border--background:     #eafdf2;


      --clean_start--ul_li_i_c--top:           var(--clean_start--ul_li_i_o--tag_border--top);
      --clean_start--ul_li_i_c--left:          var(--clean_start--ul_li_i_o--tag_border--left);

      --clean_start--ul_li_i_c--font-size:     0;
      --clean_start--ul_li_i_c--line-height:   0;

      --clean_start--ul_li_i_c--color:         unset;
    }


    .clean_start li i label,
    .clean_start p label,
    .clean_start layout-block p label,
    .clean_start text-block p label,
    .clean_start layout-block text-block label,
    .clean_start layout-block text-line label {
      --clean_start--label--display:            inline-block;

      --clean_start--label--font-size:          0.72rem;
      --clean_start--label--line-height:        var(--clean_start--label--font-size);

      --clean_start--label--padding:            0.14rem 0.45rem 0.14rem 0.45rem;

      /* margin: left and right allowed. in styles hardcoded margin-bottom: -2px; */
      --clean_start--label--margin:             0 0.24rem -2px 0;

      --clean_start--label--color:              green;
      --clean_start--label--background-color:   #eefef2;

      --clean_start--label--border:             1px solid lime;
      --clean_start--label--border-radius:      0.5rem;

      --clean_start--label--overflow-x:   hidden;
      --clean_start--label--overflow-y:   hidden;
    }

```



Have a nice day, Jaisocx Software Architect Elias


