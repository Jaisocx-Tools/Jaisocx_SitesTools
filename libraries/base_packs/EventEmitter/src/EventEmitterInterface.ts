import { EventHandlerReturnValue, EventEmitResult } from "./Types.js";



export interface EventEmitterInterface {

  setDebug( inDebug: boolean ): EventEmitterInterface;

  isObjectEmpty(obj: object): boolean;


  // this method just sets an event handler function by event name to an object,
  // and then all event handlers are executed on this.emitEvent method call.
  // this.emitEvent method call You can place inside Your js code,
  // where You wish to provide the interface of optional adding a custom event listener in Your JS class.
  addThisClassEventListener(
    eventName: any,
    eventHandler: (eventName: any, payload: any) => EventHandlerReturnValue|null|undefined|void
  ): EventEmitterInterface;


  // this.emitEvent method call You can place inside Your js code,
  // where You wish to provide the interface of optional adding a custom event listener in Your JS class.
  emitEvent (
    eventName: any,
    payload: any
  ): EventEmitResult[];
}




