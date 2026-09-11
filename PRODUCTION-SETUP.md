# ScoreX Pro — Production Setup

## 1. Live hosting
The current files are static and can be hosted on GitHub Pages. GitHub Pages publishes repository files as a website.

For a production app with secure admin authentication and server-side API keys, use a hosting platform that supports server/API functions (for example Vercel/Netlify) plus a backend/database service.

## 2. Real live scores
The demo cards in `app.js` are placeholders. Replace them with calls to a licensed sports-data provider through a server-side API route.

Do NOT put a private sports API key in `app.js`, `index.html`, or any public GitHub repository.

Recommended architecture:
Browser -> your `/api/*` server routes -> licensed sports-data provider
                       |
                       -> cache/rate-limit -> browser

## 3. Secure admin login
Do not protect `admin.html` with a JavaScript-only password. Anyone can inspect browser code.

Use a real authentication service such as Supabase Auth or another server-side identity provider. Supabase supports password authentication and JWT-based sessions; database access should be protected with Row Level Security.

Production admin flow:
1. Admin signs in through the auth provider.
2. Server verifies the session.
3. Server checks an `admin` role/claim.
4. Only authorized admins can access admin operations.
5. Enable MFA for admin accounts where available.

## 4. Domain + HTTPS
GitHub Pages supports custom domains and HTTPS. For a custom domain, configure the domain in the repository Pages settings and set the DNS records at the domain provider.

## 5. Important
This project is a sports-information site. It intentionally does not implement betting, wagering, casino gambling, gambling wallets, or betting credits.
