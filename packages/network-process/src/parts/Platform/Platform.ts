const { platform } = process

export const applicationName: string = 'lvce-oss'

export const isWindows: boolean = platform === 'win32'

export const isMacOs: boolean = platform === 'darwin'
