#![allow(non_snake_case)]

use dioxus::prelude::*;
use tracing::Level;

use portfolio::route::Route;

const _TAILWIND_STYLESHEET: &str = manganis::mg!(file("./public/tailwind.css"));
const _GLOBAL_STYLESHEET: &str = manganis::mg!(file("./public/main.css"));
const _RESET_STYLESHEET: &str = manganis::mg!(file("./public/reset.css"));
const _FONT: &str = manganis::mg!(font().families(["Source Code Pro"]).weights([400]));

fn main() {
    dioxus_logger::init(Level::INFO).expect("failed to init logger");
    launch(App);
}

fn App() -> Element {
    rsx! {
        Router::<Route> {}
    }
}
