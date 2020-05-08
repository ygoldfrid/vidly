import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn:
      "https://ee6a252fc747429e982f1827ce73a2ad@o382445.ingest.sentry.io/5225963",
  });
}

function log(error) {
  Sentry.captureException(error);
  console.log(error);
}

export default {
  init,
  log,
};
