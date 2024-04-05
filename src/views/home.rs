use dioxus::prelude::*;

use crate::route::Route;

#[component]
pub fn Home() -> Element {
    let mut count = use_signal(|| 0);
    let mut text = use_signal(|| String::from("..."));

    rsx! {
        Link { to: Route::Blog { id: count() }, "Go to blog" }
        div {
            h1 { "High-Five counter: {count}" }
            div { class: "flex flex-col items-center",
                button { onclick: move |_| count += 1, "Up high!" }
                button { onclick: move |_| count -= 1, "Down low!" }
                button {
                    class: "p-4",
                    onclick: move |_| async move {
                        if let Ok(data) = get_server_data().await {
                            log::info!("Client received: {}", data);
                            text.set(data.clone());
                            post_server_data(data).await.unwrap();
                        }
                    },
                    "Get Server Data"
                }
                p { "Server data: {text}" }
            }
        }
    }
}

#[server(PostServerData)]
async fn post_server_data(data: String) -> Result<(), ServerFnError> {
    println!("server received: {}", data);
    Ok(())
}

#[server(GetServerData)]
async fn get_server_data() -> Result<String, ServerFnError> {
    Ok("hello from the server!".to_string())
}
