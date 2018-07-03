declare class JsonRPC {
    public toStream: (message: string) => void;

    constructor();

    public notification(methodName: string, params: Object): void;
    public call(methodName: string, params: Object): Promise<any>;
    public batch(calls: Array<Object>): Promise<Array<any>>;
    public on(methodName: string,
              paramsName: Array<string>,
              handler: Function): void;
    public on(methodName: string, handler: Function): void;
    public off(methodName: string): void;
    public customException(code: number, message: string, data: any): void;
    public messageHandler(rawMessage: string): Promise<any>;
}

export default JsonRPC;
