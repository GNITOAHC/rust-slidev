---
info: |
  Chapter 2: Common Programming Concepts
transition: slide-left
layout: center
---

# Chapter 2: Common Programming Concepts

<Toc listClass="toc" minDepth="2" maxDepth="3" mode="onlyCurrentTree" columns="3" />

<!--
Here is another comment.
-->

---

## 2.1 Variables and Mutability

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />

---

### Mutable & Immutable

When a variable is immutable, once it bound to a name, it's can't be change.

```rust
fn main() {
    let x = 5; // Declare a variable
    println!("The value of x is: {x}");
    x = 6; // Error: cannot assign twice to immutable variable
    println!("The value of x is: {x}"); // Error
}
```

---
hideInToc: true
---

### Mutable & Immutable (cont.)

Error message

```sh {all|9-10}
    $ cargo run
       Compiling variables v0.1.0 (file:///projects/variables)
    error[E0384]: cannot assign twice to immutable variable `x`
     --> src/main.rs:4:5
      |
    2 |     let x = 5;
      |         -
      |         |
      |         first assignment to `x`
      |         help: consider making this binding mutable: `mut x`
    3 |     println!("The value of x is: {x}");
    4 |     x = 6;
      |     ^^^^^ cannot assign twice to immutable variable

    For more information about this error, try `rustc --explain E0384`.
    error: could not compile `variables` due to previous error
```

---
hideInToc: true
---

### Mutable & Immutable (cont.)

Change `x` to mutable variable.

```rust {all|2}
fn main() {
    let mut x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
```

Change from `let x = 5` to `let mut x = 5`.

---

### Constants

Like immutable variables, constants are values that are bound to a name and are not allowed to change, 
but there are a few differences between constants and variables.

<v-clicks>
    <li><b><i>Not</i></b> allow to use `mut` with constants.</li>
    <li>Constants aren’t just immutable by default — they’re <b><i>always</i></b> immutable.</li>
    <li>You declare constants using the `const` keyword instead of the `let` keyword.</li>
    <li>The type of the value <b><i>must</i></b> be annotated.</li>
    <li>i.e. <code>const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;</code></li>
</v-clicks>

---

### Shadowing 

We can shadow a variable by repeating the use of `let`. 

```rust {all|1|3,5,8}
fn main() {
    let x = 5;

    let x = x + 1;

    {
        let x = x * 2;
        println!("The value of x in the inner scope is: {x}"); // The value of x in the inner scope is: 12
    }

    println!("The value of x is: {x}"); // The value of x is: 6
}
```

---
hideInToc: true
---

### Shadowing (cont.)

Shadowing is different from marking a variable as `mut` 
because we’ll get a compile-time error if we accidentally try to reassign to this variable without using the `let` keyword.  

```rust
fn main() {
    let x = 5;

    let x = x + 1; // Ok
    x = x + 1; // Compile-time error.
}
```

But with `mut` on the other hand.

```rust
fn main() {
    let mut x = 5;

    x = x + 1; // Ok
}
```

---
hideInToc: true
---

### Shadowing (cont.)

The other difference between `mut` and shadowing 
is that because we’re effectively creating a new variable when we use the `let` keyword again 
we can change the type of the value but reuse the same name.

Example:  

```rust
fn main() {
    let spaces = "   ";
    let spaces = spaces.len();
}
```

Error:  

```rust
fn main() {
    let mut spaces = "   ";
    spaces = spaces.len(); // Not allowed to mutate a variable’s type
}
```

---

## 2.2 Data types 

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />

---

### Scalar Types

<Toc listClass="toc" minDepth="4" mode="onlyCurrentTree" />

---

#### Integer Types

| Length | Signed | Unsigned |
| - | - | - |
|8-bit|i8|u8|
|16-bit|i16|u16|
|32-bit|i32|u32|
|64-bit|i64|u64|
|128-bit|i128|u128|
|arch|isize|usize|

---

#### Floating-Point Types

<br />

```rust 
fn main() {
    let x = 2.0; // f64 is default

    let y: f32 = 3.0; // f32
}
```

---

#### The Boolean Type

<br />

```rust 
fn main() {
    let t = true;

    let f: bool = false; // with explicit type annotation
}
```

---

#### The Character Type

<br />

```rust
fn main() {
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';
}
```

<br />

> Rust’s `char` type is four bytes in size and represents a Unicode Scalar Value,  
> which mean it can represents a lot more than ASCII (even emoji)

---

### Compound Types

<Toc listClass="toc" minDepth="4" mode="onlyCurrentTree" />

---

#### Tuples

Declare approach 1

```rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
}
```

Declare approach 2

```rust
fn main() {
    let tup = (500, 6.4, 1); // Create tup

    let (x, y, z) = tup; // Bind 3 seperate variables

    println!("The value of y is: {y}"); // The value of y is: 6.4
}
```

---
hideInToc: true
---

#### Tuples (cont.)

We can also access a tuple element directly by using a period (`.`) followed by the index of the value we want to access.

```rust
fn main() {
    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
}
```

---

#### Array

Write the values in an array as a comma-separated list inside square brackets. 

```rust
fn main() {
    let a = [1, 2, 3, 4, 5];
    let b: [i32; 5] = [1, 2, 3, 4, 5];
    let c = [3; 5]; // Same as `let c = [3, 3, 3, 3, 3];`
    let months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
}
```

Accessing array elements 

```rust
fn main() {
    /* declare as above*/
    println!("{}, {}, {}, {}", a[0], b[2], c[3], months[4]); // 1, 3, 3, May
}
```

---

## 2.3 Functions

---

## 2.4 Comments

---

## 2.5 Control Flow

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />

---

### If experssion

---

### Loop
