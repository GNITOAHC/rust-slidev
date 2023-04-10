---
info: |
  Chapter 1: Getting Started
transition: slide-left
layout: center
---

# Chapter 1: Getting Started

<Toc listClass="toc" minDepth="2" mode="onlyCurrentTree" />

<!--
Here is another comment.
-->

---

## 1.1 Installations

<br />

1. macOS - `brew install rustup-init`
2. Windows - `winget install -e --id Rustlang.Rustup`

<br />
<br />

For updating or uninstalling 

```shell
rustup update # Updating 
rustup self uninstall # Uninstalling
```

---

## 1.2 Hello World!

Inside `main.rs`

```rust 
fn main() {
    println!("Hello, world!")
}
```

To run the program: 

```shell
rustc main.rs # Compile main file
./main # For Unix
.\main # For Windows
```

--- 

## 1.3 Using Cargo
Rust's package manager

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />

--- 

### Creating project

`cargo new my-app` for creating project (change `my-app` to your app name)

```txt
my-app/
  ├── .gitignore
  ├── Cargo.toml
  └── src/
       └── main.rs
```

---
hideInToc: true
---

### Creating project (cont.)

Files inside initial project.

```toml
# my-app/Cargo.toml
[package]
name = "project"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```
<br />

```rust
// my-app/src/main.rs
fn main() {
    println!("Hello, world!");
}
```


---

### Building project & Running project

Build your project using `cargo build`

```shell
$ cargo build 
    Compiling repo v0.1.0 (/path/to/repo)
      Finished dev [unoptimized + debuginfo] target(s) in 0.32s
```

<br />

Run the project by executing binary

```shell
$ . /target/debug/my-app # `. \target\debug\my-app.exe` on Windows
Hello, world!
```

---
hideInToc: true
---

### Building project & Running project (cont.)

To build and run project, run `cargo run`

```shell
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.32s
      running `/target/debug/my-app`
Hello, world!
```

Or simply checking the file 

```shell
$ cargo check 
    Finished dev [unoptimized + debuginfo] target(s) in 0.04s

# Simply compiles but doesn't generate executable
```

