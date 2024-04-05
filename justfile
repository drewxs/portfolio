set shell := ["bash", "-uc"]

alias d := dev
alias b := build
alias s := start

program := "portfolio"
debug := ""
release := if debug == "" { "--release" } else { "" }
target := if debug == "" { "release" } else { "debug" }
extension := if debug == "" { "" } else { "debug" }

all:
    just build
    just start

dev:
    just css & just app

css:
    npx tailwindcss -i ./input.css -o ./public/tailwind.css --watch

app:
    @if [ ! -x "$(command -v "dx")" ]; then \
      echo "Dioxus CLI not found. Installing..."; \
      cargo install dioxus-cli; \
    fi
    dx serve --platform fullstack

build:
    dx build {{ release }}

start:
    ./target/{{ target }}/{{ program }}

fmt:
    cargo fmt
    dx fmt

clean:
    rm -rf dist target .dioxus
