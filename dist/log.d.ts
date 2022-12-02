declare type LoggableNamespaces<T> = {
    [P in keyof T]: Loggable;
};
declare type Loggable = {
    log: (...msg: any[]) => (...msg: any[]) => void;
    error: (...msg: any[]) => (...msg: any[]) => void;
    info: (...msg: any[]) => (...msg: any[]) => void;
    debug: (...msg: any[]) => (...msg: any[]) => void;
    warn: (...msg: any[]) => (...msg: any[]) => void;
};
declare type Config<T> = {
    options: Options;
    namespaces: Namespaces<T>;
};
declare type Options = {
    format: string;
    isLogged: LogLevel;
};
declare type LogLevel = {
    debug: boolean;
    log: boolean;
    error: boolean;
    warn: boolean;
    info: boolean;
};
declare type Namespaces<T> = NamespacesDefault & NamespacesCharged<T>;
declare type NamespacesDefault = {
    default: {
        isLogged: boolean;
    };
};
declare type NamespacesCharged<T> = {
    [P in keyof T]: {
        isLogged: boolean;
    };
};
export declare function createLogger<N>(config: Config<N>): LoggableNamespaces<Namespaces<N>>;
export {};
//# sourceMappingURL=log.d.ts.map