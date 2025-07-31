

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b6a1a7b23bc8df180c1b9678ac3c9143@o4507910838943744.ingest.de.sentry.io/4507910881804368",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
