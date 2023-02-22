---
sidebar_position: 1
slug: /tagblocks
description: Tag Blocks is a scripting language powered by TagScriptEngine
---

# Introduction

Tag Blocks is a scripting language powered by
[TagScriptEngine](https://github.com/ZiRO-Bot/TagScript).

It aims to mimic programming language while still relatively easy to use.

## The Anatomy of Tag Blocks

All Tag Blocks are surrounded by curly braces `{}`.

Inside is the name of the block, which determines the behaviour of the block.
Some blocks have aliases or multiple names that produces the same behaviour.

Depending on the block's behaviour, it can have **parameter** options that can be
added right after the block's name. (`blockname(parameter)`)

Block that performs action sometimes allows you to specify the text that
returned once specific action is successfully performed called ***payload**, it
can be added after block's name or after parameter option.
(`blockname(parameter):payload` or `blockname:payload`)

**Example**: `{if(true):It's true|It's false}`, `{random:1,2,3}`

## Supports

:::note

Not all blocks are supported by these listed features, **[click here to see more details.](category/blocks)**

:::

- Custom Commands
- Welcome Message
- Goodbye Message
- Boost Message (Not available yet)
