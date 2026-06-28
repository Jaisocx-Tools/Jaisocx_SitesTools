import { AnyClassInterface } from "./AnyClassInterface.js";

export class AnyClass {

  protected _prop: any;

  constructor() {
    this._prop = "";
  }

  public getProp(): any {
    return this._prop;
  }

  /** ts code line ( )return this; ) allows coding like this:
   *  anyClassInstance
   *    .setPropOne( propOneValue )
   *    .setAnotherProp( anotherPropValue )
   *    .someMethod();
  */
  public setProp( inPropValue: any ): AnyClassInterface {
    this._prop = inPropValue;

    return this;
  }

}



