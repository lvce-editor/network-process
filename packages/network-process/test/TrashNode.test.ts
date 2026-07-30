import { afterEach, expect, jest, test } from '@jest/globals'

afterEach(() => {
  jest.resetAllMocks()
})

jest.unstable_mockModule('trash', () => ({
  default: jest.fn(),
}))

const TrashNode = await import('../src/parts/TrashNode/TrashNode.ts')
const trash = (await import('trash')).default

test('trash', async () => {
  await TrashNode.trash('/test/file.txt')

  expect(trash).toHaveBeenCalledTimes(1)
  expect(trash).toHaveBeenCalledWith('/test/file.txt')
})
