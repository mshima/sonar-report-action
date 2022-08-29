import * as commander from 'commander-github-actions';
import { buildCommand, generateReport } from 'sonar-report';
import { setFailed } from '@actions/core';

try {
  const options = buildCommand(commander).parse();
  generateReport(options);
} catch (error) {
  setFailed(error.message);
}
