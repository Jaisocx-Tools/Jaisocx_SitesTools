
# @jaisocx/api


####  status
> ✅ Ok



#### supports
> Client Side

```
    Browser |    Express |   Console
     ✅ yes |      ❌ no |      ❌ no 
```

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


