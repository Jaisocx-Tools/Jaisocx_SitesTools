
# JPath
  > 💡 The JPath class gets or sets values of an object or array, without eval js func invoked.

  | 🗂 **️Library**  | `@jaisocx/jpath` | 🏷 **️ver.**: `2.0.5` | 

  | 🗓 **Updated**  | 🌷 Spring 2026 | `07. Mai AD 2026 07:23:20 UTC` | 

  | 📐 **Size**     | 🗂 Folder: 105 KB | 📦 Tarball: 10 KB | 📄 .js: 14 KB | 

  | ⚡ **JS Engine** | 🌐 Browser: ✅ yes | 🧭 Express: ✅ yes | 🖥️ Console: ✅ yes | 

---



## The aim of the setup
  > 💡 The JPath class gets or sets values of an object or array.

## Examples

  **JPath Expression**

  ```javascript
    let jpathExpression_js: string                   = "data.records[0].id";
    let jpathExpression_points_joined: string        = "data.records.0.id";
    let jpathExpression_jsonkey_ext_symbols: string  = "[data][records][0][field 2]";
  ```



  **In HTML**

  ```html
    <!-- 💡 In `.html` for the 'js framework like' Reactivity by central json data in a SPA. -->
    <html>
      ...
      <div data-jpath="data.records.0.id"></div>
      ...

      <script src="node_modules/@jaisocx/jpath/transpiled/Simple/JPathData.js"></script>
      <script src="node_modules/@jaisocx/jpath/transpiled/Simple/JPath.js"></script>
      <script>
        // DOMContentLoaded ...
      </script>
    </html>
  ```



  **Typescript**

  ```typescript
    let obj: any = {
      "data": {
        "records": [
          { "id": 1, "field 2": "text line of field 2" }
        ]
      }
    };
  
    let jPath: JPath = new JPath();
    let jpathExpression: string = "data.records[0][field 2]";
    let field2: any = jPath.getByJPathExpression( obj, jpathExpression );
    console.log ( field2 ); 
    // $ _ text line of field 2
  ```



## Structure

```ls
📚 JPath
    🗂 src/
      📄 index.ts
      📄 JPath.ts
      📄 JPathData.ts
      📄 JPathDataInterface.ts
      📄 JPathInterface.ts
    📊 test/
      📄 JPath_Test.js
      📄 Split_Test.js
    🗂 transpiled/
      🗂 CommonJS/
      🗂 ESNext/
      🗂 Simple/
        📄 JPath.js
        📄 JPathData.js
    📦 jaisocx-jpath-2.0.4.tgz
    📄 package.json
    📄 package-lock.json
    📒 README.md
```



## Interfaces

  **JPathInterface**
    
  ```typescript
    // $ _ ${package}/src/JPathInterface.ts
    
    // @class JPath. 💡 To lookup in js objects and arrays, without eval js func invoked.
    export interface JPathInterface {
    
      // jpath string exression as "subtree[1].opened" => [ "subtree", 1, "opened" ]
      parse ( jpathExpression: string ): (string|number)[];
        
      // @invokedBy method parse(), splits with symbol point, adds to jpathArray, numeric array elem id or textual field name.
      parseDotted ( jpathExpressionDotted: string, jpathArray: ( string|number )[] ): number;
    
      serialize ( jpath: (string|number)[], delimiter: string, start: string, finish: string ): string;
    
      getByJPathExpression ( obj: any, jpathExpression: string ): any;
        
      // faster than JPath.getByJPathExpression( jpathExpression: string, value: any );
      getByJPath ( obj: any, jpath: (string|number)[] ): any;
    
      setByJPathExpression ( obj: any, jpathExpression: string, value: any ): JPathInterface;
      setByJPath ( obj: any, jpath: (string|number)[], value: any ): JPathInterface;
    
      setByJPathWalkFlatRebuild ( obj: any, jpath: (string|number)[], value: any, nameHolderId: string, nameId: string, branchName: string ): JPathInterface;
    }
  ```



  **JPathDataInterface**

  ```typescript
    // $ _ ${package}/src/JPathDataInterface.ts
    
    // @class JPathData. 💡 The data record for 2 fields: jpathExpression and jpathArray.
    export interface JPathDataInterface {    
      getJPathExpression(): string;
      getJPath(): ( string | number )[];
    
      setJPathExpression( jpathExpression: string ): JPathDataInterface;
      setJPath( jpath: ( string | number )[] ): JPathDataInterface;    
    }
  ```

---



Have a nice day,

Jaisocx Software Architect Elias


