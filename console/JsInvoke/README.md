
![./software_labels/software_tm_label_jaisocx.svg](./software_labels/software_tm_label_jaisocx.svg)   ![./software_labels/js_serverside_jaisocx_jsc_console_js_invoke.svg](./software_labels/js_serverside_jaisocx_jsc_console_js_invoke.svg)



# 💻 CONSOLE JS INVOKE
  > 💡 Write and store scripts to invoke in console, for debugging too.


  not published for yarn or npm for now, since no need to import in other javascript code.

---





##  Status
  >  Ok



##  Supports
  > Server Side

```
   Browser |   Express |   Console
     ❌ no |    ✅ yes |     ✅ yes
```




## 💾 Size
  > 60 KB - 5 KB

```
  Current Folder |   This lib, as installed    |   typescript in src/ |   Latest Tarball |   Main ts class
                 |     in other node_modules/  |                      |                  |
           55 KB |                             |                5 KB  |            10 KB |            5 KB
```

```
  Main ts class:   src/invokeCssImporter.ts                                 5.0 KB
  Latest Tarball:  jaisocx-jsc_console_js_invoke-1.0.1.tgz                  9.4 KB
  Current Folder:  workspace/ts/Jaisocx_SitesTools/console/JsInvoke        55.0 KB
```



##  Required
  > Node installed




## 📅 Latest update
  > Winter 2026

  **Library**: `@jaisocx/jsc_console_js_invoke` ver. `1.0.1` not published

🗓 **Updated at**: `Tue Jan 20 06:28:29 CET 2026`






## 💡 For what
  > Just the central place in this project, to store somewhere the console node scripts, calling other node libraries, locally linked or installed with yarn or npm.



  **For example, to solve a task**:

    You need to invoke in console somehow the node console library "@jaisocx/css-importer", for debug, too.


  You need first a custom `.js` script, that uses js classes from the imported node library `"@jaisocx/css-importer"`.

  The `.js` script is invoked then in console,
  and console commands can be stored as `.sh` scripts.

  In our Jaisocx Typescript Environment project, `.js` scripts are invoked in **console** very very easy, using **docker the right way** thanks to the console base bash script `cmd/base/js_invoke.sh`.

  Also, in `${TypescriptEnvironment}/cmd` folder, there we have `.sh` scripts, these can be used as examples or templates.

```bash
    ### You need custom script for package @jaisocx/css-importer
    ### Invokes in console like this:
  $_ ./cmd/cssImporter.sh --debug
```

  Try, You'll see later how convinient to run commands, prestored in `.sh` scripts with all command line args, no retyping in console, but saved in `.sh` script.






## Calls flow

  1. **bash** `cmd/cssImporter.sh`
  2. **bash** `cmd/base/js_invoke.sh`
  3. **node** `workspace/ts/Jaisocx_SitesTools/console/JsInvoke/transpiled/ESNext/invokeCssImporter.js`
  4. **node** `"@jaisocx/css-importer"`







## Why good

  The Jaisocx bash infrastructure allows the very ease way
  to accept command line shell args
  in node console scripts thanks to
  **base bash script** `${TypescriptEnvironment}/cmd/base/js_invoke.sh`
  and the **node library** `@jaisocx/command-line`.


  1. **Stored Centrally**: Easy to get know One **console/JsInvoke folder** for all `typescript` files ( `workspace/ts/Jaisocx_SitesTools/console/JsInvoke` ), to invoke in terminal.

  2. **Local node_modules as a sandbox just for console examples**: These scripts then can be debugged
  in the context of the local `node_modules`
  and `package.json` and `package-lock.json` in this folder `${TypescriptEnvironment}/workspace/ts/Jaisocx_SitesTools/console/JsInvoke`,
  for example to **link** other
  imported `js` libraries,
  **to navigate via symlink at debug time to source code** in this project,
  and not to the installed subfolder in the local `node_modules/@jaisocx/...`.

  3. **Nice command line args format**: The **Jaisocx bash infrastructure** supports for **command line args** the since longer **best coding practice format** like this: `--arg="whatever"`

  4. **Easy read in typescript**: the  **command line args** are available like this: ` commandArgs.arg `

  5. The cleaver **typescript variable Root** `commandArgs.Root`,
      pointing to the **folder** `./workspace/ts`, set in `.env` file for **docker** context.
```
  .env
      PROJECT_VOLUME="./workspace/ts"
      IN_DOCKER_PROJECT_VOLUME="/opt/jaisocx/sites_tools/workspace/ts"
          => docker-compose.yml
```

  6. **CLI arg --debug**: The easy to notice **command line arg** `--debug` for **node console .js debug**.





