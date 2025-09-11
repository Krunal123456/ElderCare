PWA + Firebase quick notes

1. Environment variables

- Create `.env.local` in the project root and copy values from `.env.local.example`.

2. Install dependencies

npm install

3. Firebase setup

- In the Firebase console, create a web app inside the `boardme-2ceb2` project and copy the config values into `.env.local`.
- Enable Google sign-in in Authentication > Sign-In method.
- (Optional) Enable Firestore and set rules.

4. Service worker

- `public/sw.js` is a minimal SW. Improve caching for production.

5. Save user data

- `/src/pages/api/saveUser.ts` is an example API route where you can accept user payloads and save using server-side Admin SDK.
