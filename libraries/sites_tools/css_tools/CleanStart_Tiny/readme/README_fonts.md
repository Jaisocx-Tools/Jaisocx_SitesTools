
`Jaisocx sites tools`

# clean start tiny

## Css Clean Start font families 

  
  Renamings in future for the few sites tools, 
  are aimed for Software Companies' Namespaces, like Jaisocx,
  and, whether the alignment librarie's styles set,
  the class name for the CssCleanStart, clean_start.
  
  
  Due to the aim of the SetUp,
  the variables' namespace doesn't have the Companie's Name,
  in order to allow to other Companies, ease and free setup of this opensource library on other sites, modified.



## Fonts on every OS

  💡  On every OS install Microsoft fonts:  Times New Roman, Arial, Courier, Courier New.

  ```css
    .clean_start.theme_fonts_old_good_fonts,
    .clean_start .theme_fonts_old_good_fonts {
      --clean_start--sans--font-family:       "Arial";
      --clean_start--serif--font-family:      "Times New Roman";
      --clean_start--monospace--font-family:  "Courier";
      ...
    }
  ```


On other OS these fonts show not the same way, however font familie group remains the same:

. "Times New Roman" serif

. "Arial" sans-serif

. "Courier" monospace



### 3 themes, however font the same

3 themes, all same fonts for:

. Android: sans-serif, serif, monospace, cursive.

. Linux handwrite font: Z003.




### Four fonts themes

    💡  Texts look well, saving SIM mobile traffic.


  Multiplatform tested font styles, set by styles variables for 4 font familie groups:

  . sans

  . serif

  . handwrite

  . monospace

  ```css
                                           /* microsoft,   ios,         linux,               android  */
    --clean_start--monospace--font-family:   "Consolas",  "Rockwell",  "DejaVu Sans Mono",  "monospace";
  ```



### Jaisocx workaround, class .font_override

  text renders by the monospace font,
  set by fonts theme class="theme_fonts_c" for 4 font familie groups:

  . sans

  . serif

  . handwrite

  . monospace


  ```css
    /* fonts theme */
    .clean_start.theme_fonts_c,
    .clean_start  .theme_fonts_c {
      ...
      --clean_start--monospace--font-family: "Consolas", "Rockwell", "DejaVu Sans Mono", "monospace";
      ...
    }


    /* font override */    
    .clean_start  .font_override  .font_monospace,
    .clean_start  .font_override  .font_monospace * {
      font-family: var(--clean_start--monospace--font-family);
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

___



Friendly regards, Jaisocx Software Arcitect Elias


