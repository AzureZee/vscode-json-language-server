import { Connection, Disposable } from 'vscode-languageserver';
import { SortOptions } from 'vscode-json-languageservice';
export interface DocumentSortingParams {
    /**
     * The uri of the document to sort.
     */
    uri: string;
    /**
     * The sort options
     */
    options: SortOptions;
}
export interface RequestService {
    getContent(uri: string): Promise<string>;
}
export interface RuntimeEnvironment {
    file?: RequestService;
    http?: RequestService;
    configureHttpRequests?(proxy: string | undefined, strictSSL: boolean): void;
    readonly timer: {
        setImmediate(callback: (...args: any[]) => void, ...args: any[]): Disposable;
        setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): Disposable;
    };
}
export declare function startServer(connection: Connection, runtime: RuntimeEnvironment): void;
