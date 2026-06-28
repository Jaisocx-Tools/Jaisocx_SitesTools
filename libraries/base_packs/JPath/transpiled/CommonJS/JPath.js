"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JPath = void 0;
class JPath {
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
    parse(jpathExpression) {
        const jpathArray = [];
        const jpathExpressionSubstrings_ByLeftEnbraces = jpathExpression.split("[");
        let jpathKeyString = "";
        let jpathKeyNumeric = 0;
        let counter_left_enbraces = 1;
        let jpathExpressionArray_ByLeftEnbracesLen = jpathExpressionSubstrings_ByLeftEnbraces.length;
        let maxNumber_left_enbraces = (jpathExpressionArray_ByLeftEnbracesLen + 2);
        let id_left_enbraces = 0;
        let splittedBy_left_enbraces_substr = "";
        let firstLeftBracePos = jpathExpression.indexOf("[");
        //@ts-ignore
        let jpathItemsAdded = 0;
        whl_left_enbraces: while (counter_left_enbraces <= maxNumber_left_enbraces) {
            counter_left_enbraces++;
            if (counter_left_enbraces >= maxNumber_left_enbraces) {
                break whl_left_enbraces;
            }
            id_left_enbraces = (counter_left_enbraces - 2);
            splittedBy_left_enbraces_substr = jpathExpressionSubstrings_ByLeftEnbraces[id_left_enbraces];
            if (splittedBy_left_enbraces_substr.length === 0) {
                continue whl_left_enbraces;
            }
            if ((counter_left_enbraces === 2) && (firstLeftBracePos !== 0)) {
                jpathItemsAdded = this.parseDotted(splittedBy_left_enbraces_substr, jpathArray);
                continue whl_left_enbraces;
            }
            const jpathExpressionSubstrings_ByRightEnbraces = splittedBy_left_enbraces_substr.split("]");
            let jpathExpressionArray_ByRightEnbracesLen = jpathExpressionSubstrings_ByRightEnbraces.length;
            if (jpathExpressionArray_ByRightEnbracesLen === 0) {
                continue whl_left_enbraces;
            }
            jpathKeyString = jpathExpressionSubstrings_ByRightEnbraces[0];
            jpathKeyNumeric = +jpathKeyString;
            if (jpathExpressionArray_ByRightEnbracesLen === 1) {
                if (Number.isInteger(jpathKeyNumeric) === true) {
                    jpathArray.push(jpathKeyNumeric);
                }
                else {
                    jpathArray.push(jpathKeyString);
                }
                continue whl_left_enbraces;
            }
            else if (jpathExpressionArray_ByRightEnbracesLen === 2) {
                if (Number.isInteger(jpathKeyNumeric) === true) {
                    jpathArray.push(jpathKeyNumeric);
                }
                else {
                    jpathArray.push(jpathKeyString);
                }
                if (jpathExpressionSubstrings_ByRightEnbraces[1] === ".") {
                    continue whl_left_enbraces;
                }
            }
            else if ((jpathExpressionArray_ByRightEnbracesLen === 3)) {
                console.error("JPath Expression square braces wrong.");
                continue whl_left_enbraces;
            }
            let substr_ByRightEnbraces = jpathExpressionSubstrings_ByRightEnbraces[1];
            jpathItemsAdded = this.parseDotted(substr_ByRightEnbraces, jpathArray);
            continue whl_left_enbraces;
        }
        return jpathArray;
    }
    // @method protected parseDotted( ... @args ): number
    // @inokedBy method: public parse ( jpathExpression: string ): (string|number)[]
    // splitted with symbol point, adds to jpathArray, numeric array elem id or textual field name.
    parseDotted(jpathExpressionDotted, jpathArray) {
        let addedNumber = 0;
        let jpathExpressionSubstrings = jpathExpressionDotted.split(".");
        let splittedBy_dot_substr = "";
        let jpathKeyString = "";
        let jpathKeyNumeric = 0;
        let counter_dotted = 1;
        let jpathExpressionArray_dottedLen = jpathExpressionSubstrings.length;
        let maxNumber_dotted = (jpathExpressionArray_dottedLen + 2);
        let id_dotted = 0;
        whl_dotted: while (counter_dotted <= maxNumber_dotted) {
            counter_dotted++;
            if (counter_dotted >= maxNumber_dotted) {
                break whl_dotted;
            }
            id_dotted = (counter_dotted - 2);
            splittedBy_dot_substr = jpathExpressionSubstrings[id_dotted];
            if (splittedBy_dot_substr.length === 0) {
                continue whl_dotted;
            }
            jpathKeyString = splittedBy_dot_substr;
            jpathKeyNumeric = +jpathKeyString;
            if (Number.isInteger(jpathKeyNumeric) === true) {
                jpathArray.push(jpathKeyNumeric);
            }
            else {
                jpathArray.push(jpathKeyString);
            }
            continue whl_dotted;
        }
        return addedNumber;
    }
    serialize(jpath, concatenator, start, finish) {
        // @retVal
        let jpathExpression = "";
        let jpathJoined = jpath.join(concatenator);
        let locJpath = new Array();
        let startNotZerolen = ((start !== undefined) && (start !== null) && (start.length > 0));
        let finishNotZerolen = ((finish !== undefined) && (finish !== null) && (finish.length > 0));
        if ((startNotZerolen === false) && (finishNotZerolen === false)) {
            // @retVal
            jpathExpression = jpathJoined;
        }
        else if (startNotZerolen === true) {
            locJpath = [start, jpathJoined];
        }
        if (finishNotZerolen === true) {
            locJpath.push(finish);
        }
        if (locJpath.length > 0) {
            // @retVal
            jpathExpression = locJpath.join("");
        }
        return jpathExpression;
    }
    getByJPathExpression(obj, jpathExpression) {
        const jpath = this.parse(jpathExpression);
        return this.getByJPath(obj, jpath);
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
    getByJPath(obj, jpath) {
        if ((obj === undefined) || (obj === null)) {
            return null;
        }
        if (!jpath || jpath.length === 0) {
            return obj;
        }
        let targetValue = obj;
        let jpathValueFound = {};
        let jpathPropertyKey = "";
        let jpathPropLevel = 0;
        let jpathLevelMax = Math.min(jpath.length, JPath.JPATH_EXPRESSION_MAX_SIZE);
        for (jpathPropLevel = 0; jpathPropLevel < jpathLevelMax; jpathPropLevel++) {
            if (!targetValue) {
                break;
            }
            jpathPropertyKey = jpath[jpathPropLevel];
            jpathValueFound = targetValue[jpathPropertyKey];
            if (typeof jpathValueFound === "object") {
                if (Array.isArray(jpathValueFound) === true) {
                    targetValue = [...jpathValueFound];
                }
                else {
                    targetValue = Object.assign({}, jpathValueFound);
                }
            }
            else {
                targetValue = jpathValueFound;
            }
        }
        return targetValue;
    }
    setByJPathExpression(obj, jpathExpression, value) {
        const jpath = this.parse(jpathExpression);
        this.setByJPath(obj, jpath, value);
        return this;
    }
    setByJPath(obj, jpath, value) {
        let locObj = obj;
        const jpathLen = jpath.length;
        let jpathLastIx = (jpathLen - 1);
        let datatypeJsonKey = "";
        let id = 0;
        let nextId = 0;
        let key = "";
        let lastKey = jpath[jpathLastIx];
        // let prevKey: any = "";
        let nextKey = "";
        // @loop_counter
        let counter = 1;
        let maxCounter = (jpathLen + 2);
        whl_jpath: while (counter < maxCounter) {
            // @inc_loop_counter
            counter++;
            // @loop_counter
            if (counter >= maxCounter) {
                break whl_jpath;
            }
            id = (counter - 2);
            nextId = (id + 1);
            // prevKey = key;
            key = jpath[id];
            if (nextId >= jpathLen) {
                nextKey = "";
            }
            else {
                nextKey = jpath[nextId];
            }
            if (id === jpathLastIx) {
                locObj[lastKey] = value;
                break whl_jpath;
            }
            if (!locObj[key]) {
                datatypeJsonKey = typeof (nextKey);
                if (datatypeJsonKey === "number") {
                    locObj[key] = new Array();
                }
                else {
                    locObj[key] = new Object();
                }
            }
            locObj = locObj[key];
            continue whl_jpath;
        }
        return this;
    }
    setByJPathWalkFlatRebuild(obj, jpath, value, nameHolderId, nameId, branchName) {
        const jpathLen = jpath.length;
        let jpathIx;
        let jpathLastIx = jpathLen - 1;
        let id = null;
        let holderId = jpath[0];
        let foundNode = null;
        let newItem = null;
        id = jpath[0];
        obj[nameId] = id;
        for (jpathIx = 1; jpathIx < jpathLen; jpathIx++) {
            id = jpath[jpathIx];
            foundNode = false;
            let toGetById = [];
            if (Array.isArray(obj)) {
                toGetById = obj;
            }
            else if (obj[branchName]) {
                toGetById = obj[branchName];
            }
            else if (!obj[branchName]) {
                obj[branchName] = new Array();
                toGetById = obj[branchName];
            }
            foundNode = toGetById.find((node) => {
                const matches = (node[nameId] === id);
                return matches;
            });
            if (!foundNode) {
                if (jpathIx === jpathLastIx) {
                    newItem = Object.assign(Object.assign({}, value), { [nameId]: id, [nameHolderId]: holderId });
                }
                else {
                    newItem = {
                        [nameId]: id,
                        [nameHolderId]: holderId
                    };
                }
                toGetById.push(newItem);
                obj[nameId] = holderId;
                const lastIx = (toGetById.length - 1);
                foundNode = toGetById[lastIx];
            }
            obj = foundNode;
            holderId = id;
        }
        return this;
    }
}
exports.JPath = JPath;
JPath.JPATH_EXPRESSION_MAX_SIZE = 8;
//# sourceMappingURL=JPath.js.map