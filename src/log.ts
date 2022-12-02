type LoggableNamespaces<T> = {
  [P in keyof T]: Loggable;
};

type Loggable = {
  log: (...msg: any[]) => (...msg: any[]) => void;
  error: (...msg: any[]) => (...msg: any[]) => void;
  info: (...msg: any[]) => (...msg: any[]) => void;
  debug: (...msg: any[]) => (...msg: any[]) => void;
  warn: (...msg: any[]) => (...msg: any[]) => void;
};

class _Logger<T> {
  constructor(options: Options, namespaces: Namespaces<T>) {
    var config = {
      options,
      namespaces,
    };

    this.setNamespaceProperties(config);
  }

  private setNamespaceProperties(config: Config<T>) {
    const _this = this;

    function createLogOn(obj:any, namespace:string, level: typeof logLevels[number]) {
      if (typeof window != "undefined") {
        Object.defineProperty(obj, level, {
          get: function (...msg: any[]) {
            if (config.options.isLogged.log && config.namespaces[namespace].isLogged) {
              const template = _this.template(config,namespace);
              return window.console[level].bind(window.console, template, ...msg);
            }else{
              return ()=>{}
            }
          },
        });
      }else{
        Object.defineProperty(obj, level, {
          value: function (...msg: any[]) {
            if (config.options.isLogged.log && config.namespaces[namespace].isLogged) {
              const template = _this.template(config,namespace);
              console[level](template, ...msg);
            }else{
              return ()=>{}
            }
          },
        });
      }
      return obj;
    }

    //back-end logs
    Object.keys(config.namespaces).forEach((key) => {
      config.namespaces[key] = createLogOn(config.namespaces[key], key, "debug");
      config.namespaces[key] = createLogOn(config.namespaces[key], key, "error");
      config.namespaces[key] = createLogOn(config.namespaces[key], key, "info");
      config.namespaces[key] = createLogOn(config.namespaces[key], key, "log");
      config.namespaces[key] = createLogOn(config.namespaces[key], key, "warn");

      Object.defineProperty(this, key, {
        value: config.namespaces[key],
        writable: true,
      });
    });
  }

  private template(config:Config<T>, namespace: string) {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    let template = config.options.format;
    template = template.replace("{{h}}", h.toString());
    template = template.replace("{{m}}", m.toString());
    template = template.replace("{{s}}", s.toString());
    template = template.replace("{{namespace}}", namespace);

    return template;
  }
}

type Config<T> = {
  options: Options;
  namespaces: Namespaces<T>;
};

type Options = {
  format: string;
  isLogged: LogLevel;
};

const logLevels = ["debug","log","error","warn","info"] as const
type LogLevel = {
  debug: boolean;
  log: boolean;
  error: boolean;
  warn: boolean;
  info: boolean;
};

type Namespaces<T> = NamespacesDefault & NamespacesCharged<T>;

type NamespacesDefault = {
  default: {
    isLogged: boolean;
  };
};

type NamespacesCharged<T> = {
  [P in keyof T]: {
    isLogged: boolean;
  };
};

const Logger = _Logger as unknown as {
  new <O extends Options, N extends Namespaces<any>>(
    options: O,
    namespaces: N
  ): LoggableNamespaces<N>;
};

export function createLogger<N>(config: Config<N>) {
  return new Logger(config.options, config.namespaces);
}