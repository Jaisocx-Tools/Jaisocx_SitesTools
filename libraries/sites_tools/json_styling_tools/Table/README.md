# Table
  > 💡 this library aimed to improve quality of jstable by newer template renderer with tree walker for recursive tasks.

  > ❌ Under construction. Last updated in Summer 2025

  | 📖️  **Library**  | `@jaisocx/table` | 🏷️  **ver.**: `1.0.1` |
  
  | 🗓  **Updated**  | Winter 2026 | `Tue Jan 20 06:28:29 CET 2026` |
  
  | 📐  **Size**     | 🗂 Folder: 3.4 MB | 📦 Tarball: _ KB | 📋 .js: 10 KB | styles: 2.3 MB | 
  
  | ⚡  **JS Engine** | 🌐 Browser: ✅ yes | 🧭 Express: ❌ no | 🖥️ Console: ❌ no |

---



## Aim Of The Setup
  > 💡 table



#### why not solved still

  1. base packages bugs encountered:

     1.1. conf for node debug in IDE wasn't documented. am on writing and reviewing documentation for the project and every package.

     1.2. css-importer needs bugfixes, after QA tests shown, works not always. needs node debug conf.



  > This improved json rendering tool has 3 or 4 iterations levels, and thought of reading json fields for labels, and easiness of code review and bugfixes later.

  2. base packages for improved quality by newer template renderer with tree walker for recursive tasks are still in plan.

     2.1. still, tree walker methods and thoughts on base 3 or 4 cases for transformation of data objects isn't the very first priority.

     2.2. template renderer with iterations option, like [foreach], and transparent html code block view like always, just with framework placeholders `{{ json_field_value }}`, needs more time. The normal way, jsp or php code blocks with html code blocks aren't easy to work with, for frontend sites developers or sites designers. The plan is, the variable of datatype string, with html code block, able to style with css, let's say in a standalone html page. Since the newer styles support for responsive design, the bugfixing of sites markup or styles, gets easier with the very transparent markup, on that might work several sites engineers in the same time. 

     2.3. the nice thing is, we've done the html and styles for the markup, being the template [2.2], but the columns and records were hardcoded copy-pasted for the 3 or 4 weeks of work on styles for layout.



#### supports
  > Client Side

```
   Browser |   Express |   Console |
    ✅ yes |      ❌ no |     ❌ no |
```

---



## about
this sample web project is a sample of css styling of a database table records data in json format.

the html markup is produced by JSTable javascript class, used here in this project with javascript source code and no 3rd party dependencies.


### sorting columns feature
in this example, the click on column header sorts the table by column values.

in a real application, in the most cases, the table data is loaded by pages.

this sorting example is only arranging the subset of records
of the one loaded page.

if Your table will use paginated loaded from server rows,
then instead of this sorting there must be just normal reload of rows from RestAPI URL with sorting parameters specified, if available.

```
table
  .setDataUrl('...?order-by=updated_at')
  .load();
```



## future improvements
I apologize, here is still no pagination bar. this will appear here later, hope so)).

## how to use

### how to set json data for the table
in the file www/index.html, on line 60,
there is the url to json file, containing table rows data in json format.
"/jstools/www/data/table.json"

You can set Your own url of any published in web json data of some table records.

### how to set columns in the table
in the file www/data/table-metadata.json there is the JSON file, having settings for table columns,

feel free to adjust number of columns and columns properties.

```
index.html, line 18:
      const tableHeader = {
        "id": {
          "title": "id",
          "type": "number",
          "width": "50px",
          "align": "right"
        },
        "image_src": {
          "title": "Image",
          "type": "image",
          ...
          ...
          ...

```

for more informations, how to specify columns widths, feel free to read css3 documentation
about "grid layout".


### styling
in file www/css/table.css from the top, there are css variables specified,
those enable fast applying some basic look and feel customization.


### urls, images sources, paths
in this project, the urls are relative, without domain name,
however here was supposed, that the www folder is published as /table/www/ folder for the domain.

so, the {github project root}/www/index.html file is published like http://{domain}/table/www/index.html

please, adjust urls in index.html and .css files to be accessible when You publish at Your domain.

