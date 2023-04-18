---
theme: seriph

# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080

# apply any windi css classes to the current slide
class: 'text-center'

# https://sli.dev/custom/highlighters.html
highlighter: shiki

# show line numbers in code blocks
lineNumbers: true

# some information about the slides, markdown enabled
info: |
  ## Rust Programming Language
  Have fun !!

  Learn more at [Rust](https://www.rust-lang.org/)

# persist drawings in exports and build
drawings:
  persist: false

# page transition
transition: slide-left

# use UnoCSS
css: unocss

hideInToc: true
title: Rust
---

# Welcome to Rust Slidev

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Start <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/gnitoahc/rust-slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

--- 

<Toc listClass="toc" maxDepth="1" />

---
src: ./pages/Chapter1.md
hide: false
---

---
src: ./pages/Chapter2.md
hide: false
---

---
src: ./pages/Chapter3.md
hide: false
---

---
layout: center 
hideInToc: true
---

<div>
  <a href="https://github.com/gnitoahc/rust-slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="mailto:chaotingchen10@gmai1.com" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-send-filled />
  </a>
  <a href="https://www.linkedin.com/in/chaoting-chen/" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-linkedin />
  </a>
</div>
