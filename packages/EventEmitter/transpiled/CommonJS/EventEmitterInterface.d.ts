import { EventHandlerReturnValue, EventEmitResult } from "./Types.js";
export interface EventEmitterInterface {
    setDebug(inDebug: boolean): EventEmitterInterface;
    isObjectEmpty(obj: object): boolean;
    addThisClassEventListener(eventName: any, eventHandler: (eventName: any, payload: any) => EventHandlerReturnValue | null | undefined | void): EventEmitterInterface;
    emitEvent(eventName: any, payload: any): EventEmitResult[];
}
//# sourceMappingURL=EventEmitterInterface.d.ts.map