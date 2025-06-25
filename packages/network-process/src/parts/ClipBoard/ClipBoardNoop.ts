import * as Desktop from '../Desktop/Desktop.ts'

export const readFiles = async (): Promise<{
  source: string
  type: string
  files: any[]
}> => {
  return {
    source: 'notSupported',
    type: 'none',
    files: [],
  }
}

export const writeFiles = (type: string, files: any[]): void => {
  const desktop = Desktop.getDesktop()
  console.info(`writing files to clipboard is not yet supported on ${desktop}`)
}
