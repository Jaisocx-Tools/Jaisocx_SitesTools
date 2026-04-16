export interface JPathDataInterface {

  isPlaceholderValue(): number;

  setIsPlaceholderValue( isPlaceholder: number ): JPathDataInterface;

  getJPath(): (string|number)[];

  setJPath( jpath: (string|number)[] ): JPathDataInterface;

  getJPathExpression(): string;

  setJPathExpression( jpathExpression: string ): JPathDataInterface;

}


