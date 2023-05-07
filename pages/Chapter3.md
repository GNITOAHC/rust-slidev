---
info: |
  Chapter 2: Common Programming Concepts
transition: slide-left
layout: center
---

# Chapter 3: Project I - Guessing Game

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" />

---

## Setting Up New Project

```shell
cargo new guessing_game # Create a new project named `guessing_game`
cd guessing_game        # Move into the project repository
```

Project structure:

```txt
guessing_game/
  ├── .gitignore
  ├── Cargo.toml
  └── src/
       └── main.rs
```

---

## Processing a Game Part I

<br />

```rust {all|2|4-10|8,9}
// src/main.rs
use std::io; // Bring `io` library into code. This library provides stdin function we will use later.

fn main () {
    println!("Guess the number!!");
    println!("Please input your guess.")
    
    // Make a new string name `guess`, we will store your input later inside this variable.
    let mut guess = String::new();
}
```

---
hideInToc: true
---

## Processing a Game Part I (cont.)

<br />

To read in the user input, we need `stdin` from `io` library.

```rust
io::stdin()
    .read_line(&mut guess) // Read input into `guess`
    .expect("Failed to read line"); // If we failed to read line, `expect` will return "Failed to read line".
```

This block of code could be written in one line, but it'll be difficult to read. It's often wise to introduce a new line.
We will cover this `method_name()` syntax more detail in the future.

```rust
io::stdin().read_line(&mut guess).expect("Failed to read line");
```

After reading value, we print out the value of input.

```rust
println!("Your guess is: {guess}"); // This will print out the value of `guess`.
```

As we read the input into variable `guess` via `io::stdin()`, we now can print it out using `{}`.  
We will discuss this in the next page.

---
hideInToc: true
---

## Processing a Game Part I (cont.)

<br />

```rust
println!("Your guess is: {guess}"); // This will print out the value of `guess`.
```

This line now print not only string but also contains the user's input. The `{}` set of curly brackets is a placeholder.  
When printing the value of a variable, the variable name can go inside the curly brackets.

```rust
let x = 5;
println!("The value of x is {x}."); // The value of x is 5.
```

When printing the result of evaluating an expression, place empty curly brackets in the format string, 
then follow the format string with a comma-separated list of expressions to print in each empty curly bracket placeholder in the same order.

```rust
let x = 5;
let y = 6;
println!("The value of x is {} and the value of y is {}.", x, y); // The value of x is 5 and the value of y is 6.
println!("The value of x is {x} and the value of y is {}.", y);   // You can alse do this and it has the same output as above.
```

---
hideInToc: true
---

## Processing a Game Part I (cont.)

So the final code of first part will be:

```rust
// src/main.rs
use std::io; // Bring `io` library into code. This library provides stdin function we will use later.

fn main () {
    println!("Guess the number!!");
    println!("Please input your guess.")
    
    // Make a new string name `guess`, we will store your input later inside this variable.
    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess) // Read input into `guess`
        .expect("Failed to read line"); // If we failed to read line, `expect` will return "Failed to read line".

    println!("Your guess is: {guess}"); // This will print out the value of `guess`.
}
```

---

## Tesing of First Part

<br />

```shell
$ cargo run # Run our project.
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
    Finished dev [unoptimized + debuginfo] target(s) in 6.44s
     Running `target/debug/guessing_game`
Guess the number!!
Please input your guess.
6
Your guess is: 6
```
---

## Processing a Game Part II

Now, we need to generate a random(secret) number for user to guess.
While Rust doesn't include random number functionality, we need to import `rand` crate to use this function in our project.

Inside `Cargo.toml`, we need to add the `rand` crate.

```toml
[dependencies]
rand = "0.8.5"
```

You can think of this as a tool box and `std` is a built in tool box.
If you need any addition tool that's not inside `std`, we need to mention it explicitly in `Cargo.toml`.

Now, without changing other code in `src/main.rs`, run `cargo build`. When we include new external dependency, 
`cargo` will check it and download it inside `./target`. For more Cargo and it's ecosystem, we'll discuss in the later chapter.

---
hideInToc: true
---

## Processing a Game Part II (cont.)

To generate a random number, we write `rand::thread_rng().gen_range(1..=100)`.
1. First, we call the `rand::thread_rng()` function that gives us a particaular random number. 
2. Then, we call `gen_range()` method on the random number generator.
3. The above method takes a range expression as an argument and generates a random number in the range. So, we specify it by passing `1..=100`.

Now, we add the following into `main.rs`:
- `use rand::Rng;`
- `let secret_numner = rand::thread_rng().gen_range(1..=100);`

---
hideInToc: true
---

## Processing a Game Part II (cont.)

