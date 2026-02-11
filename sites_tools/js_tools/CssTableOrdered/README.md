# CSS Table Ordered

#### status
  > ✅  yarn add | npm install Ok

  > ⛔ `.html` previews are shown, but js isn't bugfixed. orderby doesn't do for now.



#### supports
  > Client Side

```
   Browser |   Express |   Console |
    ✅ yes |      ❌ no |     ❌ no |
```

---



## 💡 The aim of the setup

For the Jaisocx Sits Server Files Listing server side rendered CssTable with JSP.

The jaisocx templates for files listing, https exceptions and others will be available on public git service in several months.



### Tasks planned

1. css themes npm package example to install on a Jaisocx server instance with @jaisocx/css-table-ordered



## html example

```html
  <link rel="stylesheet" href="/sites_tools/css_tools/CssCleanStart_2/MediaAndStyles/CssCleanStart_2_main_resolved_minimal.css" />
  <link rel="stylesheet" href="/sites_tools/css_tools/CssTable/MediaAndStyles/CssTable_main_resolved_minimal.css" />



  <link rel="stylesheet" href="/sites_tools/js_tools/CssTableOrdered/MediaAndStyles/themes/theme_fixed_columns_labels/theme_fixed_columns_labels.css" />



  <script src="sites_tools/js_tools/CssTableOrdered/transpiled/Simple/scroll/CssTableScroll.js"></script>
  <script src="sites_tools/js_tools/CssTableOrdered/transpiled/Simple/orderby/CssTableOrderby.js"></script>



  <script>

    let orderbyInstance = new Object();

    function addScrollEventHandlers() {
      cssTableScrollInstance = new CssTableScroll();
      cssTableScrollInstance.addScrollEventHandlers();
    }

    function addOrderbyEventHandler() {
      orderbyInstance = new CssTableOrderby();
        orderbyInstance.setRowsNumberNotOrdered( 1 );
      let eventHandlerRetval = orderbyInstance.addOrderbyEventHandler();
    }



    // DOCUMENT ONLOAD
    document.addEventListener('DOMContentLoaded', () => {

      addScrollEventHandlers();

      addOrderbyEventHandler();

    });

  </script>
```



## npm for webpack

`--omit=dev` to avoid installation of devDependencies.

In the `package.json`, the mini images package requires **Sass styles preprocessor** for development purposes with **scss variables** for css3 style property `background-image`,
and in this package the Sass installation wasn't required.

```
npm install @jaisocx/css-table-ordered --omit=dev
```



