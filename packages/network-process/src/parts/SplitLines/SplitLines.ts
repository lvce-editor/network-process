import * as Character from '../Character/Character.ts'

export const splitLines = (lines: string): string[] => {
  return lines.split(Character.NewLine)
}
