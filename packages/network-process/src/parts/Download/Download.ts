import { createWriteStream } from 'node:fs'
import { mkdir, rm } from 'node:fs/promises'
import { pipeline } from 'node:stream/promises'
import * as Path from '../Path/Path.ts'
import { VError } from '../VError/VError.ts'

export const download = async (url: string, outFile: string): Promise<void> => {
  const { default: got, RequestError } = await import('got')
  try {
    await mkdir(Path.dirname(outFile), { recursive: true })
    await pipeline(got.stream(url), createWriteStream(outFile))
  } catch (error: any) {
    try {
      await rm(outFile)
    } catch {
      // ignore
    }
    if (error instanceof RequestError) {
      throw new VError(`Failed to download "${url}": ${error.message}`)
    }
    throw new VError(error, `Failed to download "${url}"`)
  }
}
