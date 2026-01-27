# 🔢 Simple Digital Counter

> **A fundamental state management tool allowing instant increment, decrement, and reset operations.**

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

The **Simple Digital Counter** is a classic beginner project that demonstrates the basics of **State Management** in Vanilla JavaScript.

It maintains a single variable in memory (`cnt`) and updates the Document Object Model (DOM) dynamically whenever the user interacts with the control buttons. It serves as a perfect example of how to bridge the gap between data (JavaScript variables) and the user interface (HTML).

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Transitions, Hover Effects) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (Event Handlers, DOM Updates) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The application relies on three distinct event handlers attached to the buttons. Each handler modifies a global `let` variable and immediately pushes the new state to the UI.

| Operation | Code Logic | Description |
| :--- | :--- | :--- |
| **Initialization** | `let cnt = 0;` | Sets the starting state of the counter to zero. |
| **Increment** | `cnt++` | Increases the stored value by 1 when "Increase" is clicked. |
| **Decrement** | `cnt--` | Decreases the stored value by 1 when "Decrease" is clicked. |
| **Reset** | `cnt = 0` | Hard resets the variable back to its initial state. |
| **UI Sync** | `count.textContent = cnt` | Updates the HTML label to reflect the new JavaScript variable value. |

---

## 🚀 Features <a name="features"></a>

* **⚡ Instant Feedback**: State changes are reflected immediately in the DOM without reloading.
* **🎨 Interactive UI**: Buttons feature smooth transition effects (`0.25s`) that change background color on hover.
* **Typography**: Uses a massive `10em` font size for high visibility of the counter value.
* **🖱️ Pointer Cursors**: Improves usability by changing the cursor to a pointer when hovering over controls.

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/counter-project
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
