---
---

# Discord Object Blocks

Discord-related blocks. Blocks that allows you to access Discord-related data.

## Server Block

Block that allows you to access Discord Server/Guild data.

- **Block**: `{server}`
- **Aliases**: `{guild}`
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
