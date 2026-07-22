# Achroma

Monochrome design system inspired by GOV.UK. React 19, Tailwind CSS 4, Vite, TypeScript. Design principles are in README.md.

## Commands

- `npm run dev`, `npm run build` (type-checks everything, including stories), `npm run lint`
- `npm run storybook` (dev server on :6006), `npm run build-storybook`

## Conventions

- One component per file in `src/ui/`, re-exported from `src/ui/index.ts`. App code imports from the barrel (`../ui`), never from component files directly.
- Design tokens are CSS vars in the `@theme` block of `src/index.css`. Visual primitives (`btn`, `form-input`, `tag`, `menu-item`) are Tailwind `@utility` classes there. Add a React component only when there is structure beyond a class.
- Every `src/ui/` component has a colocated `<Name>.stories.tsx`: CSF3 with `satisfies Meta<typeof X>`, `tags: ['autodocs']`, title `Components/<Name>`. Utility-class primitives get render-only stories under `Primitives/`.
- A file that exports a component must not export non-component values (oxlint fast-refresh rule). Shared constants and helpers go in their own file.
- Example apps live in `src/pages/examples/`, wrapped in `ExampleShell`, using hash routing.
