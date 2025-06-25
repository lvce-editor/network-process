import * as Path from '../Path/Path.ts'
import * as Root from '../Root/Root.ts'

export const getPtyHostPath = (): string => {
  return Path.join(Root.root, '@lvce-editor', 'pty-host')
}
