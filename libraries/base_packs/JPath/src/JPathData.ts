import { JPathDataInterface } from "./JPathDataInterface.js";



export class JPathData implements JPathDataInterface {

  protected _jpath: (string|number)[];
  protected _jpathExpression: string;
  protected _isPlaceholderValue: number;



  constructor() {
    this._jpath = [];
    this._jpathExpression = "";
    this._isPlaceholderValue = 0;
  }



  public isPlaceholderValue(): number {
    return this._isPlaceholderValue;
  }



  public setIsPlaceholderValue( isPlaceholder: number ): JPathDataInterface {
    this._isPlaceholderValue = isPlaceholder;


    return this;
  }



  public getJPath(): (string|number)[] {
    return this._jpath;
  }



  public setJPath( jpath: (string|number)[] ): JPathDataInterface {
    this._jpath = jpath;

    if ( !this._jpath || this._jpath.length === 0 ) {
      this._isPlaceholderValue = 1;

    } else {
      this._isPlaceholderValue = 0;

    }


    return this;
  }



  public getJPathExpression(): string {
    return this._jpathExpression;
  }



  public setJPathExpression( jpathExpression: string ): JPathDataInterface {
    this._jpathExpression = jpathExpression;


    return this;
  }

}



