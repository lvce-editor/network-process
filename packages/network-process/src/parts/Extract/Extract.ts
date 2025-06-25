import { createReadStream } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import { pipeline } from 'node:stream/promises'
import { createBrotliDecompress, createGunzip } from 'node:zlib'
import { VError } from '../VError/VError.ts'

export const extractTarBr = async (
  inFile: string,
  outDir: string,
): Promise<void> => {
  try {
    const { default: tar } = await import('tar-fs')
    await mkdir(outDir, { recursive: true })
    await pipeline(
      createReadStream(inFile),
      createBrotliDecompress(),
      tar.extract(outDir),
    )
  } catch (error: any) {
    throw new VError(error, `Failed to extract ${inFile}`)
  }
}

interface ExtractTarGzOptions {
  inFile: string
  outDir: string
  strip: number
}

export const extractTarGz = async ({
  inFile,
  outDir,
  strip,
}: ExtractTarGzOptions): Promise<void> => {
  try {
    const { default: tar } = await import('tar-fs')
    await mkdir(outDir, { recursive: true })
    await pipeline(
      createReadStream(inFile),
      createGunzip(),
      tar.extract(outDir, {
        strip,
      }),
    )
  } catch (error: any) {
    throw new VError(error, `Failed to extract ${inFile}`)
  }
}