## How does it work

  ### 1. Writing a custom script to invoke in console.

  1. **write** in **console/JsInvoke** custom **typescript** code in a `.ts` file in folder `workspace/ts/Jaisocx_SitesTools/console/JsInvoke/src/` like in example: `invokeCssImporter.ts`

  2. **transpile** on demand with ProjectBuilder.
  > ( since 2025 node runs both, javascript and typescript, and in this project typescript via node didn't test yet. We still shall support legacy, very good for deploy and Your sites user experience multiplatform LTS )



### 2. Invoke in console

  3. **write bash script** calling this new custom `.ts` script ( transpiled to `.js` in folder `transpiled/ESNext/` ) **like in the example**: `./cmd/cssImporter.sh`
  4. **invoke** like this in **local terminal**.
        The good thing is, You are sure, this new custom `.js` is **called in docker the right way**, while, on demand, **easy** knew the arg to start **node debug**:
```bash

  $_ ./cmd/cssImporter.sh --debug
```



### 3. Debug
  > 2 options: easier in local OS, or finer under docker.





  ### 3.A) Debugs easier
  > Debug Not in docker, in local OS

  > package.json "scripts"."start": "node ... invokeCssImporter.js" in MS VSCode IDE choose option "start debug"



  **MS VSCode IDE** debugs node scripts out-of-the-box.

  Like a charm.

  The **VSCode** remains since longer the only IDE with debug for js and other programming languages, without have required payments for plugins in addition.

  The **VSCode** supports the most of known OS like `MS Windows`, `Linux` ( like Ubuntu, Linux under MS Windows WSL ), Apple Macintosh OS `MacOS`.

  **Do like this**: In `package.json`, in the json property "scripts", You may set a **bash script, invoking node cli**, like the example json code snippet below. In VSCode in opened for view `package.json`, mouse over json object property name `"scripts"."start"` shoes command option "debug". Debug works really like a charm, without no having had need of plugins install in addition.

  **Path in the Jaisocx Typescript Environment project**: `workspace/ts/Jaisocx_SitesTools/console/JsInvoke/package.json`

  **Runs | Debugs "invokeCssImporter.js" via node cli** in this `package.json` Line 17

```json
1:  {
      ...
      {
      ...
      ...
      },
16:   "scripts": {
17:     "start": "node ./transpiled/ESNext/invokeCssImporter.js"
18:   },
      ...
    }
```



  I didn't try to set a custom `.sh` script in the `package.json` "scripts"."start", neither know for now, how then to notice where our central `cmd` folder for bash `.sh` scripts in this project)).

  Just invokes on `node` cli in `package.json` "scripts" are well seen in repos for `js` libs, like `yarn` or `npm`. Notice, that repos for js libs are thought for `.js`, not for `.sh` command line scripts.





  ### 3.B) Debug finer, under Docker. MS VSCode, too.
  >  Alpine Image with fixed versions numbers of node, typescript and other software.



  #### Why under Docker well
  > Fixed numbers of versions of software packages and all confs relevant just to this project, not touching Host OS confs and software bundles installed.



  The **Jaisocx Typescript Environment** Project was started **under Docker**
  for architecturing later the finer control about:

  - **Known OS and Command Line Shell**, like for now `Alpine ver. 3.22.2`, knew that **with Bash**, not just sh, known Users Groups and Users' Names and IDs, also whether with sudier users' group.
  - **Known set of software packages**, installed for NodeJS and Typescript on Your Computer,
  - **Fixed versions numbers** for NodeJS, Node Package Managing Software, Typescript versions,
  - **Turning on|off** the https endpoints ran on Your Computer, **serving Your sites** in development.







## 📄 Bash Coding Example
  > 2 code lines ( bash | sh )

```bash

  # invokes the .js from example below 'ts coding example'
  node invokeJsInConsoleExample.js --Root="/home/user/MyProject" --sitesToolPath="sites_tools/SitesTool"
```



```bash

  $_ ./cmd/cssImporter.sh --debug
```




  **./cmd/cssImporter.sh**

  The example is thought for copy and save as other **bash** script in the same folder `./cmd`,
  hardcoding there other command line args, for calling another `.js` file.

  The reusable via copy/paste working `bash` example to invoke a custom bash script,
  however nearly same like in ProjectBuilder's `ts` code,
  on the imported to `node_modules/@jaisocx/css-importer`,
  available in typescript code,
  the typescript package `@jaisocx/css-importer`:
  `cmd/cssImporter.sh`



```bash

  ### TypescriptEnvironment
  ### ./cmd/cssImporter.sh

  ### https://github.com/Jaisocx-Tools/TypescriptEnvironment/
  ### https://github.com/Jaisocx-Tools/TypescriptEnvironment/blob/main/cmd/cssImporter.sh

  ### Line 55:

  "${jsInvokePath}" "$commandLineArgs" \
    --Root="${IN_DOCKER_PROJECT_VOLUME}" \
    --BuildData="${IN_DOCKER_PROJECT_VOLUME}/BuildData.json" \
    --packagePath="Jaisocx_SitesTools/console/JsInvoke" \
    --script="invokeCssImporter.js" \
        --sitesToolPath="Jaisocx_SitesTools/sites_tools/css_tools/CssCleanStart_2" \
        --cssFilePath="MediaAndStyles/CssCleanStart_2_main_Webpack.css" \
        --cssTargetFilePath="MediaAndStyles/CssCleanStart_2_543_resolved.css"

```



## Bash example explained
  Let's imagine, the task was to write and to invoke a custom `.js` file
  for test or debug purposes of `.js` package `@jaisocx/css-importer`.

  For console scripts, I started folder **JsInvoke** `workspace/ts/Jaisocx_SitesTools/console/JsInvoke`,
  where the first example for `@jaisocx/css-importer` resides:
  `src/invokeCssImporter.ts`.

  The script `invokeCssImporter.ts` implements free logic for tasks using `@jaisocx/css-importer` package,
  and for tests or debug purposes, the transpiled `.js` file can be invoked the very ease way like in the example bash script: `cmd/cssImporter.sh`






## Base scripts and libraries

### 1. Command line shell

  There is the base script in command line shell scripting language `bash`
  to invoke a `.js` file the nice way.

  **js_invoke** `cmd/base/js_invoke.sh`



### 2. Typescript

  In order to invoke in terminal a .js file,
  there are 2 base Typescript packages:

  1. **CommandLine** `workspace/ts/Jaisocx_SitesTools/packages/CommandLine`
  2. **JsInvoke** `workspace/ts/Jaisocx_SitesTools/console/JsInvoke`







## 📂 Package Structure
  > 60 KB ( sixty kilobyte ) library folder's filesize

```fs
  📂 node_modules/
      📂 @jaisocx/
          📂 command-line/ ( linked )
          📂 css-importer/ ( linked )
  📂 software_labels/
      js_serverside_jaisocx_jsc_console_js_invoke.svg
      software_tm_label_jaisocx.svg
  📂 src/
      AnyClass.ts
      index.ts
      invokeCssImporter.ts
  📂 test/
      AnyClass.test.ts
  📂 transpiled/
    📂 CommonJS/
        invokeCssImporter.js
        ...
        ...
    📂 ESNext/
        invokeCssImporter.js
        ...
        ...
  package.json
📄 README.md
```







---

*I shall rewrite these texts, for now just typed very fast.*

1. for every console node lib, a new script in this package to invoke by js_invoke.sh bash script, invoked by a new bash .sh script in folder {PROJECT}/cmd/
2. to ensure in the ProjectBuilder node_modules if same package installed as a dependnecy, that not linked, but installed from npmjs repo.
3. bash script same name as console node lib. cssImporter.sh
4. ./cmd/cssImporter.sh is the latest and works
5. debug works in free install of Microsoft VSCode with settings in this project ./.vscode/launch.json ( worked fine, I have to review, yesterday didn't work, somehow there was the try to register on same port for debug both sides, debugging client and server )
6. debug works like this: ./cmd/cssImporter.sh --debug
7. why cssImporter.sh so many hardcoded copy pasted bash lines: the script can be invoked in terminal from path . or ./cmd, then the paths of subcalls don't do, and for fallback paths calcullations the bash code blocks are these hardcoded copy pasted bash code blocks of several tens of lines.
8. to debug installed dependencies and bugfix them live, in the workspace/ts/Jaisocx_SitesTools/console/JsInvoke drop installed dependencies, set for this dep in package.json newer ver. number not publkished yet, drop in that package node_modules and package-lock.json, run in that package npm i and run npm link, then in the workspace/ts/Jaisocx_SitesTools/console/JsInvoke run link "@jaisocx/package-to-debug". for what: when debugging, and entering the installed dependency, the dependency was linked with a symlink, and then the debugger enters the package's .js files in the folder where .ts is being also edited.
9. `src/AnyClass.ts` and `test/AnyClass.test.ts` for now remain there however remained from typescript template for later.
10. in the `src/index.ts` I guess may NOT import .js files like `invokeCssImporter.js`, since there is at once the call of the function declared. `node` command line tool invokes a `.js` file, and not a func or method's class in a `.js` file. that is why the runnable `.js` file rather not to import in `src/index.ts` at once.
11. since the latest `ts` engine allows running and debug of .ts without having transpiled before, I'd spend lot of time for engineering research until the debugging sample works. for now I just bugfix already worked earlier perfectly workaround with `./cmd/base/js_invoke.sh` since pair of months in MS VSCode.
12. in this single package for calling node libs in console, the best way to store every node console script, calling other node libs. This way we avoid heavy thoughts whether what package.json version installed on npm, built with ProjectBuilder, where what dependency is linked or installed from npmjs repos. the best way to keep here in node_modules every dependency always linked, or to adjust this way of work with debug before bugfixing some node console lib.
13. this package is being built by ProjectBuilder and entry in BuildData.json for `"path": "console/JsInvoke"` or `"name": "console-js-invoke"`, no need for simple build, since simple scripts don't import typescript and node libraries, and are thought for browsers .js, not console node, are for the transparency of .js files load without newer type=module with imports, and for support of our libs in legacy browsers.
14. scripts for tasks to implement: debug ProjectBuilder, debug a package from ProjectBuilder dependencies, debug console node lib, NOT here debug Express node lib, here just console for transparency something one.
15. npm tasks: package.json and files for npm i later, how what with index.ts and all other. I guess this package remains just on GitHub as a template, and here NO reusable when installed to node_modules. for editing and forks the GitHub was the right choice. npm repos are for the fast profit thank to reusability instruments.







