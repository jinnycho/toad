tmux:
	bash .tmux.sh

all:
	tmux split-pane make build
	make server

build:
	esbuild $$(find lib drawings -type f) --bundle --outdir=build --watch

server:
	python3 -m http.server 2424

.PHONY: build all server
