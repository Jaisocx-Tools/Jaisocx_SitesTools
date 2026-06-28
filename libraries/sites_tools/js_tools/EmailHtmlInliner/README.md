# Html Email Styles
  > 💡 css inlined in html emails

  | 📖️  **Library**  | `@jaisocx/email-html-inliner` | 🏷️  **ver.**: `1.3.7` |
  
  | 🗓  **Updated**  | Winter 2026 | `Tue Jan 20 06:28:29 CET 2026` |
  
  | 📐  **Size**     | 🗂 Folder: 6.5 MB | 📦 Tarball: _ KB | 📋 .js: 85 KB
  
  | ⚡  **JS Engine** | 🌐 Browser: ✅ yes | 🧭 Express: ❌ no | 🖥️ Console: ❌ no |

---



## The aim of the setup
  > 💡 css inlined in html emails

  The webmail apps due to security reasons do stipping out certain markup from the email messges sent with Content-Type text/html.

  The package here is to solve the workaround to adjust somehow to the rules of webmail apps providers, 
  email messages before sending they.



## Tests

  Tested with Gmail, Outlook, Protonmail, iCloud, AOL, Yahoo.



#### NOT solved
  > padding: &lt;not-zero&gt;; {max|min-}width: 100%;

  The AOL and Yahoo Webmail apps strip out the CSS property `box-sizing`, 
  and the default rendering rule in browsers is the `box-sizing: padding-box;`.

  Unfortunately, I could not find the workaround, 
  when a html node has CSS `padding` set, 
  and the contents have to be set `width: 100%;`. 
  
  In this option the look and feel is not rendered the right way. 
  The contents are overflowing, and when designed the email message with CSS `box-sizing: border-box;` 
  the Sites Dev could not know this, 
  neither could notice in other webmail apps.



## js example
  
  ```js
    import { EmailHtmlInliner } from "@jaisocx/email-html-inliner";
    
    function inlineText() {
      let inliner = new EmailHtmlInliner();
      let cssHtmlPackage = inliner.cssHtmlPackage;
    
      // set these values before sending,
      // or omit when developing the email message.
      let baseUrlToReplace = "./../../../cdn/images/";
      let baseUrlReplacedWith = "https://my-cdn.example.com/www/media/images/";
    
      let inlineText = inliner.inline (
        document,
        "html",
        inliner.constants.stylesPropsToCheck,
        baseUrlToReplace,
        baseUrlReplacedWith
      );
    
      let textHtmlNode = this.htmlDocument.getElementById("inlinetext");
      textHtmlNode.innerHTML = cssHtmlPackage.escapeHTML( inlineText );
    }
  ```


