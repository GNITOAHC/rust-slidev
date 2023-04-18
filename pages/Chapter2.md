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

```rust {all|2|2,4,7}
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

| Length  | Signed | Unsigned |
| ------- | ------ | -------- |
| 8-bit   | i8     | u8       |
| 16-bit  | i16    | u16      |
| 32-bit  | i32    | u32      |
| 64-bit  | i64    | u64      |
| 128-bit | i128   | u128     |
| arch    | isize  | usize    |

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

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />

---

### Main function

`main` function: Entry point of a program.

```rust
fn main() {
    println!("Hello, world!");
}
```

<br />

> An entry point is the place in a program where the execution of a program begins,
> and where the program has access to command line arguments.

---
hideInToc: true
---

### Main function (cont.)

<br />

> Rust code uses snake case as the conventional style for function and variable names

<br />

```rust {all|4,7-9}
fn main() {
    println!("Hello, world!");

    another_function();
}

fn another_function() {
    println!("Another function.");
}
```

<br />

> Snake case: `let number_of_donuts = 5`  
> Kebab case: `let number-of-donuts = 5`  
> Camel case: `let numberOfDonuts = 5`  
> Pascal case: `let NumberOfDonuts = 5`

---

### Parameters

```rust {all|2,6-9|3,11-14}
fn main() {
    another_function(5);
    print_labeled_measurement(5, 'h');
}

// Single parameter
fn another_function(x: i32) {
    println!("The value of x is: {x}"); // The value of x is: 5
}

// Multi-parameters
fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {value}{unit_label}"); // The measurement is: 5h
}
```

---

### Statements and Expressions

**Statements** are instructions that perform some action and _do not return a value_.  
**Expressions** evaluate to a _resultant value_.

<br />

```rust {all|3|4}
fn main() {
    let y = {
        let x = 3; // Statement, which set x to 3
        x + 1 // Expression, which return `x + 1`
    };

    println!("The value of y is: {y}"); // The value of y is 4
}
```

The `x + 1` doesn't have a semicolon at the end of the line, which return the value of `x + 1`.  
If you add a semicolon at the end of the line, you turn it into a statement, which does not return a value.

---

### Functions with Return values

<br />

```rust
// Perfectly valid function in Rust
fn five() -> i32 {
    5
}
```

Another example:

```rust {all|2,5,10|3,6,14}
fn main() {
    let x = plus_one(5);
    let y = plus_two(5); // Error

    println!("The value of x is: {x}"); // `The value of x is: 6`
    println!("The value of y is: {y}"); // Error
}

fn plus_one(x: i32) -> i32 {
    x + 1  // Expression, which return `x + 1` as an i32
}

fn plus_two(x: i32) -> i32 { // This function requires a return with type i32.
    x + 2; // Statement, which do not return an i32, and therefore no return value in this function -> Error
}
```

---

## 2.4 Comments

- Add `//` before your comment

```rust
// This is a comment
fn main() {
    println!("Hello, world"); // This is a comment, too.
}
```

---

## 2.5 Control Flow

<Toc listClass="toc" minDepth="3" mode="onlyCurrentTree" />

---

### If experssion

Example:

```rust
fn main() {
    let number = 6; // Set number to 6

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 { // 6 % 3 equal to 0, therefore use this condition
        println!("number is divisible by 3"); // number is divisible by 3
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
```

---
hideInToc: true
---

### If expression (cont.)

Using `if` in `let` statement

```rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {number}"); // The value of number is: 5
}
```

If the types are mismatched, as in the following example, we’ll get an error.

```rust {all|4}
fn main() {
    let condition = true;

    let number = if condition { 5 } else { "six" };

    println!("The value of number is: {number}"); // Error
}
```

---
hideInToc: true
---

### If expression (cont.)

Error message:

```shell {all|7,9}
$ cargo run
   Compiling branches v0.1.0 (file:///projects/branches)
error[E0308]: `if` and `else` have incompatible types
 --> src/main.rs:4:44
  |
4 |     let number = if condition { 5 } else { "six" };
  |                                 -          ^^^^^ expected integer, found `&str`
  |                                 |
  |                                 expected because of this

For more information about this error, try `rustc --explain E0308`.
error: could not compile `branches` due to previous error
```

---

### Loop

Rust has three kinds of loops: `loop`, `while`, and `for`.

<Toc listClass="toc" minDepth="4" maxDepth="4" mode="onlyCurrentTree" columns="1" />

---

#### loop

<br />

```rust {all|2|5|4|7|8|12}
fn main() {
    let mut counter = 0; // First, set counter to 0.

    let result = loop {
        counter += 1; // Every loop iteration, counter is incremented by 1.

        if counter == 10 { 
            break counter * 2; // When counter reaches 10, break with `counter * 2`.
        }
    };

    println!("The result is {result}"); // `The result is 20`
}
```

---
hideInToc: true
---

#### loop (cont.)

- If you have loops within loops, `break` and `continue` apply to the innermost loop at that point. \
  You can optionally specify a _loop label_ on a loop that you can then use with `break` or `continue` to \
  specify that those keywords apply to the labeled loop instead of the innermost loop.

- Loop labels must begin with a single quote.

Ex.

```rust
break 'label
```

---
hideInToc: true
---

#### loop (cont.)

Example:

```rust {all|2|3-5|7-16|15|9-11|18|3-5|7-16|12-14|20|all}
fn main() {
    let mut count = 0; // Set count to 0.
    'counting_up: loop { // label `counting_up`
        println!("count = {count}");
        let mut remaining = 10; // Set remaining to 10

        loop {
            println!("remaining = {remaining}");
            if remaining == 9 { // When remaining is 9.
                break; // Doesn't specify a lable, will exit the inner loop only.
            }
            if count == 1 {
                break 'counting_up; // Will exit the outer loop
            }
            remaining -= 1; // Every loop iteration will decrece the remaining by 1.
        }

        count += 1;
    }
    println!("End count = {count}"); // `End count = 1`
}
```

---
hideInToc: true
---

#### loop (cont.)

<br />

```shell
# Example outout: 
count = 0       # line 4: `println!("count = {count}");`
remaining = 10  # line 8: `println!("remaining = {remaining}");`
remaining = 9   # After one inner loop iteration, print remaining value
count = 1       # line 4: Print count value after breaking inner loop iteration
remaining = 10  # line 5: Reset remaining value to 10j
End count = 1   # line 20: While count value isn't reset, `count = 1` and break outer loop
```

---

#### while

```rust
fn main() {
    let mut number = 3;

    while number != 0 { // When number isn't equal to 0, continue the loop.
        println!("{number}!"); // Every loop iteration will print number with `!` at the end.

        number -= 1; // Every loop iteration will decrete number by 1.
    }

    println!("LIFTOFF!!!"); // After loop iteration, print `LIFTOFF!!`
}
```

Output:

```shell
3!
2!
1!
LIFTOFF!!!
```

---

#### for

```rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a { // Iterate through the element in array a as `element`
        print!("{element}, "); // 10, 20, 30, 40, 50,
    }

    //or

    for number in (1..4).rev() { // Iterate through the element from 1 to 4 in reverse order as `number`
        println!("{number}, "); // 3, 2, 1,
    }
}
```

---
hideInToc: true
---

#### for (cont.)

<br />

```rust
for e in 1..4 { // Only iterate through 1 to 3 
    println!("{e}, "); // 1, 2, 3,
}
```

If you want to iterate through the elements contain start and end, use `..=` instead.

```rust
for e in 1..=4 {
    println!("{e}, "); // 1, 2, 3, 4, 
}
```
