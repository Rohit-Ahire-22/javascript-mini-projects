# ✅ To Do List

> **A dynamic task management tool that demonstrates advanced DOM creation and manipulation.**

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Maintained-Yes-green?style=for-the-badge" alt="Maintained">
</p>

---

## 📖 Table of Contents
- [About the Project](#about)
- [Tech Stack](#tech-stack)
- [How It Works (The Logic)](#logic)
- [Features](#features)
- [Setup & Installation](#setup)
- [Collection Context](#context)

---

## 🔍 About the Project <a name="about"></a>

The **To Do List** is a fundamental CRUD (Create, Read, Update, Delete) application built with Vanilla JavaScript.

Unlike simple static pages, this project generates its entire user interface dynamically. When a user adds a task, the JavaScript engine creates new HTML elements (`div`, `span`, `button`) from scratch, styles them programmatically, and injects them into the DOM. It also handles task completion and deletion through event listeners attached to these newly created elements.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Inline Styles via JS) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (createElement, append, Event Listeners) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The core logic revolves to `document.createElement()` to build the task structure and `append()` to display it.

| Action | Code Logic | Description |
| :--- | :--- | :--- |
| **Validation** | `if(text=="") return;` | Prevents the creation of empty tasks to keep the list clean. |
| **Creation** | `document.createElement('div')` | Generates a new container for the task and its buttons dynamically. |
| **Assembly** | `parent.append(newTask, doneButton...)` | Assembles the text and buttons into a single unit before adding it to the page. |
| **Completion** | `style.textDecoration = "line-through"` | Visually marks a task as finished when the "Done" button is clicked. |
| **Deletion** | `parent.remove()` | Completely removes the specific task element from the DOM when "Delete" is clicked. |

---

## 🚀 Features <a name="features"></a>

* **⚡ Dynamic Styling**: Styles are applied directly via JavaScript (`parent.style.marginTop`), keeping the CSS logic centralized.
* **🛡️ Empty Input Guard**: Intelligently ignores clicks if the input field contains only whitespace.
* **🖱️ Interactive States**: Tasks can be marked as "Done" (grayed out) or completely deleted from the list.
* **🔄 Auto-Reset**: The input field automatically clears itself (`form.reset()`) after a task is successfully added.

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/to-do-list-project
    ```

3.  **Run the App**
    * Simply double-click `index.html` to open it in your browser.
    * *Optional:* Use Live Server in VS Code for a better experience.

---

## 📦 JavaScript Mini Projects <a name="context"></a>

> **Note:** This project is part of a larger collection.

This repository contains a collection of beginner-friendly JavaScript mini projects created to strengthen core web development concepts.

Each project focuses on a specific idea such as **DOM manipulation**, **events**, **logic building**, and **user interaction**. The projects are built using **pure HTML, CSS, and JavaScript** without any external frameworks.

This repository is ideal for students and beginners who want hands-on practice with JavaScript. Each project is organized in its own folder with a separate README file explaining its functionality.

The goal of this repository is to learn by building small but practical applications. These projects help improve problem-solving skills and real-world coding experience. The code is kept simple, readable, and easy to understand.

* **Run any project:** Open its `index.html` file in a browser.
* **Contribution:** Contributions, improvements, and suggestions are welcome.
* **Growth:** This repository will continue to grow as more projects are added.

**Learning by doing is the main focus of this collection.**

Happy coding! 🚀
