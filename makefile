build:
	esbuild $$(find lib -type f) --outdir=build --watch

.PHONY: build
