# Bhaskar B C – Developer Portfolio

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · React Hook Form + Zod · Resend

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

## Update your content

| What | Where |
| --- | --- |
| Name, email, location, **GitHub and LinkedIn URLs** | `src/lib/data.ts` → `site` (icons stay hidden while URLs are empty) |
| Experience, skills, education, certifications | `src/lib/data.ts` |
| Projects, GitHub repo and live demo links | `src/lib/data.ts` → `projects` (add `github` / `demo`) |
| Resume | Replace `public/Bhaskar_B_C_Resume.pdf` (keep the filename) |
| Photo | Replace `public/images/profile.webp` (about 840×1080, portrait) |
| Colours | `src/app/globals.css` → `@theme` |

## Contact form (Resend)

1. Create an API key at https://resend.com/api-keys.
2. Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL`.
3. Without a verified domain, Resend's test sender only delivers to your own Resend account email. To deliver anywhere, verify a domain and set `CONTACT_FROM_EMAIL`.

The API (`/api/contact`) validates input with Zod on the server, checks origin, uses a honeypot and minimum-time check, and rate-limits per IP. If the key is missing it returns an honest error, never a fake success.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import it at https://vercel.com/new (framework is auto-detected).
3. Add the environment variables above, then deploy.
4. Optional: add a custom domain under Project → Settings → Domains.
