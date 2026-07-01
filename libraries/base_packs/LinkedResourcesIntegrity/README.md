
# Linked Resources Integrity
  > 💡 The package produces checksum | 

  | 📖️  **Library**  | `@jaisocx/linked-resources-integrity` | 🏷️  **ver.**: `1.0.1` | 

  | 🗓  **Updated**  | Winter 2026 | `Tue Jan 20 06:28:29 CET 2026` | 

  | 📐  **Size**     | 🗂 Folder: 40 KB | 📦 Tarball: _ KB | 📋 .js: 5 KB | 

  | ⚡  **JS Engine** | 🌐 Browser: ❌ no | 🧭 Express: ✅ yes | 🖥️ Console: ✅ yes | 

---



##  The aim of the setup
  >  💡  The package produces checksum


## Interfaces



# Linked Resources Integrity


## Command line example

### Link tag integrity to prove hash of the resource being loaded

  1. modify file ./cmd/linkedResourceHash.sh

  on line 55 set path to file in the ts dockerized service like this:

```bash

      --filePath="/opt/jaisocx/sites_docker_environment/cdn/images/favicon/Icon_Sandbox_Brightday.ico" \

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
      href="https://sandbox.brightday.email/cdn/images/favicon/Icon_Sandbox_Brightday.ico"
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


