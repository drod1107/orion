# Contributing to Orion

_Thank you for helping make Orion better! This guide outlines best practices and our workflow to maintain code quality, security, and consistency._

---

## Code Style & Linting

- Orion uses **ESLint** (Airbnb/Next.js rules) and **Prettier**.
- **Husky** and **lint-staged** auto-lint/format on each commit.
- All code must pass `npm run lint` before pushing.

---

## Git Workflow

- Use feature branches (e.g., `feature/budget-rollover` or `fix/login-bug`).
- Make atomic commits with clear messages.
- Open a Pull Request to `main` for review—one team member must approve.
- Our CI (GitHub Actions) runs tests and lint on every PR. All checks must pass before merge.

---

## Testing Requirements

- **Vitest** for unit/integration tests, **Playwright** for end-to-end (E2E).
- All new features/bugfixes require tests. Place unit/component tests next to code or in `__tests__` folders. E2E specs live in `apps/e2e/tests/`.
- Run tests locally:

  - `npm run test` (unit/integration)
  - `npx playwright test` (E2E)

- Changes affecting the user interface should include/extend E2E coverage.

---

## Documentation

- Update docs in `apps/docs` for any new feature:

  - **features.md** (if user-facing)
  - **user-guide.md** (for users)
  - **developer-setup.md**, **build-process.md** (if process or config changes)

- Docs are published in Storybook (MDX/Markdown). Keeping docs up to date is as important as code.

---

## Branching, Releases & Changelog

- Tag releases in Git and update **release-notes.md** with every significant milestone or fix.
- If your PR completes a notable user-facing change, add an entry under "Unreleased" until the version is cut.

---

## Security & Secrets

- Never commit secrets (API keys, passwords). Use environment variables.
- Never log or transmit sensitive user data unencrypted. All logic must honor Orion’s privacy-first, zero-knowledge design.
- Vet third-party libraries for security. List any new deps in PRs for review.

---

## UI/UX Consistency

- Follow established UI patterns. Add new components to `packages/ui` for reuse and document in Storybook.
- Use the provided generator (Plop/Turbo) to scaffold new UI pieces.

---

## CI/CD & Testing in PRs

- GitHub Actions run: lint, type-check, Vitest, build, Playwright E2E.
- All checks must pass before PRs are merged to `main`.
- Fix CI errors before requesting review.

---

## Communication & Issues

- Open issues for discussion/design before large features. Link PRs to related issues.
- Use clear, descriptive titles and provide context in discussions/PRs.

---

By following this guide, Orion remains stable, secure, and easy to maintain. Happy coding!
