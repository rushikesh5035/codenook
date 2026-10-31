# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Solo developers and small engineering teams who use GitHub and want useful, codebase-aware pull request reviews without adding a complicated review workflow.

## Product Purpose

CodeNook helps developers understand and improve GitHub pull requests with AI reviews grounded in relevant code from the repository. A repository question-and-answer experience is a planned companion capability; repository indexing and context retrieval exist, but a user-facing chat experience is not yet implemented.

## Positioning

Reviews can draw on retrieved context from the indexed repository, rather than considering only the pull request diff. The product aims to make each review easier to understand and act on by providing a walkthrough, potential issues, and suggestions in the GitHub workflow.

## Operating Context

Users sign in with GitHub, connect repositories, and receive AI review work triggered through the GitHub pull request workflow. Review work is queued for background processing and can be posted back to GitHub. Repository files are indexed for semantic context retrieval. The product is a web application.

## Capabilities and Constraints

- GitHub OAuth, repository access, webhook handling, pull request diff retrieval, and review-comment publishing are implemented in the codebase.
- Repository file embeddings are generated with Google Gemini (`gemini-embedding-001`) and stored and queried through Pinecone.
- AI pull request review jobs are queued through Inngest.
- Polar is integrated for subscription and billing flows.
- Repository question-and-answer is planned. Do not describe it as an available chat feature until its user-facing workflow is implemented.
- Open decision (2026-10-31): roadmap status of repository Q&A was flagged for re-confirmation. Keep today/planned claims conservative until re-confirmed.
- No customer count, review-quality benchmark, customer testimonial, or named-customer endorsement has been provided for public use.

## Brand Commitments

- Current product name: CodeNook.
- The landing page uses a near-black and white foundation with Azure blue `#058FFF` as its primary accent.
- The supplied icon SVG uses blue `#0081FB` and off-white `#FBFBFB`; preserve its vector artwork when using that logo asset.
- Voice is concise and developer-to-developer; avoid inflated AI claims and generic marketing language.

## Evidence on Hand

- GitHub auth, API, webhook, and review workflow: `lib/auth.ts`, `module/github/lib/github.ts`, `app/api/webhooks/github/route.ts`, and `module/ai/actions/index.ts`.
- Gemini embedding and Pinecone indexing/retrieval: `module/ai/lib/rag.ts` and `lib/pinecone.ts`.
- Inngest integration: `inngest/` and `app/api/inngest/route.ts`.
- Polar billing integration: `module/payment/` and `lib/auth.ts`.
- No verified customer or usage proof is currently available in the project materials.

## Product Principles

- Ground reviews in repository code, not only the changed lines.
- Explain findings in language developers can verify and act on.
- Keep the workflow close to GitHub pull requests.
- Be explicit about what is available today versus planned.
- Use only real customer, quality, or usage evidence in public claims.
