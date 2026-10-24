# PROJECT CUPID — Firebase edition

## Files
- `index.html`, `style.css`, `script.js`: public quiz (20 questions, one at a time, custom answers, progress/back/finish).
- `firebase-config.js`: paste your Firebase web app config here once.
- `admin.html`, `admin.css`, `admin.js`: private login and answer dashboard.
- `firestore.rules`: rules that permit new submissions but restrict reading to your one authenticated UID.

## Setup
1. In https://console.firebase.google.com create a project and register a Web app.
2. In Project settings > Your apps, copy the web config values into `firebase-config.js`.
3. Build > Authentication > Get started > Sign-in method: enable **Email/Password**.
4. Authentication > Users > Add user. Create your own email/password and keep the password private.
5. Build > Firestore Database > Create database. Choose production mode/locked mode.
6. Open Firestore > Rules. Paste `firestore.rules` and temporarily leave the UID placeholder as-is, then Publish. Public quiz submissions will work but no one can read them yet.
7. Deploy the website files to GitHub Pages. Open `admin.html` on your live site and sign in using the account you created.
8. The dashboard shows `Signed in UID`. Copy that UID.
9. Firestore > Rules: replace `PASTE_YOUR_ADMIN_AUTH_UID_HERE` with the copied UID (keep the quotes), then Publish. Only that UID can read, update, or delete submissions. If the dashboard says permission denied, confirm the UID exactly matches and the rules are published.
10. Test with a quiz submission. Finish only submits after the quiz taker has checked the consent box. The dashboard is at `https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPO/admin.html`.

## Free GitHub Pages deployment
1. Create a public GitHub repository such as `project-cupid`.
2. Upload all files except this README if you prefer; put `index.html`, `style.css`, `script.js`, `firebase-config.js`, `admin.html`, `admin.css`, and `admin.js` in the repository root.
3. Repository Settings > Pages > Deploy from a branch > `main` > `/(root)` > Save.
4. Wait for GitHub Pages to publish, then open the URL. Use HTTPS; Firebase web SDK modules need to run from a web server, not a `file:///` path.

## Important privacy/security notes
- The quiz clearly discloses that answers are submitted to the creator for a personalized birthday surprise and asks for consent before starting.
- Answers are sent only when the quiz taker presses Finish. The done screen does not display their answers.
- Public visitors can create submissions but cannot read, edit, or delete any submissions. The dashboard's email/password login alone is not enough; the UID must also be the exact one in Firestore Rules.
- Firebase web config is not a secret. Firestore Security Rules are the protection. Never place an admin password or service-account key in website files.
- This simple client-only design can be spammed by a determined visitor; it is intended for a small private surprise, not a high-traffic public survey. Do not ask for sensitive information.
- Review the Firebase console's current free-plan limits and usage. No paid API is used, but quotas and product terms can change.
