#![allow(non_snake_case)]

use dioxus::prelude::*;
use tracing::Level;

use portfolio::route::Route;

fn main() {
    dioxus_logger::init(Level::INFO).expect("failed to init logger");
    launch(App);
}

fn App() -> Element {
    rsx! {
        Router::<Route> {}
    }
}
