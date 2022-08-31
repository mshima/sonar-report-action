#!/usr/bin/env node
import { writeFile } from 'fs/promises';

import { generateActionsYml } from 'commander-github-actions/dev';
import program from '../action/program.js';

await writeFile('action.yml', (await generateActionsYml(program, { runs: { main: 'action/main.js' } })));
