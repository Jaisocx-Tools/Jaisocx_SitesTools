
# Api
  `@jaisocx/api`
  > 💡 Loads json and objdata

---



#### status 
  > ✅ Ok



####  supports
  > Client Side

```
   Browser |   Express |   Console 
    ✅ yes |      ❌ no |     ❌ no 
```



#### 📅 Updated
  > Winter 2026

  **Library**: `@jaisocx/api` ver. `1.2.3`

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
  > Loads json and objdata.




---



## How to obtain ObjData from a remote URL

The Api ts class has the advanced debugging infos, and this example here is the same. 

1. Obtaining ArrayBuffer, 
2. then Uint8Array, 
3. then parsing with the ObjDataParser ts class.

```
import { ObjData } from "@jaisocx/objdata";


fetch( "https://example.com/some-url/data.od" )
  .then( ( response: Response ): Promise<ArrayBuffer> => {
    return response.arrayBuffer();
  })
  .then( ( buf: ArrayBuffer ): any => {
    let objdata: Uint8Array = new Uint8Array( buf, 0, buf.byteLength );

    // obtaining JS object or array.
    let obj: any = ObjData.parse( objdata );
    return obj;
  });

```


