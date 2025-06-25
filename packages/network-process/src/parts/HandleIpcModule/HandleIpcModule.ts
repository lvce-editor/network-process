import * as Assert from '../Assert/Assert.ts'
import * as HandleIpcSharedProcess from '../HandleIpcSharedProcess/HandleIpcSharedProcess.ts'
import * as IpcId from '../IpcId/IpcId.ts'

export const getModule = (ipcId) => {
  Assert.number(ipcId)
  switch (ipcId) {
    case IpcId.SharedProcess:
      return HandleIpcSharedProcess
    default:
      throw new Error(`unexpected incoming ipc`)
  }
}
