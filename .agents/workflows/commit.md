---
description: analyze staged changes and perform a git commit with a generated message
---

1. Check for staged changes using `git diff --cached --stat`.
2. Summarize the staged changes across all files (components, styles, configurations, etc.).
3. Generate a concise, descriptive commit message following the "type: description" format (e.g., `feat: ...`, `refactor: ...`, `style: ...`).
// turbo
4. Execute the git commit command with the generated message: `git commit -m "GENERATED_MESSAGE"`.
5. Report the successful commit to the user.
