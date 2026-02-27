# Video 1: Course Overview, Roadmap & Environment Setup

## What You Need

| Tool | Purpose | Download |
|------|---------|----------|
| **Node.js** (LTS) | JavaScript runtime for backend | https://nodejs.org |
| **VS Code** | Editor with great JS/TS support | https://code.visualstudio.com |
| **Git** | Version control | https://git-scm.com |
| **Terminal** | Use built-in (VS Code / PowerShell / Git Bash) | — |

## Verify Installation

```bash
node -v    # e.g. v20.x.x
npm -v     # e.g. 10.x.x
git --version
```

## Optional: Install nvm (Node Version Manager)

- **Windows:** https://github.com/coreybutler/nvm-windows  
- **Mac/Linux:** `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`

Then: `nvm install 20` and `nvm use 20`.

## Project Folders

All Module 1 code lives under `code/module-1-js-ts-foundations/`.  
Each numbered folder (e.g. `03-variables`) matches one video. Open that folder and run the file when recording.

## Running Code in This Module

- **JavaScript:** `node path/to/file.js`  
  Example: `node 03-variables/variables.js`
- **TypeScript (later videos):** `npx ts-node path/to/file.ts`  
  Or from a project: `npm run dev`

## Tips for Recording

1. Use a clear font (e.g. Fira Code, 16–18pt).
2. Zoom terminal text so viewers can read it.
3. Run the file after each logical change so output is visible.
