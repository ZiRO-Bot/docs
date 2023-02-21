---
sidebar_position: 1
---

# Custom Commands

**Custom Commands** is one of the key features of Z3R0 that allows a user to create their command that seamlessly integrated alongside the bot's built-in commands.

:::tip

You can prioritize custom command execution if your custom command's name is the same as a built-in command by adding `!` or `>` between prefix and command name. (e.g. `>!ping`, `>>ping`, or `?>ping`)

:::

## How to Create A Command?

- **Basic**: You can create a simple by executing `>command create` command to a text channel.

  Example: `>command create ping Pong!` will create a `>ping` command where when executed the bot will reply "Pong!".

- **Advanced**: Custom Commands support a feature we call **Tag Blocks**, this blocks allows you to make a more advanced command with complicated logics, think of it as redstones in Minecraft. Simple example of this block is `{user(name)}`, where when a command that contains this block will send the name of the user that execute the command. You can read more about it in [Tag Blocks](/tagblocks) section.

  Advanced commands may causes you to write more than 2500 characters (or 4000 characters with Nitro), to workaround this issue you can write the command content in [~~Pastebin~~](https://pastebin.com) or [GitHub Gist](https://gist.github.com) and import it with `>command import` command.

  Example: `>command import https://gist.github.com/null2264/87c89d2b5e2453529e29c2cae3b57729`

  :::warning

  It is recommended to use GitHub Gist instead of Pastebin for imported commands, because Pastebin support is deprecated!

  A dashboard is planned to make import process a lot easier for most users.

  :::
