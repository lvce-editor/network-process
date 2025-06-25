export const trash = async (path: string): Promise<void> => {
  const { default: _trash } = await import('trash')
  await _trash(path)
}
