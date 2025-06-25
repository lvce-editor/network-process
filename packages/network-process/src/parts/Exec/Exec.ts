import type { Options } from 'execa'
import * as Assert from '../Assert/Assert.ts'

export interface ExecResult {
  stdout: string
  stderr: string
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
  const { stdout, stderr } = await execa(command, args, options)
  return {
    stdout: String(stdout),
    stderr: String(stderr),
  }
}
