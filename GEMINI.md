# Deployment Rule

Production is served from Vercel behind Cloudflare (domain: lidaco.shop).

After code changes and a passing `npm run build`:
1. Commit: `git add -A && git commit -m "<message>"`.
2. Push: `git push` (branch `main`). The GitHub Action in `.github/workflows/deploy.yml` deploys on push.
3. If the Action fails on `VERCEL_TOKEN`, the repo secret must be rotated by the owner
   (GitHub repo > Settings > Secrets and variables > Actions: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`).
   Until then deploy manually: `npx vercel build --prod` then `npx vercel deploy --prebuilt --prod`.
4. Verify https://lidaco.shop/en/ loads after deploying.

Do not commit `.env*` files; they are git-ignored.
