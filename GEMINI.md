# Deployment Automation Rule

Whenever you make any code or configuration changes in this project, you MUST own the full deployment process end-to-end without waiting for user permission.

**Workflow Requirements:**
1. **Commit:** Automatically run `git add .` and `git commit -m "[your commit message]"` after testing your changes.
2. **Push:** Automatically run `git push`. If it fails due to network constraints in the sandbox, re-run `git push` with `BypassSandbox: true`.
3. **Direct Vercel Deploy:** Since the GitHub Actions pipeline is currently experiencing Vercel Token authentication issues (`VERCEL_TOKEN` is invalid), you MUST also manually trigger a Vercel deployment locally. 
   - Run: `npx vercel build --prod` (with `BypassSandbox: true`)
   - Then run: `npx vercel deploy --prebuilt --prod` (with `BypassSandbox: true`)
4. **Verify:** Ensure that the local deployment command finishes successfully and the changes propagate to the live website.
5. **No Prompting:** Do not ask the user "Would you like me to commit and push?" or "Should I deploy?" — just do it.
