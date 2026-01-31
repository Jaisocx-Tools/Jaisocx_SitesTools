
# Linked Resources Integrity
  `@jaisocx/linked-resources-integrity`
  > 💡 The package does ...



#### status
  >  ✅ Ok



####  supports
  > Server Side

```
   Browser |   Express |   Console
     ❌ no |    ✅ yes |     ✅ yes
```



#### 📅 Updated
  > Winter 2026

  **Library**: `@jaisocx/linked-resources-integrity` ver. `1.0.1`

  🗓 **timestamp**: `Tue Jan 20 06:28:29 CET 2026`

---



#### size
  > 40 KB

```
  Current Folder |   This lib installed        |   typescript in src/  
                 |     in other node_modules/  |                       
           40 KB |                             |                5 KB   
```

---





## 💡 The aim of the setup
  > The package does ...


## Interfaces



# Linked Resources Integrity


## Command line example

### Link tag integrity to prove hash of the resource being loaded

  1. modify file ./cmd/linkedResourceHash.sh

  on line 55 set path to file in the ts dockerized service like this:

```bash

      --filePath="/opt/jaisocx/sites_tools/cdn/www/media/images/favicon/Icon_Sandbox_Brightday.ico" \

```


  2. invoke bash script in terminal

```bash

./cmd/linkedResourceHash.sh

```


  3. Improve quality of the linked resources on Your sites

```html

    <link
      rel="icon"
      type="image/x-icon"
      href="https://sandbox.brightday.email/cdn/www/media/images/favicon/Icon_Sandbox_Brightday.ico"
      href-fallback="favicon/Icon_Sandbox_Brightday.ico"
      integrity="sha512-t3XuLqNXUNFqkrdBlRf4me63watpaFBd8TZzcCAvxUMG4msGTx2/k6OFQdEl0wUj3iKDK9z2Z9h+YQF71i8S+Q=="
      onerror="javascript: ( () => { this.onerror = null; this.href = this.getAttribute( 'href-fallback' ); } )();"
    />

```




## Interfaces

### Hasher

```typescript
  
  export interface LinkedResourceHasherInterface {
  
    preloadedResourceIntegrityProduce (
      filePath: string,
      algo: string
    ): string;
  
  
    linkPreloaderProduce (
      href: string,
      path: string,
      rel: string,
      as: string,
      fetchpriority: string,
      prettified: boolean
    ): string;
  
  }
  
```



---



Have a nice day.

Elias, Software Architect of Jaisocx Company


