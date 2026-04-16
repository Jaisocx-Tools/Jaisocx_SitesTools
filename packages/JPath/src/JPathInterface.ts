export interface JPathInterface {

  // jpath string exression as "subtree[1].opened" => [ "subtree", 1, "opened" ]
  // with this art of array of properties names of javascript object tree
  //  it is easier to get the property value of any datatype in javascript objects and arrays.
  //  later usage of the jpath array:
  //    let jpath = JPath.parse( "subtree[1].opened" );
  //    let obj = { "subtree": [{ "opened": false }, { "opened": true }] };
  //    let valueFound = JPath.getByJPath( jpath, obj );
  //    console.log( valueFound );
  //    prints out => true
  parse ( jpathExpression: string ): (string|number)[];

  serialize (
    jpath: (string|number)[],
    delimiter: string,
    start: string,
    finish: string
  ): string;



  getByJPathExpression (
    obj: any,
    jpathExpression: string
  ): any;


  // faster than JPath.getByJPathExpression( jpathExpression: string, value: any );
  // recommended when the lookup more than once with the same jpathExpression,
  // or when You already at once build the jpath array variables to perform lookups
  // like this: let jpath: (string|number)[] = [ "tokens", "startTokens", 0, "length" ];
  //    let jpath = JPath.parse( "subtree[1].opened" ); => [ "subtree", 1, "opened" ]
  //    let obj = { "subtree": [{ "opened": false }, { "opened": true }] };
  //    let valueFound = JPath.getByJPath( jpath, obj );
  //    console.log( valueFound );
  //    prints out => true
  getByJPath (
    obj: any,
    jpath: (string|number)[]
  ): any;



  setByJPathExpression (
    obj: any,
    jpathExpression: string,
    value: any
  ): JPathInterface;

  setByJPath (
    obj: any,
    jpath: (string|number)[],
    value: any
  ): JPathInterface;

  setByJPathWalkFlatRebuild (
    obj: any,
    jpath: (string|number)[],
    value: any,
    nameHolderId: string,
    nameId: string,
    branchName: string
  ): JPathInterface;

}


