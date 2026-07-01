import { JPathData } from "../transpiled/ESNext/JPathData.js";
import { JPath } from "../transpiled/ESNext/JPath.js";



class JPath_Test {

  json = new Object();
  testAssertions = new Array();

  jPathData = new Object();
  jPathEngine = new Object();

  #testsResults = new Object();



  constructor() {

    this.jPathData = new JPathData();
    this.jPathEngine = new JPath();

    this.#testsResults = {
      "ok": 0,
      "no": 0,
      "sum": 0
    };


    this.testAssertions = [
      {
        "jpath_expression": "data.records[0].id",
        "equals": 1
      },
      {
        "jpath_expression": "[data].[records]1.id",
        "equals": 2
      },
      {
        "jpath_expression": "data.records.1.field2",
        "equals": "text line of field 2.2"
      },
      {
        "jpath_expression": "[data][records][0][Json Feld für Buchstaben][German field num. 1][0]",
        "equals": "Hello World!"
      },
      {
        "jpath_expression": "[data][records][1][Json Feld für Buchstaben][German field num. 1][1]",
        "equals": "Hallo, Welt"
      },
      {
        "jpath_expression": "[data].[records].[1].[Json Feld für Buchstaben].[German field num. 1].[1]",
        "equals": "Hallo, Welt"
      },
      {
        "jpath_expression": "[data].records[0].field3[Num. 1][0]",
        "equals": "A"
      },
      {
        "jpath_expression": "data.records[0].field3.[Num. 1].1",
        "equals": "B"
      }
    ];



    this.testAssertionsAfter = [
      {
        "jpath_expression": "[data][records][0][Json Feld für Buchstaben][German field num. 1][0]",
        "equals": "Other value set"
      },
      {
        "jpath_expression": "[data][records][2][New Field][field num. 1][0]",
        "equals": "Value set to new array of objects field"
      },
    ];



    this.json = {
       data: {
         records: [
           {
             id: 1,
             field1: "text line of field 1.1",
             field2: "text line of field 1.2",
             field3: {
               "Num. 1": [
                 "A",
                 "B"
               ]
             },
             "Json Feld für Buchstaben": {
               "German field num. 1": [
                 "Hello World!",
                 "Hello, World"
               ]
             }
           },
           {
             id: 2,
             field1: "text line of field 2.1",
             field2: "text line of field 2.2",
             "Json Feld für Buchstaben": {
                "German field num. 1": [
                  "Hallo Welt!",
                  "Hallo, Welt"
                ]
             }
           },
         ]
       }
     };
  }



  test( json, assertsEquals ) {

    let assertion = new Object();
    let jpathExpression = "";
    let equals = "";
    let jpathArray = new Array();
    let found = "";

    let testNum = 0;



    let counter = 1;
    let id = 1;
    let elemsNumber = assertsEquals.length;
    let maxNumber = ( elemsNumber + 2 );

    ci_level_a: while ( counter <= maxNumber ) {
      counter++;
      if ( counter >= maxNumber ) {
        break ci_level_a;
      }

      id = ( counter - 2 );
      assertion = assertsEquals[ id ];
      jpathExpression = assertion[ "jpath_expression" ];
      equals = assertion[ "equals" ];

      jpathArray = this.jPathEngine.parse ( jpathExpression );
      found = this.jPathEngine.getByJPath ( json, jpathArray );

      console.info( "\n\n" );

      if ( found !== equals ) {
        testNum = this.#testsResults[ "no" ];
        this.#testsResults[ "no" ] = ( testNum + 1 );

        console.error ( "⛔ NOT EQUAL", { jpathExpression, equals, found, jpathArray }, JSON.stringify( json, null, 2 ) );

      } else {
        testNum = this.#testsResults[ "ok" ];
        this.#testsResults[ "ok" ] = ( testNum + 1 );

        console.info ( "✅ Equals", { jpathExpression, equals, found, jpathArray } );
      }

      testNum = this.#testsResults[ "sum" ];
      this.#testsResults[ "sum" ] = ( testNum + 1 );


      continue ci_level_a;
    }

  }



  printTestsResults() {

    let symbolOK = "✅";
    let symbolNO = "⛔";

    if ( this.#testsResults[ "ok" ] === this.#testsResults[ "sum" ] ) {
      symbolNO = "❎";
    }


    let percentageOK = 0;
    let percentageNO = 0;

    if ( this.#testsResults[ "sum" ] !== 0 ) {

      if ( this.#testsResults[ "ok" ] !== 0 ) {
        percentageOK = Math.round( ( ( this.#testsResults[ "ok" ] / this.#testsResults[ "sum" ] ) * 100 ), 1 );
      }

      if ( this.#testsResults[ "ok" ] !== 0 ) {
        percentageNO = Math.round( ( ( this.#testsResults[ "no" ] / this.#testsResults[ "sum" ] ) * 100 ), 1 );
      }

    }

    let testsResult = [
      "TESTS",
      "\n",
      "   ", symbolOK, " ok:  ", this.#testsResults[ "ok" ], " of sum ", this.#testsResults[ "sum" ], ", or ", percentageOK, "%",
      "\n",
      "   ", symbolNO, " no:  ", this.#testsResults[ "no" ], " of sum ", this.#testsResults[ "sum" ], ", or ", percentageNO, "%",
      "\n",
      "   💶 sum: ", this.#testsResults[ "sum" ], " 100%",
      "\n",
      "\n",
    ].join( '' );

    console.info( "\n\n" );

    console.info ( testsResult );
  }

}



let testingCls = new JPath_Test();

testingCls.test (
  testingCls.json,
  testingCls.testAssertions
);



testingCls.jPathEngine.setByJPathExpression (
  testingCls.json,
  testingCls.testAssertionsAfter[0][ "jpath_expression" ],
  testingCls.testAssertionsAfter[0][ "equals" ]
);

testingCls.jPathEngine.setByJPathExpression (
  testingCls.json,
  testingCls.testAssertionsAfter[1][ "jpath_expression" ],
  testingCls.testAssertionsAfter[1][ "equals" ]
);

testingCls.test (
  testingCls.json,
  testingCls.testAssertionsAfter
);

console.log( JSON.stringify( testingCls.json, null, 2 ) );

testingCls.printTestsResults();


