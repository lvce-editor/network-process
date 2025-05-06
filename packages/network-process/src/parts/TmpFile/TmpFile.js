export const getTmpFile = async () => {
  const { file } = await import('tmp-promise')
  const { path } = await file({
    prefix: 'lvce-extension-',
  })
  return path
}

export const getTmpDir = async () => {
  const { dir } = await import('tmp-promise')
  const { path } = await dir({
    prefix: 'lvce-extension-',
  })
  return path
}
