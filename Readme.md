
# TipTap Image Plus
[![NPM](https://img.shields.io/npm/v/tiptap-image-plus.svg)](https://www.npmjs.com/package/tiptap-image-plus)

An advanced image extension for [Tiptap](https://tiptap.dev/) editor with extra options like resize, align, caption, and more. Easily add rich image editing features to your Tiptap editor.

## Features

- Resize images with drag handles
- Align images (left, center, right)
- Custom wrapper and container styles
- Mobile-friendly controls
- Easy integration with Tiptap v2

## Installation

```bash
npm install tiptap-image-plus
```

or

```bash
yarn add tiptap-image-plus
```

## Usage

```typescript
import { Editor } from '@tiptap/core';
import { ImagePlus } from 'tiptap-image-plus';

const editor = new Editor({
	extensions: [
		ImagePlus.configure({
			// Optional: custom options
			wrapperStyle: { display: 'flex', width: '100%' },
			containerStyle: { cursor: 'pointer' },
		}),
		// ...other extensions
	],
});
```

## Options

`ImagePlus` extends the default Tiptap image extension. You can pass all [@tiptap/extension-image](https://tiptap.dev/api/extensions/image) options, plus:

- `wrapperStyle`: CSS properties for the image wrapper (default: `{ background }`)
- `containerStyle`: CSS properties for the image container (default: `{  }`)

## Example

```typescript
ImagePlus.configure({
	wrapperStyle: { background: "" },
	containerStyle: {  },
})
```

## License

MIT

---

**Links:**
- [NPM](https://www.npmjs.com/package/tiptap-image-plus)
- [GitHub](https://github.com/RomikMakavana/tiptap-image-plus)
