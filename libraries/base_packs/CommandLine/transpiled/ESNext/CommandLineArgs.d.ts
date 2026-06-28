import { CommandLineArgsInterface } from "./CommandLineArgsInterface.js";
export declare class CommandLineArgs implements CommandLineArgsInterface {
    protected _commandLineArgs_source: string[];
    protected _commandLineArgs: object;
    constructor();
    getCommandLineArgs(): object;
    getAfterReadNTransformed(): object;
    readCommandLineArgs(): CommandLineArgsInterface;
    transformCommandLineArgs(): CommandLineArgsInterface;
}
//# sourceMappingURL=CommandLineArgs.d.ts.map