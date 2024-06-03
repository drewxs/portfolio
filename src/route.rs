use dioxus::prelude::*;

use crate::views::Home;

#[derive(Routable, Clone)]
pub enum Route {
    #[route("/")]
    Home {},
}
