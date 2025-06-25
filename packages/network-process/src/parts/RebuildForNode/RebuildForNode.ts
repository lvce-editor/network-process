import { VError } from '@lvce-editor/verror'
import * as Exec from '../Exec/Exec.ts'

export const rebuild = async (cwd: string): Promise<void> => {
  try {
    await Exec.exec('npm', ['rebuild'], {
      cwd,
      stdio: 'inherit',
    })
  } catch (error) {
    throw new VError(error, `Failed to rebuild native module`)
  }
}
