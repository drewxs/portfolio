#![allow(non_snake_case)]

use std::collections::HashMap;

use dioxus::prelude::*;

struct Command {
    #[allow(dead_code)]
    id: usize,
    content: String,
}

#[component]
pub fn Home() -> Element {
    let mut input = use_signal(|| String::new());
    let mut next_id = use_signal(|| 0);
    let mut history = use_signal(Vec::<Command>::new);
    let mut path = use_signal(|| vec!["~".to_string()]);

    let mut dir: HashMap<String, Vec<String>> = HashMap::new();
    dir.insert(
        "~".to_string(),
        vec![
            "projects".to_string(),
            "info".to_string(),
            "contact".to_string(),
        ],
    );
    dir.insert("~/projects".to_string(), vec!["engram".to_string()]);
    dir.insert("~/info".to_string(), vec!["about.md".to_string()]);

    let mut docs: HashMap<String, String> = HashMap::new();
    docs.insert("~/info/about.md".to_string(), "Hiya, it's me".to_string());

    let onsubmit = move |_| {
        let input_lock = input();
        let cmd = input_lock.split_whitespace().next().unwrap();
        let args = input_lock.split_whitespace().skip(1).collect::<Vec<&str>>();

        let mut output = format!("drew :: {} >> {}\n", path.read().join("/"), input());

        match cmd {
            "cd" => {
                let parts = args.join("");
                let parts = parts.split("/").collect::<Vec<&str>>();
                for part in parts {
                    if part == ".." {
                        path.write().pop();
                    } else if part == "." {
                        path.write().push("".to_string());
                    } else if part == "~" || part == "/" {
                        path.write().clear();
                    } else {
                        let cur = path.read().join("/");
                        let contents = dir.get(&cur).unwrap();

                        if contents.contains(&part.to_string()) {
                            path.write().push(part.to_string());
                        } else {
                            output.push_str(&format!("cd: no such file or directory: {}\n", part));
                        }
                    }
                }
            }
            "ls" => match args.len() {
                0 => {
                    let cur = path.read().join("/");
                    let item = dir.get(&cur).unwrap();
                    output.push_str(&item.join(" "));
                    output.push_str("\n");
                }
                _ => {
                    let flags = args.join("").replace("-", "");
                    if flags.contains("l") {
                        let cur = path.read().join("/");
                        let item = dir.get(&cur).unwrap();
                        output.push_str(&item.join("\n"));
                    }
                }
            },
            _ => {}
        }

        history.write().push(Command {
            id: next_id(),
            content: output,
        });
        next_id += 1;

        input.set(String::new());
    };

    rsx! {
        div { class: "flex flex-col justify-end items-stretch w-screen h-screen bg-black p-2",
            for item in history.read().iter() {
                div { class: "text-white py-1 whitespace-pre-wrap", {item.content.clone()} }
            }
            form { onsubmit,
                div { class: "flex gap-2",
                    p { class: "text-white", {format!("drew :: {} >>", path.read().join("/"))} }
                    input {
                        class: "text-white flex-1 [caret-shape:block] caret-white",
                        value: "{input}",
                        oninput: move |e| input.set(e.value()),
                        autofocus: true
                    }
                }
            }
        }
    }
}
