class Split_Test {

  testAssertions = new Array();

  constructor() {
    this.testAssertions = [
      {
       "jpath_expression": "[data].records[0][field other][1]",
       "equals": "qwe"
      },
      {
       "jpath_expression": "data.records[0].id",
       "equals": 1
      }
    ];
  }

  test() {
     let jpathExpression = this.testAssertions[ 0 ][ "jpath_expression" ];
     let splitted = jpathExpression.split( "[" );

     console.log( JSON.stringify( splitted, null, 2 ) );
  }

}


let splitTestCls = new Split_Test();
splitTestCls.test();


