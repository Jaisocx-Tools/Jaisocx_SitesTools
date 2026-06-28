import { JPathDataInterface } from "./JPathDataInterface.js";
export declare class JPathData implements JPathDataInterface {
    protected _jpath: (string | number)[];
    protected _jpathExpression: string;
    protected _isPlaceholderValue: number;
    constructor();
    isPlaceholderValue(): number;
    setIsPlaceholderValue(isPlaceholder: number): JPathDataInterface;
    getJPath(): (string | number)[];
    setJPath(jpath: (string | number)[]): JPathDataInterface;
    getJPathExpression(): string;
    setJPathExpression(jpathExpression: string): JPathDataInterface;
}
//# sourceMappingURL=JPathData.d.ts.map