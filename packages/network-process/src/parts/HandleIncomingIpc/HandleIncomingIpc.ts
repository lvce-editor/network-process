import * as ApplyIncomingIpcResponse from '../ApplyIncomingIpcResponse/ApplyIncomingIpcResponse.ts'
import * as Assert from '../Assert/Assert.ts'
import * as HandleIncomingIpcMessagePort from '../HandleIncomingIpcMessagePort/HandleIncomingIpcMessagePort.ts'
import * as HandleIpcModule from '../HandleIpcModule/HandleIpcModule.ts'

const getIpcAndResponse = (module, handle, message) => {
  return HandleIncomingIpcMessagePort.handleIncomingIpcMessagePort(
    module,
    handle,
    message,
  )
}

export const handleIncomingIpc = async (ipcId, handle, message) => {
  Assert.number(ipcId)
  const module = HandleIpcModule.getModule(ipcId)
  const { target, response } = await getIpcAndResponse(module, handle, message)
  await ApplyIncomingIpcResponse.applyIncomingIpcResponse(
    target,
    response,
    ipcId,
  )
}
