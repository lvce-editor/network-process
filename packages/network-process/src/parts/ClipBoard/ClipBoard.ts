import * as Desktop from '../Desktop/Desktop.ts'
import * as DesktopType from '../DesktopType/DesktopType.ts'

const getClipboard = async (): Promise<any> => {
  const desktop = Desktop.getDesktop()
  switch (desktop) {
    case DesktopType.Gnome:
      return import('./ClipBoardGnome.ts')
    case DesktopType.Windows:
      return import('./ClipBoardWindows.ts')
    default:
      return import('./ClipBoardNoop.ts')
  }
}

export const readFiles = async (): Promise<any> => {
  const clipboard = await getClipboard()
  return clipboard.readFiles()
}

export const writeFiles = async (type: string, files: any): Promise<void> => {
  const clipboard = await getClipboard()
  await clipboard.writeFiles(type, files)
}
