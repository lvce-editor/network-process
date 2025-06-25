import { VError } from '@lvce-editor/verror'
import * as Exec from '../Exec/Exec.ts'
import * as GetElectronRebuildPath from '../GetElectronRebuildPath/GetElectronRebuildPath.ts'

export const rebuild = async (cwd: string): Promise<void> => {
  try {
    const electronRebuildPath = GetElectronRebuildPath.getElectronRebuildPath()
    await Exec.exec(electronRebuildPath, [], {
      cwd,
      stdio: 'inherit',
    })
  } catch (error: any) {
    throw new VError(error, `Failed to rebuild native module`)
  }
}
