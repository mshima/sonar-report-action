#!/usr/bin/env node
import { writeFile } from 'fs/promises';

import { generateActionsYml } from 'commander-github-actions/dev';
import { buildCommand } from 'sonar-report';

await writeFile('action.yml', (await generateActionsYml(buildCommand())));
