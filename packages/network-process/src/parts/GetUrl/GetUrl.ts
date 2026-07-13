interface GetUrlOptions {
  method: string
  url: string
}

export const getUrl = async ({
  method,
  url,
}: GetUrlOptions): Promise<string> => {
  const { default: got } = await import('got')
  const json = await got({ method: method as any, url })
  return json.url
}
