import { TemplateRenderer } from "@jaisocx/template-renderer";
import { EventHandlerReturnValue } from "@jaisocx/event-emitter";



export class ExampleTemplateRenderer {
  _templateRenderer: TemplateRenderer;

  _holderHtmlNodeSelector: any|null;

  _data: object;

  _templateHtml: any;



  constructor() {
    this._data = {
      message: "Hello World!"
    };
    this._templateHtml = `
<h3>{{ message }}</h3>      
      `;

    this._templateRenderer = new TemplateRenderer();
    this._holderHtmlNodeSelector = null;
  }



  run(): void {
    let holderHtmlNode: HTMLElement|null = null;

    if (!this._holderHtmlNodeSelector) {
      this._holderHtmlNodeSelector = "body";
    }
    holderHtmlNode = document.querySelector(this._holderHtmlNodeSelector);

    if (!holderHtmlNode) {
      return;
    }

    this._templateRenderer
      .setTemplate(this._templateHtml)
      .setData(this._data);

    const eventHandler1: any = ( _eventName: any, payload: any ) => {
      payload.html = payload.html.replaceAll(
        "<",
        "&lt;");

      const eventHandlerReturnValue: EventHandlerReturnValue = new class implements EventHandlerReturnValue {
        payloadReturned: any = payload;
        value: any = "";
      }();


      return eventHandlerReturnValue;
    };

    this._templateRenderer.addThisClassEventListener (
      this._templateRenderer.EVENT_NAME__AFTER_RENDER,
      eventHandler1
    );

    const eventHandler2: any = ( _eventName: any, payload: any ) => {
      payload.html = payload.html.replaceAll(
        ">",
        "&gt;");

      const eventHandlerReturnValue: EventHandlerReturnValue = new class implements EventHandlerReturnValue {
        payloadReturned: any = payload;
        value: any = "";
      }();


      return eventHandlerReturnValue;
    };

    this._templateRenderer.addThisClassEventListener (
      this._templateRenderer.EVENT_NAME__AFTER_RENDER,
      eventHandler2
    );

    const html = this._templateRenderer.render();

    holderHtmlNode.insertAdjacentHTML (
      "afterbegin",
      html
    );

  }
}


