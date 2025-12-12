# vscode-code-ladder README

A VSCode extension that helps you navigate document text based on predefined keywords in an external file. 

## Features

1. Navigate across your document using predefined keywords.
2. Use `$0` placeholders in keywords to specify the exact cursor position.
3. Automatically reload the keyword configuration file (`.keywords`) when updated.


## Configuration

```json
{
  "code-ladder.src": ".keywords",
  "code-ladder.placeholder": "$0"
}
```


### `.keywords` File Format

The **keywords file** specifies a list of keywords, each on a new line. You can use `$0` within keywords to designate cursor positions.

```plaintext
Href: "$0"
Title: "$0"
Text-$0: "$0"
```

- In this example, `$0` indicates where the cursor will be placed when jumping to the keyword.
- You can use multiple `$0` in a line.


## Usage

### Commands

This extension provides the following commands:

- **Command ID**: `code-ladder.stepDown`  
   - Searches for the next keyword in the document and moves the cursor to the specified position.
- **Command ID**: `code-ladder.stepUp`  
   - Searches upwards for the previous keyword in the document and moves the cursor to the specified position.

---

**Enjoy!**
