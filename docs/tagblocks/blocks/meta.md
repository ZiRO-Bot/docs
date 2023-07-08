---
---

# Meta Blocks

Blocks that interact with the bot or the bot's command-related stuff. (e.g. Getting user's argument(s) when they execute `!!somecommand argument goes here`)

## Argument Block

:::note

This block is only supported in **Custom Commands**.

:::

Block that lets you to access executed command's arguments

- **Block**: `{args}`
- **Aliases**: None
- **Parameters**: Index (starts from 0)
- **Examples**:
  - **Command**: `Hello, {args}!`  
    **Input**: "World"  
    **Output**: "Hello, **World**!"
  - **Command**: `{args(0)} is the best!`  
    **Input**: "Z3R0 and ..."  
    **Output**: "**Z3R0** is the best!"
  - **Command**: `Spaced example: '{args(1)}'`  
    **Input**: "nospace " with spaces ""  
    **Output**: "Spaced example: '** with spaces **'"
