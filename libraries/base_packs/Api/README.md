
# Api
  > 💡 Loads json and objdata 

  | 📖️  **Library**  | `@jaisocx/api` | 🏷️  **ver.**: `1.2.3` |
  
  | 🗓  **Updated**  | 2025 | `Nov 16 22:40 CET 2025` |
  
  | 📐  **Size**     | 🗂 Folder:   53 KB | 📦 Tarball:   _ KB | 📋 .js:        4 KB |
  
  | ⚡  **JS Engine** | 🌐 Browser: ✅ yes | 🧭 Express: ✅ yes | 🖥️ Console: ✅ yes | 

---



## The aim of the setup
  > 💡  Loads json and objdata.

---



## How to obtain ObjData from a remote URL

  The Api ts class has the advanced debugging infos, and this example here is the same. 

  1. Obtaining ArrayBuffer, 
  2. then Uint8Array, 
  3. then parsing with the ObjDataParser ts class.

```typescript
  
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


---



Have a nice day.

Elias, Software Architect of Jaisocx Company



