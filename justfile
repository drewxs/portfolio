set positional-arguments
set shell := ["bash", "-uc"]

alias d := dev
alias b := build
alias s := start

dev-css:
  npx tailwindcss -i ./input.css -o ./public/tailwind.css --watch

dev-app:
  dx serve --platform fullstack

dev:
  just dev-css && just dev-app

build:
  cargo build

start: build
  ./target/debug/portfolio

clean:
  rm -rf dist target .diocus
