build:
	esbuild $$(find src -type f) --outdir=build --watch

.PHONY: build
