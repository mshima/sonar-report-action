import { Command } from 'commander-github-actions';
import { buildCommand } from 'sonar-report';

const buildActionCommand = (command = new Command()) =>
  buildCommand(
    command
      .exitOverride() // throw instead of calling process.exit
  );

export default buildActionCommand();

export { buildActionCommand as buildCommand };
