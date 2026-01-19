

![./software_labels/software_tm_label_jaisocx.svg](./software_labels/software_tm_label_jaisocx.svg)

![./software_labels/js_serverside_jaisocx_command_line.svg](./software_labels/js_serverside_jaisocx_command_line.svg)



# @jaisocx/command-line

## 💡 What is this
  > Fine-tuning for Console



```bash
  node example.js  --arg1="value1"  --argBC="Another Value 2"  --debug
```

```json
  { "arg1": "value1",   "argBC": "Another Value 2",   "debug": true }
```

  
  The very base library,
  installable via `yarn` or `npm`,
  written in `typescript` programming language.
  
  Just a **fine-tuning** little js library **for console** javascript.

  Supports **bash key-value args**,
  and provides in ts or js code **as a js variable** of js datatype **Object**.
  
  The only `js` class `CommandLineArgs` with the `interface`,
  was thought **for reading command line args**,
  sent from console, **in another javascript function**.
  
  **Other** `.js` or `.ts` files are **for the infrastructure** of this package,
  like for example,
  the current `README.md` is for the documentation
  about this library.

---



##  Status
  >  Ok



##  Supports
  > Server Side

```
   Browser |   Express |   Console
        no |       yes |       yes
```



## 💾 Size
  > 60 KB - 30 KB - 5 KB 

```
  Current Folder |   node_modules/ |   typescript in src/ |   Latest Tarball |   Main js class    
           51 KB |          25 KB  |                4 KB  |             7 KB |            2 KB 
```

```
  Main js class:   src/CommandLineArgs.ts                                   2.1 KB
  Latest Tarball:  jaisocx-command-line-1.2.4.tgz                           7.0 KB
  Current Folder:  workspace/ts/Jaisocx_SitesTools/packages/CommandLine    51.0 KB
```



##  Required
  > Node installed




## 📅 Latest update
  > Winter 2026

  **Library**: `@jaisocx/command-line` ver. `1.2.4`

🗓 **Updated at**: `Mon Jan 19 03:29:44 UTC 2026`





## 📂 Package Structure
  > 60 KB ( sixty kilobyte ) library folder's filesize

```fs
  📂 software_labels/
      software_tm_label_jaisocx.svg
  📂 src/
      index.ts
      CommandLineArgsInterface.ts
      CommandLineArgs.ts
    📂 example/
        CommandArgsObjectExample.ts
        invokeJsClassExample.ts
  📂 transpiled/
    📂 CommonJS/
        CommandLineArgs.js
        ...
        ...
      📂 example/
          invokeJsClassExample.js
          ...
    📂 ESNext/
        CommandLineArgs.js
        ...
        ...
      📂 example/
          invokeJsClassExample.js
          ...
  package.json
📄 README.md
```





## 📄 Bash Coding Example
  > 2 code lines ( bash | sh )

```bash

  # invokes the .js from example below 'ts coding example'
  node invokeJsInConsoleExample.js --Root="/home/user/MyProject" --sitesToolPath="sites_tools/SitesTool"
```




## 📄 Interfaces

  `src/CommandLineArgsInterface.ts`

```typescript
  interface CommandLineArgsInterface {
    
    getCommandLineArgs(): object;
    
    getAfterReadNTransformed(): object;
    
    readCommandLineArgs(): CommandLineArgsInterface;
    
    transformCommandLineArgs(): CommandLineArgsInterface;

  }
```





## 📄 Typescript Coding Example
  > 10 - 30 code lines ( ts | js )



```typescript
  console.log( (new CommandLineArgs()).getAfterReadNTransformed() );
```



```typescript
  // Script Name: invokeJsInConsoleExample.js
  // invoked in bash terminal like this:
  // $_ node invokeJsInConsoleExample.js --Root="/home/user/MyProject" --sitesToolPath="sites_tools/SitesTool"
  
  import * as path from "node:path";
  import { CommandLineArgs } from "@jaisocx/command-line";
  
  

  type CommandArgsObject = {
    Root: "",
    sitesToolPath: ""
  };
  
  function invokeJsInConsoleExample(): number {
  
    // NEW INSTANCE OF THE MAIN CLASS IN THIS LIBRARY ( CommandLineArgs )
    
    let commandLineArgsInstance: CommandLineArgs = new CommandLineArgs();
  
  
    
    // FIRST GET ALL CLI ARGS INTO ONE js VARIABLE ( commandArgs )

    let commandArgs: CommandArgsObject = commandLineArgsInstance
      .readCommandLineArgs()
      .transformCommandLineArgs()
      .getCommandLineArgs() as CommandArgsObject;
  
  
  
    // PRINT COMMAND LINE ARGS TO CONSOLE: console.log( commandArgs );
    //
    // SEES IN CONSOLE LIKE THIS:
    //    {
    //      Root: '/home/user/MyProject',
    //      sitesToolPath: 'sites_tools/SitesTool'
    //    }
    
    console.log( commandArgs );



    // GET CLI ARGS IN .js CODE JUST LIKE PROP OF A js OBJECT, 
    //   the prop name after dot:        commandArgs.Root 
    //   or in square braces and quotes: commandArgs["Root"]
    
    let resolvedSitesToolPath: any = path.resolve (
      commandArgs.Root,
      commandArgs["sitesToolPath"]
    );



    // OTHER CODE ...
    let retVal: number = 2;

    /**
      Programm code ... 
    */
    
    return retVal;
  }

  
  
  // A ts OR js CODE LINE,
  //   NOT IN A CLASS OR FUNCTION DEFINITION,
  //   INVOKES AT ONCE WHEN A .js IS INVOKED IN CONSOLE VIA node

  // $_ node invokeJsInConsoleExample.js   --Root="/home/user/MyProject"   --sitesToolPath="sites_tools/SitesTool"

  
  
  // Invokes function, 
  //   defined here on Line 14:    function invokeJsInConsoleExample()

  let retVal: number = invokeJsInConsoleExample();
  
  
  
  // END OF .ts EXAMPLE
```

---




Have a nice day.

Elias, Software Architect of Jaisocx Company








