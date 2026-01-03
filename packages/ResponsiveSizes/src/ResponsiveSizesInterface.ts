export interface ResponsiveSizesInterface {

  getResponsiveSizeConstantName (): string;
  setResponsiveSizeConstantName ( name: string ): ResponsiveSizesInterface;

  getResponsiveSizeSelector (): string;
  setResponsiveSizeSelector ( selector: string ): ResponsiveSizesInterface;

  getCssValueByHtmlNode (
    htmlNode: HTMLElement,
    cssVariableName: string
  ): string;

  getCssValueBySelector (
    htmlNodeSelector: string,
    cssVariableName: string
  ): string;

  getResponsiveSizeName ( toUpdate: boolean ): string;

  getCssVariableArray ( toUpdate: boolean ): string[];

  getResponsiveSizes ( toUpdate: boolean ): object;

  mobilePortrait ( toUpdate: boolean ): boolean;

  mobile ( toUpdate: boolean ): boolean;

  tablet ( toUpdate: boolean ): boolean;

  desktop ( toUpdate: boolean ): boolean;

  matchOrientation (
    keywords: string[],
    toUpdate: boolean
  ): boolean;

  orientationPortrait ( toUpdate: boolean ): boolean;

  orientationLandscape ( toUpdate: boolean ): boolean;

  getInfoShort ( asArray: boolean, toUpdate: boolean ): any;
  getInfoLong ( toUpdate: boolean ): any;


  // first json method, ver. elder than 1.3.2
  toJson ( toUpdate: boolean ): any;


  // newer method, ver. 1.3.3
  json (
      asShortInfo: boolean,
      shortInfoAsArray: boolean,
      toUpdate: boolean
    ): any;

  toString ( toUpdate: boolean ): string;

}



