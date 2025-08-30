
# TipTap Image Plus
[![NPM](https://img.shields.io/npm/v/tiptap-image-plus.svg)](https://www.npmjs.com/package/tiptap-image-plus)

An advanced image extension for [Tiptap](https://tiptap.dev/) editor with extra options like resize, align, caption, and more. Easily add rich image editing features to your Tiptap editor.

Documentation : http://romikmakavana.me/tiptap/image-plus
Example : http://romikmakavana.me/tiptap/image-plus/example

## Features

- Resize images with drag handles
- Align images (left, center, right)
- Custom wrapper and container styles
- Mobile-friendly controls
- Easy integration with Tiptap v2

## Installation

You must install this package along with its peer dependency:

```bash
npm install tiptap-image-plus @tiptap/extension-image
```

or

```bash
yarn add tiptap-image-plus @tiptap/extension-image
```

## Peer Dependencies

This package requires the following peer dependencies to be installed in your project:

- [@tiptap/extension-image](https://www.npmjs.com/package/@tiptap/extension-image)

Make sure to install them to ensure everything works correctly.

## Usage

```typescript
import { Editor } from '@tiptap/core';
import { ImagePlus } from 'tiptap-image-plus';

const editor = new Editor({
	extensions: [
		ImagePlus.configure({
			// Optional: custom options
			wrapperStyle: {},
			containerStyle: {
                background: "linear-gradient(90deg,rgba(30, 88, 117, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
                padding: "25px",
                borderRadius: "10px",
            },
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
