program :=portfolio

debug ?=

ifdef debug
		release :=
		target :=debug
		extension :=debug
else
		release :=--release
		target :=release
		extension :=
endif

.PHONY = all dev css app build start fmt clean

all: build start

dev:
		make -j 2 css app

css:
		npx tailwindcss -i ./input.css -o ./public/tailwind.css --watch

app:
		@if [ ! -x "$(command -v "dx")" ]; then \
				echo "Dioxus CLI not found. Installing..."; \
				cargo install dioxus-cli; \
		fi
		dx serve --platform fullstack

build:
		dx build $(release)

start:
		./target/$(target)/$(program)

fmt:
		cargo fmt
		dx fmt

clean:
		rm -rf dist target .dioxus
