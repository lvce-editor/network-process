type CommandFunction = (...args: any[]) => any

interface CommandState {
  commands: Record<string, CommandFunction>
}

export const state: CommandState = {
  commands: Object.create(null),
}

export const registerCommand = (key: string, fn: CommandFunction): void => {
  state.commands[key] = fn
}

export const registerCommands = (
  commandMap: Record<string, CommandFunction>,
): void => {
  for (const [key, value] of Object.entries(commandMap)) {
    registerCommand(key, value)
  }
}

export const getCommand = (key: string): CommandFunction | undefined => {
  return state.commands[key]
}
