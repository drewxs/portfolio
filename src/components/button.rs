#![allow(non_snake_case)]

use dioxus::prelude::*;

#[component]
pub fn Button(
    class: Option<String>,
    href: Option<String>,
    onclick: Option<EventHandler<MouseEvent>>,
    children: Element,
) -> Element {
    let styles = match class {
        Some(class) => format!("p-4 {}", class),
        None => "p-4".to_string(),
    };

    if let Some(href) = href {
        rsx! {
            a { class: styles, href, {children} }
        }
    } else if let Some(onclick) = onclick {
        rsx! {
            button { class: styles, onclick: move |evt| onclick.call(evt), {children} }
        }
    } else {
        rsx! {
            div { class: styles, {children} }
        }
    }
}
