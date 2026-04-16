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
  public parse( jpathExpression: string ): (string|number)[] {
    const jpath: (string|number)[] = [];

    const jpathSplittedByPoints: string[] = jpathExpression.split(".");
    let jpathSplitted: string = "";

    loopSplittedByPoints: for (
      jpathSplitted
      of jpathSplittedByPoints
    ) {
      const jpathSplittedLenth: number = jpathSplitted ? jpathSplitted.length : 0;

      if ( jpathSplittedLenth === 0 ) {
        continue;
      }

      let matchedFirstTime: boolean = false;
      let leftBracePosition: number = 0;
      let rightBracePosition: number = 0;
      let jpathKey: string = "";
      let jpathKeyNumeric: number = 0;


      // the loop to find arrays indexes in a property,
      // when looking for an item in multilevel arrays.
      // for example: "tokens[startTokens][0].length"
      // pushes to jpath array in the first iteration like this:
      //    jpath.push( "tokens" );
      //    jpath.push( "startTokens" ),
      //  then in the next iteration
      //    jpath.push( 0 );
      //  and then exits the cycle.
      //  the push of prop "length" is performed then
      //    in the next iteration of the "loopSplittedByPoints: for" cycle above
      while ( leftBracePosition !== (-1) ) {

        // in this while loop,
        // when the next step is done,
        // .indexOf searches from the rightBracePosition,
        // matched in the previous while iteration.
        leftBracePosition = jpathSplitted.indexOf(
          "[",
          rightBracePosition
        );


        // if an opening brace was not matched,
        //        means, this jpath expression does not contain [] expression,
        //        and this key item
        //        from the splitted by dots jpath
        //        is pushed to the target value array,
        //        and continues to check the next jpath key item.
        if ( leftBracePosition === (-1) ) {
          jpath.push( jpathSplitted );
          continue loopSplittedByPoints;
        }

        rightBracePosition = jpathSplitted.indexOf(
          "]",
          leftBracePosition
        );


        // here means,
        //  when square braced key opened,
        //  but the closing square brace not matched,
        //  the JPath expression is wrong.
        if ( rightBracePosition === (-1) ) {
          throw new Error("JPathExpression synthax");
          break;
        }


        // the property name before opening square brace [ is being pushed to jpath array
        //  when the opening square brace [ is found first time.
        if ( matchedFirstTime === false ) {
          jpathKey = jpathSplitted.slice (
            0,
            leftBracePosition
          );

          jpath.push( jpathKey );

          matchedFirstTime = true;

        }

        jpathKey = jpathSplitted.slice( (
          leftBracePosition + 1),
        rightBracePosition
        );
        jpathKeyNumeric = +jpathKey;

        if ( Number.isInteger( jpathKeyNumeric ) === true ) {
          jpath.push( jpathKeyNumeric );
        } else {
          jpath.push( jpathKey );
        }

        rightBracePosition++;

        if ( rightBracePosition === jpathSplittedLenth ) {
          continue loopSplittedByPoints;
        }

      }

    }


    return jpath;
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
    let datatypeNode: string = "";
    let key: any = "";
    let lastKey: any = jpath[ jpathLastIx ];


    // @loop_counter
    let counter: number = 0;
    let maxCounter: number = jpathLastIx;

    jpathLoop: while( counter < maxCounter ) {

      // @loop_counter
      if ( counter >= jpathLen ) {
        break jpathLoop;
      }

      key = jpath[ counter ];


      // @inc_loop_counter
      counter++;

      if (!locObj[key]) {
        datatypeNode = typeof key;

        if (datatypeNode === "number") {
          locObj[key] = new Array();
        }
        else {
          locObj[key] = new Object();
        }

      }

      locObj = locObj[key];
      continue jpathLoop;
    }


    //@ts-ignore
    locObj[ lastKey ] = value;


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




