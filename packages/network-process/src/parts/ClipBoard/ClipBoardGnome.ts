import * as Exec from '../Exec/Exec.ts'
import * as JoinLines from '../JoinLines/JoinLines.ts'
import * as SplitLines from '../SplitLines/SplitLines.ts'
import { VError } from '../VError/VError.ts'

const removePrefix = (file: string): string => {
  if (file.startsWith('file://')) {
    return file.slice('file://'.length)
  }
  return file
}

const addPrefix = (file: string): string => {
  return `file://${file}`
}

export const readFiles = async (): Promise<
  { source: string; type: string; files: string[] } | undefined
> => {
  let result: any
  try {
    result = await Exec.exec(
      'xclip',
      ['-selection', 'clipboard', '-o', '-t', 'x-special/gnome-copied-files'],
      {},
    )
  } catch (error: any) {
    if (
      error &&
      // @ts-ignore
      error.stderr ===
        'Error: target x-special/gnome-copied-files not available'
    ) {
      return
    }
    throw error
  }
  const [type, ...files] = SplitLines.splitLines(result.stdout)
  const actualFiles = files.map(removePrefix)
  return {
    source: 'gnomeCopiedFiles',
    type,
    files: actualFiles,
  }
}

export const writeFiles = async (
  type: string,
  files: string[],
): Promise<void> => {
  const filesWithPrefix = files.map(addPrefix)
  const gnomeCopiedFilesContent = JoinLines.joinLines([
    type,
    ...filesWithPrefix,
  ])
  const uriListContent = JoinLines.joinLines(filesWithPrefix)
  const plainContent = JoinLines.joinLines(files)
  try {
    await Exec.exec(
      'xclip',
      ['-i', '-selection', 'clipboard', '-t', 'x-special/gnome-copied-files'],
      {
        input: gnomeCopiedFilesContent,
      },
    )
    await Exec.exec(
      'xclip',
      ['-i', '-selection', 'clipboard', '-t', 'text/uri-list'],
      {
        input: uriListContent,
      },
    )
    await Exec.exec(
      'xclip',
      ['-i', '-selection', 'clipboard', '-t', 'text/plain'],
      {
        input: plainContent,
      },
    )
  } catch (error: any) {
    throw new VError(error, 'Failed to copy files to clipboard')
  }
}
