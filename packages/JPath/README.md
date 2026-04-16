
# JPath
  `@jaisocx/jpath`
  > 💡The JPath class gets or sets values of an object or array.



#### status
  >  ✅ Ok



####  supports
  > Both Server Side and Client Side

  ```
   Browser |   Express |   Console
    ✅ yes |    ✅ yes |     ✅ yes
  ```




#### 📅 Updated
  > Spring 2026

  **Library**: `@jaisocx/jpath` ver. `2.0.1`

  🗓 **timestamp**: `16 Apr. 2026 10:06:18 CEST`

---



#### size
  > 90 KB 

```
  Current Folder |   This lib installed        |   typescript in src/  
                 |     in other node_modules/  |                       
           90 KB |                             |                5 KB   
```

---





## 💡 The aim of the setup
  > The JPath class gets or sets values of an object or array.

  **Example**

  ```typescript
    let obj: any = {
      data: {
        records: [
          {
            id: 1,
            field1: "text line",
            field2: "text line"
          },
          {
            id: 2,
            field1: "text line",
            field2: "text line"
          }
        ]
      }
    };
  
    let jPath: JPath = new JPath();
    let jpathExpression: string = "data.records[0].id";
    let id: number = jPath.getByJPathExpression( obj, jpathExpression );
  
  ```


## Interfaces

  **JPathInterface**
    
  ```typescript
    export interface JPathInterface {
    
      // jpath string exression as "subtree[1].opened" => [ "subtree", 1, "opened" ]
      // with this art of array of properties names of javascript object tree
      //  it is easier to get the property value of any datatype in javascript objects and arrays.
      //  later usage of the jpath array:
      //    let jpath = JPath.parse( "subtree[1].opened" );
      //    let obj = { "subtree": [{ "opened": false }, { "opened": true }] };
      //    let valueFound = JPath.getByJPath( jpath, obj );
      //    console.log( valueFound );
      //    prints out => true
      parse ( jpathExpression: string ): (string|number)[];
    
      serialize (
        jpath: (string|number)[],
        delimiter: string,
        start: string,
        finish: string
      ): string;
    
    
    
      getByJPathExpression (
        obj: any,
        jpathExpression: string
      ): any;
    
    
      // faster than JPath.getByJPathExpression( jpathExpression: string, value: any );
      // recommended when the lookup more than once with the same jpathExpression,
      // or when You already at once build the jpath array variables to perform lookups
      // like this: let jpath: (string|number)[] = [ "tokens", "startTokens", 0, "length" ];
      //    let jpath = JPath.parse( "subtree[1].opened" ); => [ "subtree", 1, "opened" ]
      //    let obj = { "subtree": [{ "opened": false }, { "opened": true }] };
      //    let valueFound = JPath.getByJPath( jpath, obj );
      //    console.log( valueFound );
      //    prints out => true
      getByJPath (
        obj: any,
        jpath: (string|number)[]
      ): any;
    
    
    
      setByJPathExpression (
        obj: any,
        jpathExpression: string,
        value: any
      ): JPathInterface;
    
      setByJPath (
        obj: any,
        jpath: (string|number)[],
        value: any
      ): JPathInterface;
    
      setByJPathWalkFlatRebuild (
        obj: any,
        jpath: (string|number)[],
        value: any,
        nameHolderId: string,
        nameId: string,
        branchName: string
      ): JPathInterface;
    
    }
    
  ```



  **JPathDataInterface**

  ```typescript
    export interface JPathDataInterface {
    
      isPlaceholderValue(): number;
    
      setIsPlaceholderValue( isPlaceholder: number ): JPathDataInterface;
    
      getJPath(): (string|number)[];
    
      setJPath( jpath: (string|number)[] ): JPathDataInterface;
    
      getJPathExpression(): string;
    
      setJPathExpression( jpathExpression: string ): JPathDataInterface;
    
    }
  ```

---



Have a nice day,

Jaisocx Software Architect Elias


