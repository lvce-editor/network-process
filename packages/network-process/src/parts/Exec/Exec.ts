import type { Options } from 'execa'
import * as Assert from '../Assert/Assert.ts'

export interface ExecResult {
  stderr: string
  stdout: string
}

export const exec = async (
  command: string,
  args: string[],
  options: Options,
): Promise<ExecResult> => {
  Assert.string(command)
  Assert.array(args)
  Assert.object(options)
  const { execa } = await import('execa')
  const { stderr, stdout } = await execa(command, args, options)
  return {
    stderr: String(stderr),
    stdout: String(stdout),
  }
}
