
# Event Emitter
  `@jaisocx/event-emitter`
  > 💡 Optimization of adding in-browser interactivity events to rendered styled big data, like tree and table.

  > **Advised** if rendering **big data**.
  > This package optimizes @jaisocx/tree,
  > and was tested in example
  > with loaded json data of size 14 MB
  > ( 14 millions bytes
  > and rendered several hundreds thousands tree leafs
  > with **single events handlers entry point** ).
  
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
  > 2025

  **Library**: `@jaisocx/event-emitter` ver. `1.4.2`

  🗓 **timestamp**: `2025`

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
  > Optimization of adding in-browser interactivity events to rendered styled big data, like tree and table.

  1. ease **set in ts code places** to invoke from there **custom callbacks** later
  2. best practices for **custom callbacks**
  3. best practices for **events handlers payloads**
  4. **optimized events handling** for sites tools, having rendered **big data**



  The classes to extend in Your other classes, 
  so that the new classes can have an improved way to emit events,
  and at the classes instances one can add an event handler.

  When You have developed a Typescript class, 
  and can foresee, that on some code pont there can be an additional method subcall,
  You can emit an event there. 
  When some event handler will be set, 
  it will be invoked at the code point where code line resides .emtEvent().

  When a site ui tool was rendered by a big size json data, 
  this tool will have many DOM Event Handlers set. 
  The ImprovedRenderEventEmitter 
  does this amount of similar DOM events to one, 
  and, therefore, improves resources usage.



## Typescript coding examples


### 1. Constants of Events Names

```
    const eventHandler1: any = ( eventName: any, payload: any ) => {
      payload.html = payload.html.replaceAll (
        "<", 
        "&lt;");
  
      const eventHandlerReturnValue: EventHandlerReturnValue = new class implements EventHandlerReturnValue {
        payloadReturned: any = payload;
        value: any = "";
      }();
  
      return eventHandlerReturnValue;
    };
  
    templateRenderer.addThisClassEventListener (
      this.TemplateRenderer.EVENT_NAME__AFTER_RENDER,
      eventHandler1
    );

```

---



### 2. EventsHandlers Callbacks

  Emit an event somewhere in code, 
  in order to forecast possible additional 
  callbacks at that code line.

```typescript

  import { EventEmitter, EventEmitResult, EventHandlerReturnValue } from "@jaisocx/event-emitter";
  
  export class SomeClass extends EventEmitter {
    EVENT_NAME__AFTER_SOMESUBCALL: any;
  
    constructor() {
      super();
  
      this.EVENT_NAME__AFTER_SOMESUBCALL = "afterSomeSubcall";
    }
  
    doSomething(): void {
      this.someSubcall();
  
      const payload: any = "Hallo";
      this.emitEvent (
        this.EVENT_NAME__AFTER_SOMESUBCALL,
        payload
      );
    }
    
```

---





  ### 3. Events Payloads Handle

  Emit an event with option 
  to pass to the next event handler 
  the processed payload 
  from the previous event handler.

```
// example code from class TemplateRenderer

  render(): any {
    let renderedHtml = this.replaceTemplateRendererWithDataForRendering(
      this.template,
      this.data
    );

    if (this.debug) {
      console.log(
        "renderedHtml before afterRender event emitted",
        renderedHtml
      );
    }

    const eventResult: EventEmitResult[] = this.emitEvent (
      this.EVENT_NAME__AFTER_RENDER,
      {
        html: renderedHtml,
        data: this.data,
      }
    );

    if (eventResult.length > 0) {
      const last: number = eventResult.length - 1;

      let payloadReturned: any = null;
      for ( let eventResultsStep = last; eventResultsStep > (-1); eventResultsStep-- ) {
        try {
          // @ts-ignore
          payloadReturned = eventResult[eventResultsStep].result.payloadReturned; 
        } catch (e) {}
        
        if ( !payloadReturned ) {
          continue;
        }

        renderedHtml = payloadReturned.html;
      }

      if (this.debug) {
        console.log(
          "renderedHtml before afterRender event emitted",
          eventResult,
          renderedHtml
        );
      }
    } else if (this.debug) {
      console.log("afterRender event did not change html");
    }
    
    return renderedHtml;
  }
```

---





## HELLO WORLD MESSAGE:

GOOD LUCK AND HAVE FUN WITH CODING ))


Yours [jaisocx.com](https://jaisocx.com/) Software Architect and Dev,

Elias






