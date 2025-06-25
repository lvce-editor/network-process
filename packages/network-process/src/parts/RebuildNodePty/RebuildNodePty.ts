import * as GetPtyHostPath from '../GetPtyHostPath/GetPtyHostPath.ts'
import * as IsElectron from '../IsElectron/IsElectron.ts'
import { VError } from '../VError/VError.ts'

const getModule = async (): Promise<any> => {
  if (IsElectron.isElectron()) {
    return import('../RebuildForElectron/RebuildForElectron.ts')
  }
  return import('../RebuildForNode/RebuildForNode.ts')
}

export const rebuildNodePty = async (): Promise<void> => {
  try {
    const ptyHostPath = GetPtyHostPath.getPtyHostPath()
    const module = await getModule()
    await module.rebuild(ptyHostPath)
  } catch (error: any) {
    throw new VError(error, `Failed to rebuild node-pty`)
  }
}
