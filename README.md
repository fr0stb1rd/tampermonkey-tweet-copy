# Twitter Tweet & Article Copy

A Tampermonkey/Violentmonkey userscript that adds a "Copy" button to each tweet and article on X (formerly Twitter). It allows you to seamlessly copy the tweet or article text, resolve shortened `t.co` links to their original destinations, and copy the content along with its URL. It displays a clean check mark animation upon a successful copy.

## 🔥 Key Differences from the Original Repository

This repository (`fr0stb1rd/tampermonkey-tweet-copy`) is an extended and improved version of the original script by [tizee](https://github.com/tizee).

**New Features & Enhancements:**
- **t.co Link Resolution:** Automatically resolves Twitter's shortened `t.co` links asynchronously (handling 301/302 and Meta Refresh redirects) to reveal the actual URLs before copying them to your clipboard.
- **X Articles Support:** Added full support for copying X Articles (long-form content). It correctly extracts the article's title, body, and URL while preserving the structure.
- **Rich Clipboard Formatting:** Copies the text in both raw plain text (wrapped in markdown code blocks) and rich HTML formats to preserve structural clarity when pasting.
- **Improved Link Handling:** Non-link elements like `@mentions` and `#hashtags` are visually preserved without forcefully converting them into raw URLs.

## Features
- Adds a "Copy" button to every tweet and article.
- Asynchronously resolves `t.co` short links to their original URLs.
- Copies both raw text (Markdown formatted) and HTML directly to the clipboard.
- Displays an inline check mark animation to confirm a successful copy.

## Installation
1. Install a userscript manager like [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Click the following link to install the script: [Install X Tweet Copy](https://raw.githubusercontent.com/fr0stb1rd/tampermonkey-tweet-copy/refs/heads/main/user.js).

## Usage
1. Navigate to any tweet or article on X (https://x.com/).
2. Click the "Copy" button (the copy icon) next to the tweet or article action buttons.
3. The script will briefly display an hourglass (⏳) while resolving `t.co` links.
4. The text, original resolved links, and the source URL will be copied to your clipboard.
5. A check mark (✅) animation will confirm the copy.

## Customization
The script relies on `GM_addStyle` to inject CSS for the copy button and check mark animation. You can easily tweak these styles by editing the CSS template located at the beginning of the script.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author & Acknowledgements
- Forked and enhanced by [fr0stb1rd](https://github.com/fr0stb1rd).
- Original concept and script by [tizee](https://github.com/tizee).

