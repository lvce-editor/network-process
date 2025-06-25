export const createSymLink = async (
  target: string,
  path: string,
): Promise<void> => {
  const { default: symlinkDir } = await import('symlink-dir')
  await symlinkDir(target, path)
}
