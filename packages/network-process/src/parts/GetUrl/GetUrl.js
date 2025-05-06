export const getUrl = async ({ method, url }) => {
  const { default: got } = await import('got')
  const json = await got({ url, method })
  return json.url.toString()
}
