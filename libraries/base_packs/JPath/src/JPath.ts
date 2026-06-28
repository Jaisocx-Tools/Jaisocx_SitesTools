import { JPathInterface } from "./JPathInterface.js";



export class JPath implements JPathInterface {

  public static JPATH_EXPRESSION_MAX_SIZE: number = 8;
  protected _jpathExpressionMaxSize: number;



  constructor() {
    this._jpathExpressionMaxSize = JPath.JPATH_EXPRESSION_MAX_SIZE;
  }


  // jpath string exression as "subtree[1].opened" => [ "subtree", 1, "opened" ]
  // with this art of array of properties names of javascript object tree
  //  it is easier to get the property value of any datatype in javascript objects and arrays.
  //  later usage of the jpath array:
  //    let jpath = JPath.parse( "subtree[1].opened" );
  //    let obj = { "subtree": [{ "opened": false }, { "opened": true }] };
  //    let valueFound = JPath.getByJPath( jpath, obj );
  //    console.log( valueFound );
  //    prints out => true
  public parse ( jpathExpression: string ): (string|number)[] {
    const jpathArray: (string|number)[] = [];

    const jpathExpressionSubstrings_ByLeftEnbraces: string[] = jpathExpression.split( "[" );

    let jpathKeyString: string = "";
    let jpathKeyNumeric: number = 0;

    let counter_left_enbraces: number = 1;
    let jpathExpressionArray_ByLeftEnbracesLen: number = jpathExpressionSubstrings_ByLeftEnbraces.length;
    let maxNumber_left_enbraces: number = ( jpathExpressionArray_ByLeftEnbracesLen + 2 );
    let id_left_enbraces: number = 0;
    let splittedBy_left_enbraces_substr: string = "";

    let firstLeftBracePos: number = jpathExpression.indexOf ( "[" );


    //@ts-ignore
    let jpathItemsAdded: number = 0;

    whl_left_enbraces: while ( counter_left_enbraces <= maxNumber_left_enbraces ) {
      counter_left_enbraces++;

      if ( counter_left_enbraces >= maxNumber_left_enbraces ) {
        break whl_left_enbraces;
      }

      id_left_enbraces = ( counter_left_enbraces - 2 );
      splittedBy_left_enbraces_substr = jpathExpressionSubstrings_ByLeftEnbraces[ id_left_enbraces ];

      if ( splittedBy_left_enbraces_substr.length === 0 ) {
        continue whl_left_enbraces;
      }

      if ( ( counter_left_enbraces === 2 ) && ( firstLeftBracePos !== 0 ) ) {
        jpathItemsAdded = this.parseDotted (
          splittedBy_left_enbraces_substr,
          jpathArray
        );

        continue whl_left_enbraces;
      }



      const jpathExpressionSubstrings_ByRightEnbraces: string[] = splittedBy_left_enbraces_substr.split ( "]" );
      let jpathExpressionArray_ByRightEnbracesLen: number = jpathExpressionSubstrings_ByRightEnbraces.length;

      if ( jpathExpressionArray_ByRightEnbracesLen === 0 ) {
        continue whl_left_enbraces;
      }

      jpathKeyString = jpathExpressionSubstrings_ByRightEnbraces[ 0 ];
      jpathKeyNumeric = +jpathKeyString;

      if ( jpathExpressionArray_ByRightEnbracesLen === 1 ) {

        if ( Number.isInteger( jpathKeyNumeric ) === true ) {
          jpathArray.push( jpathKeyNumeric );
        } else {
          jpathArray.push( jpathKeyString );
        }

        continue whl_left_enbraces;
      } else if ( jpathExpressionArray_ByRightEnbracesLen === 2 ) {

        if ( Number.isInteger( jpathKeyNumeric ) === true ) {
          jpathArray.push( jpathKeyNumeric );
        } else {
          jpathArray.push( jpathKeyString );
        }

        if ( jpathExpressionSubstrings_ByRightEnbraces[ 1 ] === "." ) {
          continue whl_left_enbraces;
        }

      } else if ( ( jpathExpressionArray_ByRightEnbracesLen === 3 ) ) {
        console.error( "JPath Expression square braces wrong." );

        continue whl_left_enbraces;
      }



      let substr_ByRightEnbraces: string = jpathExpressionSubstrings_ByRightEnbraces[ 1 ];
      jpathItemsAdded = this.parseDotted (
        substr_ByRightEnbraces,
        jpathArray
      );

      continue whl_left_enbraces;
    }


    return jpathArray;
  }


