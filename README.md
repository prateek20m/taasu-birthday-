# Birthday Website for Taasu ♡

A responsive birthday scrapbook made with plain HTML, CSS and JavaScript. No framework or build step is required.

## Folder structure

```text
birthday-website/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── taasu/
    │   ├── 1.jpeg
    │   ├── 2.jpeg
    │   └── ... through 18.jpeg
    └── music/
        └── bdsong.mp4
```

The ZIP intentionally does **not** contain fake photos or an empty/fake song. Add your real 18 images and optional MP4 audio at the exact paths above.

## Run locally

1. Extract `birthday-website.zip`.
2. Copy your 18 original photos into `assets/taasu/`, keeping the names exactly `1.jpeg` through `18.jpeg`.
3. Optionally add your song as `assets/music/bdsong.mp4`.
4. Double-click `index.html` to open it in a browser. If your browser restricts local files, open a terminal in this folder and run `python3 -m http.server 8000`, then visit `http://localhost:8000`.

## Customise

Open `script.js` and edit the clearly marked `CONFIG` object at the top:

- `name`, `nickname`, and `birthdayIntro`: names and intro copy.
- `photos`: order, captions, `showInGallery`, and `featured` flags. Use filenames `1.jpeg` to `18.jpeg`.
- `timeline`: dates, titles, and descriptions. Only September 2025 is given as a month/year; other entries use non-specific labels.
- `quiz`: questions, options, answer index (first option is index `0`), and feedback.
- `quizResults`: final score messages.
- `messages`: the six flip-card messages.
- `letter`: one string per paragraph in the birthday letter.
- `finalMessage`: text for the last surprise.
- `musicFile`: path to the optional music or MP4 file.

To change the visual palette, edit the CSS variables near the top of `style.css` under `:root`.

## Photos

The page expects `assets/taasu/1.jpeg` through `assets/taasu/18.jpeg`. It uses relative paths and shows a gentle heart placeholder if an image is missing. To change the order, reorder the objects in `CONFIG.photos`; do not rename the source files unless you also update the matching `file` value.

## Music

Put your audio file at `assets/music/bdsong.mp4`, or change `CONFIG.musicFile`. Music never starts automatically. The visitor uses Play/Pause.

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `taasu-birthday`.
2. Upload the contents of this folder (not the ZIP itself) to the repository root. Keep the `assets` folders and their exact names.
3. Commit and push the files.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select your main branch and `/ (root)`, then Save.
7. Wait for GitHub Pages to publish and open the URL shown in the Pages settings.

If the repository is public, anyone with the link may view the site and photos. Only upload photos you have permission to share.

## Final checklist

- [ ] `assets/taasu/1.jpeg` through `18.jpeg` are all present and spelled exactly.
- [ ] Open the intro and confirm the main page appears.
- [ ] Open several gallery photos; test close, previous, next, Escape and arrow keys.
- [ ] Answer all five quiz questions and try Play again.
- [ ] Blow out the candles by clicking a candle and by using the button; test Make another wish.
- [ ] Open the gift by clicking the box and its button.
- [ ] Flip all six message cards.
- [ ] Confirm the tulsi mala and mountain dream sections read correctly.
- [ ] Read the full letter on desktop and mobile.
- [ ] Test Play and Pause after adding your MP4 song.
- [ ] Open the final surprise and test the restart button.
- [ ] Check the page at phone, tablet and desktop widths.
- [ ] Test with reduced-motion enabled in your operating system/browser.

## Notes

- This is a static website. It does not collect or transmit visitor data.
- The decorative hero frame is intentionally a placeholder, not a substitute for your real photos.
- The mountain scene is a CSS illustration. It is a hopeful future dream, not a claim that you have already visited together.
