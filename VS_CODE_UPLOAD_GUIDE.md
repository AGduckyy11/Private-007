# How to add your own files (VS Code)

## 1) Open project in VS Code
1. Open VS Code.
2. Click **File → Open Folder...**
3. Select this project folder: `Private-007`.

## 2) Put your files in these folders
- Photos/screenshots: `media/photos/`
- Audio files: `media/audio/`

You can drag and drop files directly in the VS Code Explorer into those folders.

## 3) Match file names in `script.js`
Open `script.js` and update the `mediaConfig` object at the top:

- `legendPhoto`: main top image
- `legendAudio`: main top audio
- `proofs`: image list for the `proof's` section
- `audioProofs`: audio list for the `audio proofs` section

Example:
```js
const mediaConfig = {
  legendPhoto: "media/photos/my-main.jpg",
  legendAudio: "media/audio/my-main.mp3",
  proofs: ["media/photos/a.png", "media/photos/b.jpg"],
  audioProofs: ["media/audio/1.m4a", "media/audio/2.mp3"],
};
```

## 4) Run and preview
In VS Code terminal:

```bash
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

## Notes
- Upload buttons are intentionally disabled on the webpage.
- Only files you add in the project folder will appear.
- Click any image in `proof's` to expand it while the other proof images minimize, and it also opens in a fullscreen viewer.
