import * as ClipBoard from '../ClipBoard/ClipBoard.ts'
import * as Download from '../Download/Download.ts'
import * as DownloadAndExtract from '../DownloadAndExtract/DownloadAndExtract.ts'
import * as Extract from '../Extract/Extract.ts'
import * as GetUrl from '../GetUrl/GetUrl.ts'
import * as HandleElectronMessagePort from '../HandleElectronMessagePort/HandleElectronMessagePort.ts'
import * as OpenNativeFolder from '../OpenNativeFolder/OpenNativeFolder.ts'
import * as RebuildNodePty from '../RebuildNodePty/RebuildNodePty.ts'
import * as SymLink from '../SymLink/SymLink.ts'
import * as TmpFile from '../TmpFile/TmpFile.ts'
import * as TrashNode from '../TrashNode/TrashNode.ts'

export const commandMap: Record<string, (...args: any[]) => any> = {
  'ClipBoard.readFiles': ClipBoard.readFiles,
  'ClipBoard.writeFiles': ClipBoard.writeFiles,
  'Download.download': Download.download,
  'Download.downloadAndExtractTarGz':
    DownloadAndExtract.downloadAndExtractTarGz,
  'Download.getUrl': GetUrl.getUrl,
  'Extract.extractTarBr': Extract.extractTarBr,
  'Extract.extractTarGz': Extract.extractTarGz,
  'OpenNativeFolder.openNativeFolder': OpenNativeFolder.openFolder,
  'RebuildNodePty.rebuildNodePty': RebuildNodePty.rebuildNodePty,
  'Symlink.createSymLink': SymLink.createSymLink,
  'TmpFile.getTmpDir': TmpFile.getTmpDir,
  'TmpFile.getTmpFile': TmpFile.getTmpFile,
  'TrashNode.trash': TrashNode.trash,
  'HandleElectronMessagePort.handleElectronMessagePort':
    HandleElectronMessagePort.handleElectronMessagePort,
}
