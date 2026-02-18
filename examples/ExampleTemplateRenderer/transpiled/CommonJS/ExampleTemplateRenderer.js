"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleTemplateRenderer = void 0;
const template_renderer_1 = require("@jaisocx/template-renderer");
class ExampleTemplateRenderer {
    constructor() {
        this._data = {
            message: "Hello World!"
        };
        this._templateHtml = `
<h3>{{ message }}</h3>      
      `;
        this._templateRenderer = new template_renderer_1.TemplateRenderer();
        this._holderHtmlNodeSelector = null;
    }
    run() {
        let holderHtmlNode = null;
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
        const eventHandler1 = (_eventName, payload) => {
            payload.html = payload.html.replaceAll("<", "&lt;");
            const eventHandlerReturnValue = new class {
                constructor() {
                    this.payloadReturned = payload;
                    this.value = "";
                }
            }();
            return eventHandlerReturnValue;
        };
        this._templateRenderer.addThisClassEventListener(this._templateRenderer.EVENT_NAME__AFTER_RENDER, eventHandler1);
        const eventHandler2 = (_eventName, payload) => {
            payload.html = payload.html.replaceAll(">", "&gt;");
            const eventHandlerReturnValue = new class {
                constructor() {
                    this.payloadReturned = payload;
                    this.value = "";
                }
            }();
            return eventHandlerReturnValue;
        };
        this._templateRenderer.addThisClassEventListener(this._templateRenderer.EVENT_NAME__AFTER_RENDER, eventHandler2);
        const html = this._templateRenderer.render();
        holderHtmlNode.insertAdjacentHTML("afterbegin", html);
    }
}
exports.ExampleTemplateRenderer = ExampleTemplateRenderer;
//# sourceMappingURL=ExampleTemplateRenderer.js.map