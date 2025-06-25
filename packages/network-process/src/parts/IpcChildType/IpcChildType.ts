export const NodeWorker: number = 1
export const NodeForkedProcess: number = 2
export const ElectronUtilityProcess: number = 3
export const ElectronMessagePort: number = 4
export const NodeMessagePort: number = 5
export const WebSocket: number = 6

export const Auto = (): number => {
  const { argv } = process
  if (argv.includes('--ipc-type=node-worker')) {
    return NodeWorker
  }
  if (argv.includes('--ipc-type=node-forked-process')) {
    return NodeForkedProcess
  }
  if (argv.includes('--ipc-type=electron-utility-process')) {
    return ElectronUtilityProcess
  }
  throw new Error(`[shared-process] unknown ipc type`)
}
