export interface ResponsiveSizesInterface {
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
//# sourceMappingURL=ResponsiveSizesInterface.d.ts.map