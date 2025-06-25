import { VError } from '../VError/VError.ts'

export const readFiles = async (): Promise<{
  source: string
  type: string
  files: string[]
}> => {
  // @ts-ignore
  const clipboardEx = await import('electron-clipboard-ex')
  const filePaths: string[] = clipboardEx.readFilePaths()
  console.log(filePaths)
  return {
    source: 'electron-clipboard-ex',
    type: 'copy', // TODO can't be sure on this
    files: filePaths,
  }
}

export const writeFiles = async (
  type: string,
  files: string[],
): Promise<void> => {
  try {
    // @ts-ignore
    const clipboardEx = await import('electron-clipboard-ex')
    clipboardEx.writeFilePaths(files)
  } catch (error: any) {
    throw new VError(error, 'Failed to copy files to clipboard')
  }
}
