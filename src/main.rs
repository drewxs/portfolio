#![allow(non_snake_case)]

use dioxus::prelude::*;
use log::LevelFilter;

use portfolio::route::Route;

fn main() {
    dioxus_logger::init(LevelFilter::Info).expect("failed to init logger");

    launch(App);
}

fn App() -> Element {
    rsx! {
        Router::<Route> {}
    }
}
