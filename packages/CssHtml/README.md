
# css html
  `@jaisocx/css-html`
  > 💡 js methods for work with css3

---



#### status
  >  ✅ Ok



####  supports
  > Client Side

```
    Browser |   Express |   Console
     ✅ yes |     ❌ no |      ❌ no
```



#### 📅 Updated
  > Autumn 2025

  **Library**: `@jaisocx/css-html` ver. `1.3.6`

  🗓 **timestamp**: `Autumn 2025`

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
  > Package with methods to work with CSS and HTML

  Base methods to work with string variables, 
  related to CSS and HTML.
  


## Classes available
  1. CssHtml
  2. CssSelectorWeight


## TypeScript coding examples

### 1. CssHtml 

```
import { CssHtml } from "@jaisocx/css-html";


let cssHtmlPackage = new CssHtml();

let remBasePxValue = cssHtmlPackage.getRemBasePxValue(); // 16


// example 1
let sizeRem = "1rem";
let sizePx = cssHtmlPackage.remToPx( sizeRem );
console.log( sizeRem, sizePx );

// example 2
let sizeNotSureWhetherRem = "100%";
let sizeIfRemThenPx = cssHtmlPackage.remToPx( sizeNotSureWhetherRem ) || sizeNotSureWhetherRem;
console.log( sizeNotSureWhetherRem, sizeIfRemThenPx );

```

```
// example 3 in the @jaisocx/email-html-inliner
// 
import { CssHtml } from "@jaisocx/css-html";
import { Trimmer } from "@jaisocx/text";

constructor() {
  this.trimmer = new Trimmer(); 

  this.cssHtmlPackage = new CssHtml();
  this.remBasePxValue = this.cssHtmlPackage.getRemBasePxValue();
}

let variableValue = window.getComputedStyle( node ).getPropertyValue( variableName );
let matchedValue = this.trimmer.trimQuotes( variableValue ) || variableValue;

if ( matchedValue.includes("rem") ) {

  let values: string[] = matchedValue.split( " " );

  for ( let i = 0; i < values.length; i++ ) {
    let size: string = values[i];
    values[i] = this.cssHtmlPackage.remToPx( size, this.remBasePxValue ) || size;
  }

  matchedValue = values.join( " " );

}

```


### 2. CssSelectorWeight 


#### Example 2.1. Get Specifity value denoting weight of a css selector 
```
import { CssSelectorWeight } from "@jaisocx/css-html";

let selectorText = ".workkspace.long .theme-darkmode";
let specifity = this.cssSelectorWeightPackage.calculateOneRuleSpecificity ( selectorText );

console.log( specifity );
// [0, 0, 3, 0, 0, 0]

let selectorText2 = ".workkspace.long .theme-darkmode span.column-value";
let specifityHigher = this.cssSelectorWeightPackage.calculateOneRuleSpecificity ( selectorText2 );

console.log( specifityHigher );
// [0, 0, 4, 0, 1, 0]

let specifitiesComparison = this.cssSelectorWeightPackage.compareSpecificity( 
  specifity, 
  specifityHigher );

console.log( specifitiesComparison );
```


#### Example 2,2. Compare specifity values, to get know what css rule has the higher priority.
```
import { CssSelectorWeight } from "@jaisocx/css-html";

// specifityOfRuleSelector1 = [0, 0, 2, 0, 0, 0];
// specifityOfRuleSelector2 = [0, 0, 2, 0, 1, 0];

let specifitiesComparison = this.cssSelectorWeightPackage.compareSpecificity ( 
  specifityOfRuleSelector1, 
  specifityOfRuleSelector2 
);

```



#### Example 2.3. Detailed example.
```
import { CssSelectorWeight } from "@jaisocx/css-html";

let rule1 = document.styleSheets[0].cssRules[0];
let rule2 = document.styleSheets[0].cssRules[1];

if ( rule1.matches( htmlElement ) && rule2.matches( htmlElement ) ) {

  let specifityOfRuleSelector1 = this.cssSelectorWeightPackage.calculateOneRuleSpecificity ( rule1.selectorText );

  let specifityOfRuleSelector2 = this.cssSelectorWeightPackage.calculateOneRuleSpecificity ( rule2.selectorText );

  let specifitiesComparison = this.cssSelectorWeightPackage.compareSpecificity( 
    specifityOfRuleSelector1, 
    specifityOfRuleSelector2 );

  let ruleChosen = null;
  if ( specifitiesComparison >= 0 ) {
    ruleChosen = rule1;
  } else {
    ruleChosen = rule2;
  }

  let styleToApply = ruleChosen.style.getPropertyValue( "background" );

  htmlElement.style.background = styleToApply;
}

```


