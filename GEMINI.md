# Deployment Automation Rule

Whenever you make any code or configuration changes in this project, you MUST own the full deployment process end-to-end without waiting for user permission.

**Workflow Requirements:**
1. **Commit:** Automatically run `git add .` and `git commit -m "[your commit message]"` after testing your changes.
2. **Push:** Automatically run `git push`. If it fails due to network constraints in the sandbox, re-run `git push` with `BypassSandbox: true`.
3. **Verify:** You are responsible for ensuring that the changes propagate to the live website (Vercel). Check the build/deploy status if needed.
4. **No Prompting:** Do not ask the user "Would you like me to commit and push?" — just do it.
