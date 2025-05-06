export const createSymLink = async (target, path) => {
  const { default: symlinkDir } = await import('symlink-dir')
  await symlinkDir(target, path)
}
