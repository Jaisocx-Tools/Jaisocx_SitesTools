
# Mime Type
  `@jaisocx/mime-type`
  > 💡 The package does ...



#### status
  >  ✅ Ok



####  supports
> Both Server Side and Client Side

```
   Browser |   Express |   Console
    ✅ yes |    ✅ yes |     ✅ yes
```




#### 📅 Updated
  > Winter 2026

  **Library**: `@jaisocx/mime-type` ver. `1.0.7`

  🗓 **timestamp**: `Tue Jan 20 06:28:29 CET 2026`

---



#### size
  > 320 KB

```
  Current Folder |   This lib installed        |   typescript in src/  
                 |     in other node_modules/  |                       
          320 KB |                             |                5 KB   
```

---





## 💡 The aim of the setup
  > The package does ...



# Mime type

```
  MimeType getMimeTypeByFilename( "favicon.ico", 1 ) => "image/x-icon"
```



## Example ts code

```typescript
  
  // this constants object is faster, since has bery few lines relevant to link rel=preload.
  let mConstants: MimeTypeConstantsInterface = new SitesPreloaderMimeTypeConstants();
  let mimeTypesInstance: MimeType = new MimeType();
    mimeTypesInstance
      .setMimeTypesConstants( mConstants );
  
  
  let filename: string = "";
  let mimeType: string|undefined = "";
  
  filename = "favicon.ico";
  mimeType = mimeTypesInstance.getMimeTypeByFilename( filename, 1 );
  console.log (
    { "bib": "@jaisocx/mime-type", filename, mimeType }
  );
  
  // Console:
  /*
  {
    bib: '@jaisocx/mime-type',
    filename: 'favicon.ico',
    mimeType: 'image/x-icon'
  }
  */
  
```



---



Have a nice day.

Elias, Software Architect of Jaisocx Company



