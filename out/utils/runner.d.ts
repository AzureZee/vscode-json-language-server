import { CancellationToken, ResponseError } from 'vscode-languageserver';
import { RuntimeEnvironment } from '../jsonServer.js';
export declare function formatError(message: string, err: any): string;
export declare function runSafeAsync<T>(runtime: RuntimeEnvironment, func: () => Thenable<T>, errorVal: T, errorMessage: string, token: CancellationToken): Thenable<T | ResponseError<any>>;
export declare function runSafe<T, E>(runtime: RuntimeEnvironment, func: () => T, errorVal: T, errorMessage: string, token: CancellationToken): Thenable<T | ResponseError<E>>;