<br />

```rust {all|3|8}
// src/main.rs
use std::io;    // Bring `io` library into code. This library provides stdin function we will use later.
use rand::Rng;  // Use the tool box `rand::Rng` so that we can use the tool inside such as `rand::thread_rng()`.

fn main () {
    println!("Guess the number!!");

    let secret_numner = rand::thread_rng().gen_range(1..=100); // Generate the secret number using our new imported tool.

    println!("Please input your guess.")
    
    // Make a new string name `guess`, we will store your input later inside this variable.
    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess) // Read input into `guess`
        .expect("Failed to read line"); // If we failed to read line, `expect` will return "Failed to read line".

    println!("Your guess is: {guess}"); // This will print out the value of `guess`.
}
```

---
hideInToc: true
---

## Processing a Game Part II (cont.)

Comparing the guess to the input. 

```rust
// src/main.rs
use std::io;
use std::cmp::Ordering; // Import a new tool called Ordering, this could help us in comparing numbers.
use rand::Rng;

fn main () {
    // -- snip -- 
    match guess.cmp(&secret_numner) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}
```

---
hideInToc: true 
---

## Processing a Game Part II (cont.)

The `match` expression will get the return value of `guess.cmp(&secret_number)` and compare it to the following arms.  

```rust
match guess.cmp(&secret_numner) {
    Ordering::Less => println!("Too small!"),  // <- arm
    Ordering::Greater => println!("Too big!"), // <- arm
    Ordering::Equal => println!("You win!"),   // <- arm
}
```

If the return value of `guess.cmp(&secret_number)` is `Ordering::Less`, the associated code will be execute and print `Too small!` to the screen. The `match` expression
ends after the first successful match.

---
hideInToc: true
---

## Processing a Game Part II (cont.)

However, this **won't** compile. (mismatched type)

```shell
error[E0308]: mismatched types
  --> src/main.rs:22:21
   |
22 |     match guess.cmp(&secret_number) {
   |                 --- ^^^^^^^^^^^^^^ expected struct `String`, found integer
   |                 |
   |                 arguments to this function are incorrect
   |
   = note: expected reference `&String`
              found reference `&{integer}`
note: associated function defined here
```

---
hideInToc: true
---

## Processing a Game Part II (cont.)

<br />

```rust
let guess: u32 = guess.trim().parse().expect("Please type a number!");
```

<br />

<v-clicks>
    <li>The <code>trim()</code> method on a <code>String</code> will eliminate any whitespace at the beginning and end, 
        which we must do to be able to compare the string to the <code>u32</code>, which can only contain numerical data.</li>
    <li>The <code>parse()</code> method converts a string to another type.</li>
    <li>If we failed to <code>trim()</code> or <code>parse()</code>, <code>expect()</code> will return "Please type a number",</li>
</v-clicks>

---
hideInToc: true
---

## Processing a Game Part II (cont.)

Now, to make multiple guesses available, we can use `loop`.  


```rust
loop {
    println!("Please input your guess.");

    // --snip--

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => println!("You win!"),
    }
}
```

---
hideInToc: true
---

## Processing a Game Part II (cont.)

To quit after correct guess, add `break` if equal.

```rust {all|9-12}
loop {
    println!("Please input your guess.");

    // --snip--

    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => {
            println!("You win!"),
            break;
        }
    }
}
```

---

## Processing a Game Part III 

To handle invalid input, use `Ok()` and `Err()`. If `guess.trim().parse()` return `Ok()`, set `guess` to the input number, else simply `continue`.

```rust
let guess: u32 = match guess.trim().parse() {
    Ok(num) => num,
    Err(_) => continue,
};
```

---

## Recap

1. Import libraries
2. Generate the secret number
3. Use a loop to read the answer
4. If the user guess the right answer, break

---
hideInToc: true 
---

### Import libraries

<br />

```rust
use rand::Rng;
use std::cmp::Ordering;
use std::io;
```

<br />

### Generate the secret number

<br />

```rust 
fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    /* --- snip --- */
}
```

---
hideInToc: true 
---

### Use a loop to read the answer until the the user guess the right answer

<br />

```rust 
loop {
    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    let guess: u32 = match guess.trim().parse() {
        Ok(num) => num,
        Err(_) => continue,
    };

    println!("You guessed: {guess}");

    /* --- snip --- */
}
```

--- 
hideInToc: true 
---

### If the user guess the right answer, break

<br />

```rust
loop {
    /* --- snip --- */ 
    
    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal => {
            println!("You win!");
            break;
        }
    }
}
```

<br />

<Download filePath="./sources/guessing_game.rs" name="Click to download the final main.rs" />
