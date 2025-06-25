import * as Assert from '../Assert/Assert.ts'
import * as HandleIncomingIpc from '../HandleIncomingIpc/HandleIncomingIpc.ts'
import * as IpcId from '../IpcId/IpcId.ts'

export const handleElectronMessagePort = async (messagePort, ipcId) => {
  Assert.object(messagePort)
  // TODO use ipcId parameter
  return HandleIncomingIpc.handleIncomingIpc(
    IpcId.SharedProcess,
    messagePort,
    {},
  )
}
