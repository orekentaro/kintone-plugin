/* eslint-disable no-undef */
"use strict";
import runAll from "npm-run-all";

runAll(["build:vite", "build:plugin", "upload"], {
  parallel: true,
  stdout: process.stdout,
  stdin: process.stdin,
}).catch(({ results }) => {
  results
    .filter(({ code }) => code)
    .forEach(({ name }) => {
      console.log(`"npm run ${name}" was failed`);
    });
});
