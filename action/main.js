import { generateReport } from 'sonar-report';
import { setFailed, debug } from '@actions/core';

import program from './program.js';

try {
  const options = program.parse().opts();
  options.onError = error => {
    throw error;
  };

  debug('parsed options:');
  debug(options);

  const data = generateReport(options);

  debug('result:');
  debug(data);

} catch (error) {
  setFailed(error.message);
  process.exit(1);
}
