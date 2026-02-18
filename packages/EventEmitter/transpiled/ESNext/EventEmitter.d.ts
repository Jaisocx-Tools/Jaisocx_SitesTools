import { EventHandlerReturnValue, EventEmitResult } from "./Types.js";
import { EventEmitterInterface } from "./EventEmitterInterface.js";
export declare class EventEmitter implements EventEmitterInterface {
    eventsHandlersSetThisClass: any;
    debug: boolean;
    EventArtJSEvent: any;
    constructor();
    setDebug(inDebug: boolean): EventEmitter;
    isObjectEmpty(obj: object): boolean;
    addThisClassEventListener(eventName: any, eventHandler: (eventName: any, payload: any) => EventHandlerReturnValue | null | undefined | void): EventEmitter;
    emitEvent(eventName: any, payload: any): EventEmitResult[];
}
//# sourceMappingURL=EventEmitter.d.ts.map