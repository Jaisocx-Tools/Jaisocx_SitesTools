export interface JPathInterface {
    parse(jpathExpression: string): (string | number)[];
    serialize(jpath: (string | number)[], delimiter: string, start: string, finish: string): string;
    getByJPathExpression(obj: any, jpathExpression: string): any;
    getByJPath(obj: any, jpath: (string | number)[]): any;
    setByJPathExpression(obj: any, jpathExpression: string, value: any): JPathInterface;
    setByJPath(obj: any, jpath: (string | number)[], value: any): JPathInterface;
    setByJPathWalkFlatRebuild(obj: any, jpath: (string | number)[], value: any, nameHolderId: string, nameId: string, branchName: string): JPathInterface;
}
//# sourceMappingURL=JPathInterface.d.ts.map