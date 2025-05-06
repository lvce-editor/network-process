import { VError } from '../VError/VError.js'

export const readFiles = async () => {
  // @ts-ignore
  const clipboardEx = await import('electron-clipboard-ex')
  const filePaths = clipboardEx.readFilePaths()
  console.log(filePaths)
  return {
    source: 'electron-clipboard-ex',
    type: 'copy', // TODO can't be sure on this
    files: filePaths,
  }
}

export const writeFiles = async (type, files) => {
  try {
    // @ts-ignore
    const clipboardEx = await import('electron-clipboard-ex')
    clipboardEx.writeFilePaths(files)
  } catch (error) {
    throw new VError(error, 'Failed to copy files to clipboard')
  }
}
