# Student Biodata Form

An HTML/CSS/JavaScript mini-website.

## Files
- `index.html`: biodata form and the embedded photograph iframe.
- `style.css`: all styling and responsive layouts.
- `script.js`: photo preview, required-field validation, biodata preview and reset.
- `passport.html`: page loaded INSIDE the `<iframe>`; contains the photograph.
- `assets/passport-placeholder.svg`: default passport photo placeholder.

## Note on local preview and privacy
The form only checks and displays the details in the visitor's browser. It does not send email, save records, or upload passport photographs. Avoid entering actual sensitive information on shared computers.

The photo preview uses browser `FileReader` and `postMessage` to update the picture in the embedded `passport.html` iframe. On certain browsers, local `file://` security restrictions may affect this feature; VS Code Live Server or GitHub Pages will work more reliably.
