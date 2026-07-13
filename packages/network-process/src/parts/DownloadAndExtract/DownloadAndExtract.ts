import { pipeline } from 'node:stream/promises'
import { createGunzip } from 'node:zlib'
import { VError } from '../VError/VError.ts'

interface DownloadAndExtractOptions {
  outDir: string
  strip: number
  url: string
}

export const downloadAndExtractTarGz = async ({
  outDir,
  strip,
  url,
}: DownloadAndExtractOptions): Promise<void> => {
  const { got, RequestError } = await import('got')
  const { default: tar } = await import('tar-fs')
  try {
    await pipeline(
      got.stream(url),
      createGunzip(),
      tar.extract(outDir, {
        strip,
      }),
    )
  } catch (error: any) {
    if (error && error instanceof RequestError) {
      throw new VError(`Failed to download ${url}: ${error.message}`)
    }
    throw error
  }
}