  // @method protected parseDotted( ... @args ): number
  // @inokedBy method: public parse ( jpathExpression: string ): (string|number)[]
  // splitted with symbol point, adds to jpathArray, numeric array elem id or textual field name.
  public parseDotted (
    jpathExpressionDotted: string,
    jpathArray: ( string|number )[]
  ): number {
    let addedNumber: number = 0;

    let jpathExpressionSubstrings: string[] = jpathExpressionDotted.split( "." );
    let splittedBy_dot_substr: string = "";

    let jpathKeyString: string = "";
    let jpathKeyNumeric: number = 0;

    let counter_dotted: number = 1;
    let jpathExpressionArray_dottedLen: number = jpathExpressionSubstrings.length;
    let maxNumber_dotted: number = ( jpathExpressionArray_dottedLen + 2 );
    let id_dotted: number = 0;

    whl_dotted: while ( counter_dotted <= maxNumber_dotted ) {
      counter_dotted++;

      if ( counter_dotted >= maxNumber_dotted ) {
        break whl_dotted;
      }

      id_dotted = ( counter_dotted - 2 );
      splittedBy_dot_substr = jpathExpressionSubstrings[ id_dotted ];

      if ( splittedBy_dot_substr.length === 0 ) {
        continue whl_dotted;
      }

      jpathKeyString = splittedBy_dot_substr;
      jpathKeyNumeric = +jpathKeyString;

      if ( Number.isInteger( jpathKeyNumeric ) === true ) {
        jpathArray.push( jpathKeyNumeric );
      } else {
        jpathArray.push( jpathKeyString );
      }

      continue whl_dotted;
    }


    return addedNumber;
  }



  public serialize (
    jpath: (string|number)[],
    concatenator: string,
    start: string,
    finish: string
  ): string {

    // @retVal
    let jpathExpression: string = "";

    let jpathJoined: string = jpath.join ( concatenator );
    let locJpath: (string|number)[] = new Array();

    let startNotZerolen: boolean = ( ( start !== undefined ) && ( start !== null ) && ( start.length > 0 ) );
    let finishNotZerolen: boolean = ( ( finish !== undefined ) && ( finish !== null ) && ( finish.length > 0 ) );

    if ( ( startNotZerolen === false ) && ( finishNotZerolen === false ) ) {

      // @retVal
      jpathExpression = jpathJoined;

    } else if ( startNotZerolen === true ) {
      locJpath = [ start, jpathJoined ];
    }

    if ( finishNotZerolen === true ) {
      locJpath.push( finish );
    }

    if ( locJpath.length > 0 ) {

      // @retVal
      jpathExpression = locJpath.join( "" );
    }


    return jpathExpression;
  }



  public getByJPathExpression (
    obj: any,
    jpathExpression: string
  ): any {
    const jpath: (string|number)[] = this.parse( jpathExpression );


    return this.getByJPath (
      obj,
      jpath
    );
  }


  // faster than JPath.getByJPathExpression( jpathExpression: string, value: any );
  // recommended when the lookup more than once with the same jpathExpression,
  // or when You already at once build the jpath array variables to perform lookups
  // like this: let jpath: (string|number)[] = [ "tokens", "startTokens", 0, "length" ];
  //    let jpath = JPath.parse( "subtree[1].opened" ); => [ "subtree", 1, "opened" ]
  //    let obj = { "subtree": [{ "opened": false }, { "opened": true }] };
  //    let valueFound = JPath.getByJPath( jpath, obj );
  //    console.log( valueFound );
  //    prints out => true
  public getByJPath (
    obj: any,
    jpath: (string|number)[]
  ): any {

    if ( ( obj === undefined ) || ( obj === null ) ) {
      return null;
    }

    if ( !jpath || jpath.length === 0 ) {
      return obj;
    }

    let targetValue: any = obj;
    let jpathValueFound: any = {};

    let jpathPropertyKey: (string|number) = "";
    let jpathPropLevel: number = 0;
    let jpathLevelMax: number = Math.min(
      jpath.length,
      JPath.JPATH_EXPRESSION_MAX_SIZE
    );

    for ( jpathPropLevel = 0; jpathPropLevel < jpathLevelMax; jpathPropLevel++ ) {

      if ( !targetValue ) {
        break;
      }

      jpathPropertyKey = jpath[jpathPropLevel];
      jpathValueFound = targetValue[jpathPropertyKey];

      if ( typeof jpathValueFound === "object" ) {

        if ( Array.isArray( jpathValueFound ) === true ) {
          targetValue = [...jpathValueFound];
        } else {
          targetValue = {...jpathValueFound};
        }

      } else {
        targetValue = jpathValueFound;
      }

    }


    return targetValue;

  }



