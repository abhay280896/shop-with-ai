# E-commerce Performance Lab

## Start
npm install
npm run dev

## Intentional bugs
This app is deliberately inefficient. Do NOT fix these before profiling.

1. 1,200 images load eagerly from an external image service.
2. All 1,200 products render at once; no pagination/virtualization.
3. Search filters on every keystroke with no debounce.
4. Every cart update re-renders the entire product grid.
5. ProductCard is not memoized.
6. Sorting mutates the filtered array.
7. Images are large and have no lazy loading.
8. No explicit image dimensions beyond CSS/aspect-ratio.
9. Heavy DOM size makes layout/style work visible.
10. External image requests create network variability.

## Suggested lab
A. Baseline Lighthouse.
B. Chrome DevTools Network: inspect request count, image transfer, waterfall.
C. Performance: record typing/search and cart click.
D. React DevTools Profiler: identify commits and expensive components.
E. Fix ONE issue at a time.
F. Re-run measurements and compare.

Target fixes to practice:
- loading="lazy"
- responsive image sizes / modern formats
- debounce search
- React.memo
- useMemo/useCallback where justified
- pagination or virtualization
- server-side filtering/pagination (conceptually)
- bundle/code splitting
