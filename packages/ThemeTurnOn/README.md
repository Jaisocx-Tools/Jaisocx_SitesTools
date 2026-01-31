
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




# @jaisocx/theme-turn-on

## What the script does

  1. on click on a theme button, the css class name is set to document root html elem `<html class="jsx lightmode">`


## How this works

  1. loaded styles for a theme css classname

```html
  
  <!DOCTYPE html>
  <html lang="en" class="jsx">
  <head>
  
    <title>ThemeTurnOn</title>
  
    <base href="./">
  
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  
    <!-- THEME -->
    <link rel="stylesheet" href="theme_styles.css" />

```



2. a theme button, or several, have attribute `data-theme`

```html

  <ThemeButtons>
    <button id="button-turn-on-base-theme" data-theme="">Base Theme</button>
    <button id="button-turn-on-daymode"    data-theme="lightmode">Day Mode</button>
  </ThemeButtons>

```



3. @jaisocx/theme-turn-on scripts loaded on site, or were imported to the loaded webpack bundle.js

```html

  <html class="jsx">
  
  ...
  ...
  ...
  
  
  
    <script src="transpiled/Simple/constants/ThemeTurnOnConstants.js"></script>
    <script src="transpiled/Simple/theme_turn_on/ThemeTurnOn.js"></script>
  
    <script>
  
      let cssClassesNames = [
        "jsx"
      ];
  
      let buttonsQuerySelectors = [
        "themebuttons button"
      ];
  
      document.addEventListener( 'DOMContentLoaded', () => {
  
        // adding to buttons the event handler to turn on the theme.
        let themeTurnOn = new ThemeTurnOn();
        themeTurnOn
          .setKeptCssClassnames( cssClassesNames )
          .addThemeButtonsEventHandlers( buttonsQuerySelectors );
  
      });
  
    </script>
  </html>

```


---



Have a nice day.

Elias, Software Architect of Jaisocx Company



