---
sidebar_position: 2
---

# Discord Action Blocks

Similar to [Discord Object Blocks](discord), except these blocks allows you to do certain actions on Discord instead of accessing data.

## React Blocks

### React Block

:::note

This block is supported in **Custom Commands**, **Welcome Message**, **Goodbye Message**,
and **Boost Message**.

:::

Block that makes the bot react to its own message.

- **Block**: `{react}`
- **Aliases**: None
- **Parameters**: None
- **Payloads**: Emojis (supports both Unicode and Custom Emojis), separated by
  spaces
- **Examples**: `{react: :kekw:}`, `{react: :kekw: 🤔}`

### ReactU Block

:::note

This block is supported in **Custom Commands**.

:::

Similar to React Block, except this block react to the message that triggered the command.

- **Block**: `{reactu}`
- **Aliases**: None
- **Parameters**: None
- **Payloads**: Emojis (supports both Unicode and Custom Emojis), separated by
  spaces
- **Examples**: `{reactu: :kekw:}`, `{reactu: :kekw: 🤔}`

## Embed Block

:::note

This block is supported in **Custom Commands**, **Welcome Message**, **Goodbye Message**,
and **Boost Message**.

:::

Block that tells the bot to build an Embed to the message. There's multiple way
to use this Block, JSON and Manual.

- **Block**: `{embed}`
- **Aliases**: None
- **Parameters**:
   - JSON (**Ignored if you use Manual method**)
   - `title`: Set the embed's title
   - `description`: Set the embed's description
   - `color`: Set the embed's color
   - `colour`: Alias for `color`
   - `url`: Set the embed's url (make the embed's title into hyperlink)
   - `thumbnail`: Add thumbnail to the embed
   - `image`: Add image to the embed
- **Payloads**: The value you want to set for the parameter (**Manual Only**)
- **Examples**:
   - **JSON**

     ```
     {embed({"title":"Hello!", "description":"Lorem ipsum dolor sit amet"})}
     ```

     It also works with formatted JSON:

     ```
     {embed({
         "title":"Hello!",
         "description":"Lorem ipsum dolor sit amet"
     })}
     ```

   - **Manual**

     ```
     {embed(color):#ffffff}
     {embed(title):Hello}
     {embed(description):Lorem ipsum dolor sit amet}
     ```
