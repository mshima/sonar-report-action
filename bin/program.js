#!/usr/bin/env node
import { createCommand, createOption } from 'commander-github-actions';
import { buildCommand } from 'sonar-report';

const program = buildCommand({ createCommand, createOption }).parse();
console.log(program.opts());