  public setByJPathExpression (
    obj: any,
    jpathExpression: string,
    value: any
  ): JPathInterface {
    const jpath: (string|number)[] = this.parse( jpathExpression );

    this.setByJPath (
      obj,
      jpath,
      value
    );


    return this;
  }



  public setByJPath (
    obj: any,
    jpath: (string|number)[],
    value: any
  ): JPathInterface {
    let locObj: any = obj;
    const jpathLen: number = jpath.length;
    let jpathLastIx: number = ( jpathLen - 1 );
    let datatypeJsonKey: string = "";
    let id: number = 0;
    let nextId: number = 0;
    let key: any = "";
    let lastKey: any = jpath[ jpathLastIx ];


    // let prevKey: any = "";
    let nextKey: any = "";


    // @loop_counter
    let counter: number = 1;
    let maxCounter: number = ( jpathLen + 2 );

    whl_jpath: while( counter < maxCounter ) {

      // @inc_loop_counter
      counter++;


      // @loop_counter
      if ( counter >= maxCounter ) {
        break whl_jpath;
      }

      id = ( counter - 2 );
      nextId = ( id + 1 );


      // prevKey = key;
      key = jpath[ id ];

      if ( nextId >= jpathLen  ) {
        nextKey = "";
      } else {
        nextKey = jpath[ nextId ];
      }

      if ( id === jpathLastIx ) {
        locObj[ lastKey ] = value;
        break  whl_jpath;
      }

      if ( !locObj[ key ] ) {
        datatypeJsonKey = typeof ( nextKey );

        if ( datatypeJsonKey === "number" ) {
          locObj[key] = new Array();
        }
        else {
          locObj[key] = new Object();
        }

      }

      locObj = locObj[ key ];

      continue  whl_jpath;
    }


    return this;

  }



  public setByJPathWalkFlatRebuild (
    obj: any,
    jpath: (string|number)[],
    value: any,
    nameHolderId: string,
    nameId: string,
    branchName: string
  ): JPathInterface {
    const jpathLen: number = jpath.length;
    let jpathIx: number;
    let jpathLastIx: number = jpathLen - 1;
    let id: any = null;
    let holderId: any = jpath[0];
    let foundNode: any = null;
    let newItem: any = null;

    id = jpath[0];
    obj[nameId] = id;

    for ( jpathIx = 1; jpathIx < jpathLen; jpathIx++ ) {
      id = jpath[jpathIx];

      foundNode = false;

      let toGetById: any[] = [];

      if ( Array.isArray( obj ) ) {
        toGetById = obj;

      } else if ( obj[branchName] ) {
        toGetById = obj[branchName];

      } else if ( !obj[branchName] ) {
        obj[branchName] = new Array();
        toGetById = obj[branchName];

      }

      foundNode = toGetById.find (
        ( node: any ) => {
          const matches: boolean = ( node[nameId] === id );


          return matches;
        }
      );

      if ( !foundNode ) {

        if ( jpathIx === jpathLastIx ) {
          newItem = {
            ...value,
            [nameId]: id,
            [nameHolderId]: holderId
          };
        } else {
          newItem = {
            [nameId]: id,
            [nameHolderId]: holderId
          };
        }

        toGetById.push( newItem );
        obj[nameId] = holderId;

        const lastIx: number = ( toGetById.length - 1 );
        foundNode = toGetById[lastIx];

      }

      obj = foundNode;
      holderId = id;

    }


    return this;

  }

}




