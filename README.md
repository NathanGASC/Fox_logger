# Fox Logger

Fox logger is a module to do log with namespaces (ex: here the API namespace log -> "[11:23:52] API : GET request on /").
You will be able to disable log for defined namespaces or change log levels for every namespaces to hide error, log, info, debug or warning. You will also
be able to format the logs.

This module support typescript (TS).

## How to use?

- Install the module first `npm i @nathangasc/fox_logger`
- Copy this script in your code to test the module.

```js
const { createLogger } = require("@nathangasc/fox_logger");
const config = {
  options: {
    format: "[{{h}}:{{m}}:{{s}}] {{namespace}} :",
    isLogged: {
      debug: true,
      log: true,
      error: true,
      warn: true,
      info: true,
    },
  },
  namespaces: {
    default: {
      isLogged: true,
    },
  },
};

const logger = createLogger(config);
logger.default.log("Hello world, here a smart fox log");
```

- Run the script, it should output a namespaces log
