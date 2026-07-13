import * as HandleIpc from '../HandleIpc/HandleIpc.ts'

interface IpcResponse {
  [key: string]: unknown
  type: string
}

export const applyIncomingIpcResponse = async (
  target: unknown,
  response: IpcResponse,
  ipcId: unknown,
): Promise<void> => {
  switch (response.type) {
    case 'handle':
      HandleIpc.handleIpc(target)
      break
    default:
      throw new Error('unexpected response')
  }
}
