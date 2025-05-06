import { createReadStream } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import { pipeline } from 'node:stream/promises'
import { createBrotliDecompress, createGunzip } from 'node:zlib'
import { VError } from '../VError/VError.js'

export const extractTarBr = async (inFile, outDir) => {
  try {
    const { default: tar } = await import('tar-fs')
    await mkdir(outDir, { recursive: true })
    await pipeline(
      createReadStream(inFile),
      createBrotliDecompress(),
      tar.extract(outDir),
    )
  } catch (error) {
    throw new VError(error, `Failed to extract ${inFile}`)
  }
}

export const extractTarGz = async ({ inFile, outDir, strip }) => {
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
  } catch (error) {
    throw new VError(error, `Failed to extract ${inFile}`)
  }
}
