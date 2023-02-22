---
---

# Discord Object Blocks

Discord-related blocks. Blocks that allows you to access Discord-related data.

## Server Block

:::note

This block is supported in **Custom Commands**, **Welcome Message**, **Goodbye Message**,
and **Boost Message**.

:::

Block that allows you to access Discord Server/Guild data.

- **Block**: `{server}`
- **Aliases**:
   - `{guild}`
- **Parameters**:
   - `id`: Return the ID of the server
   - `name`: Return the name of the server (default behaviour)
   - `icon`: Return the link to the server's icon
   - `created_at`: Return the creation date of the server
   - `timestamp`: Return the creation date of the server as UTC epoch timestamp
   - `member_count`: Return the server's member count
   - `bots`: Return the number of bots in the server
   - `humans`: Return the number of humans in the server
   - `description`: Return the description of the server (or "No description")
   - `channels`: Return the number of channel in the server
   - `roles`: Return the number of roles in the server
   - `owner`: Return the owner of the server
   - `random`: Return random member in the server
   - `randomonline`: Return random online member in the server
   - `randomoffline`: Return random offline member in the server
- **Payloads**: None
- **Examples**: `{server(id)}`, `{guild}`, `{guild(channels)}`

## Channel Block

:::note

This block is supported in **Custom Commands**.

:::

Block that allows you to access Discord Channel data.

- **Block**: `{channel}`
- **Aliases**: None
- **Parameters**:
   - `id`: Return the ID of the channel
   - `name`: Return the name of the channel (default behaviour)
   - `created_at`: Return the creation date of the channel
   - `timestamp`: Return the creation date of the channel as UTC epoch timestamp
   - `nsfw`: Return the channel's NSFW status
   - `mention`: Mentions the channel (e.g. `#channelname`)
   - `topic`: Return the topic of the channel
- **Payloads**: None
- **Examples**: `{channel}`, `{channel(mention)}`, `{channel(topic)}`

## Member Block

:::note

Some alias may not available in some places.

This block is supported in **Custom Commands**, **Welcome Message**, **Goodbye Message**,
and **Boost Message**.

:::

Block that allows you to access Discord Member data.

- **Block**: `{user}`
- **Aliases**:
   - `{author}` (**Custom Command only**)
   - `{target}` (**Custom Command only**)
   - `{member}`
- **Parameters**:
   - `id`: Return the ID of the member
   - `name`: Return the name of the member (default behaviour)
   - `nick`: Return the nickname of the member (fallback to name if none is set)
   - `avatar`: Return the link of the member's avatar
   - `discriminator`: Return the discriminator of the member (the 4 digit
     numbers after `#` on their name, e.g. 'Z3R0#**3977**')
   - `created_at`: Return the creation date of the member's account
   - `timestamp`: Return the creation date of the member's account as UTC epoch timestamp
   - `joined_at`: Return the date the member joined the server
   - `mention`: Mentions the member (e.g. `@username`, it won't ping them)
   - `bot`: Return bot status of the member (whether or not the member is a bot)
   - `color`: Return the member's top role's hex color (e.g. `#000000`)
- **Payloads**: None
- **Examples**: `{member}`, `{member(mention)}`, `{member(color)}`
