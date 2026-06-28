export interface AnyClassInterface {

  getProp(): any;

  /** ts code line ( )return this; ) allows coding like this:
   *  anyClassInstance
   *    .setPropOne( propOneValue )
   *    .setAnotherProp( anotherPropValue )
   *    .someMethod();
  */
  setProp( inPropValue: any ): AnyClassInterface;
}



