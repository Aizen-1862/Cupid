# PROJECT CUPID — Firebase edition

## What the site does
- `index.html`, `style.css`, `script.js`: a mobile-friendly, 20-question interest quiz.
- Quiz takers can choose an option, write a custom answer, or skip any question.
- After a successful submission, the quiz taker sees a complete answer recap and can share it using the device's share sheet or copy it to the clipboard.
- `firebase-config.js`: the Firebase web app configuration used by both pages.
- `admin.html`, `admin.css`, `admin.js`: a sign-in-protected dashboard for the creator.
- `firestore.rules`: public visitors can create a submission only; only the configured authenticated UID can read, update, or delete submissions.

## Firebase setup and security
1. In Firebase Console, open the project used by this site and register a Web app under Project settings > Your apps.
2. Confirm the values in `firebase-config.js` match the Web app configuration exactly. All Firebase SDK imports in the JavaScript files should use the same version.
3. Under Build > Authentication > Sign-in method, enable **Email/Password**.
4. Under Authentication > Users, create your own account. Keep its password private.
5. Under Build > Firestore Database, create the database in production/locked mode.
6. Open Firestore Database > Rules. Paste the contents of `firestore.rules` and check that the UID in `isAdmin()` is your own Firebase Authentication UID. Click **Publish**. Committing the rules file to GitHub does not publish rules to Firebase automatically.
7. In the GitHub repository, open Settings > Pages and set deployment to the `main` branch and `/(root)`. Wait for GitHub Pages to finish deploying.
8. Open the live site's `admin.html` page over HTTPS and sign in. If the dashboard cannot load responses, check the browser console and confirm that the published Firestore rules contain your exact UID.
9. Test the public quiz with a sample submission. Confirm that the submitter sees the recap and that it appears in your private dashboard.

## Privacy and safety notes
- The welcome screen tells quiz takers that their responses will be saved and shared with the person who made the page. It does not reveal the creator's personal reason for collecting preferences.
- Responses are sent to Firestore only when the quiz taker presses Finish. The recap appears after Firebase confirms the submission.
- Public visitors cannot read, update, or delete stored submissions. Dashboard login alone is not enough; Firestore Rules must also allow the signed-in UID.
- Firebase web configuration is included in the frontend and is not a password. Firestore Security Rules protect the stored responses. Never put an account password or service-account private key in website files.
- A client-only public form can be spammed by determined visitors. Do not collect passwords, sensitive personal information, or anything the quiz taker would not want shared with the creator.
- Review Firebase's current free-plan limits and usage in the console; quotas and terms can change.

## Live dashboard URL
After GitHub Pages is enabled, the dashboard is at:

`https://Aizen-1862.github.io/Cupid/admin.html`
