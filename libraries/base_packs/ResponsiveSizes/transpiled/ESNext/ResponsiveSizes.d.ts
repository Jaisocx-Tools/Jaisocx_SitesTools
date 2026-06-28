import { ResponsiveSizesConstants } from "./ResponsiveSizesConstants.js";
import { ResponsiveSizesInterface } from "./ResponsiveSizesInterface.js";
export declare class ResponsiveSizes implements ResponsiveSizesInterface {
    #private;
    protected _responsiveSizesConstants: ResponsiveSizesConstants;
    protected _responsiveSizeConstantName: string;
    protected _responsiveSizeSelector: string;
    protected _responsiveSizeName: string;
    protected _responsive_sizes: object;
    protected _responsiveSizesJson: object;
    protected _cssVariableArray: string[];
    constructor();
    getResponsiveSizeConstantName(): string;
    setResponsiveSizeConstantName(name: string): ResponsiveSizesInterface;
    getResponsiveSizeSelector(): string;
    setResponsiveSizeSelector(selector: string): ResponsiveSizesInterface;
    getCssValueByHtmlNode(htmlNode: HTMLElement, cssVariableName: string): string;
    getCssValueBySelector(htmlNodeSelector: string, cssVariableName: string): string;
    getResponsiveSizeName(toUpdate: boolean): string;
    getCssVariableArray(toUpdate: boolean): string[];
    getResponsiveSizes(toUpdate: boolean): object;
    mobilePortrait(toUpdate: boolean): boolean;
    mobile(toUpdate: boolean): boolean;
    tablet(toUpdate: boolean): boolean;
    desktop(toUpdate: boolean): boolean;
    matchOrientation(keywords: string[], toUpdate: boolean): boolean;
    orientationPortrait(toUpdate: boolean): boolean;
    orientationLandscape(toUpdate: boolean): boolean;
    getInfoShort(asArray: boolean, toUpdate: boolean): any;
    getInfoLong(toUpdate: boolean): any;
    toJson(toUpdate: boolean): any;
    json(asShortInfo: boolean, shortInfoAsArray: boolean, toUpdate: boolean): any;
    toString(toUpdate: boolean): string;
}
//# sourceMappingURL=ResponsiveSizes.d.ts.map