# 🎨 Background Color Switcher

> **A highly efficient DOM manipulation project demonstrating Event Bubbling and Delegation.**

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

The **Background Color Switcher** is a minimalistic yet powerful demonstration of **JavaScript Event Delegation**.

Instead of writing repetitive code to handle clicks for every single button, this application uses the concept of **Event Bubbling**. By attaching a single event listener to the parent container, the application detects which child element was clicked and updates the DOM instantly. This approach significantly reduces memory usage and improves performance.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Inline Styles) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (Event Delegation) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The core logic relies on capturing the `e.target` property within a parent event listener. This allows for a clean, one-line execution to change the entire page theme.

| Component | The Code Logic | Why It's Efficient |
| :--- | :--- | :--- |
| **The Trigger** | `parent.addEventListener("click", ...)` | Uses **1 listener** instead of 5 separate ones. |
| **The Target** | `e.target.id` | Dynamically grabs the ID (`red`, `green`, etc.) of the clicked element. |
| **The Action** | `document.body.style.backgroundColor = ...` | Applies the color ID directly to the body background. |

---

## 🚀 Features <a name="features"></a>

* **⚡ Instant State Change**: Updates the DOM immediately upon user interaction.
* **🧠 Event Delegation**: Demonstrates advanced DOM handling by leveraging event bubbling.
* **🎨 Dynamic IDs**: The color logic is tied directly to HTML IDs, making the code scalable—add a new button with a color ID, and it works automatically.
* **📱 Responsive Layout**: Simple, browser-native button rendering.

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    Replace `your-username` with your GitHub username
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

3.  **Navigate to the Folder**
    ```bash
    cd my-js-project/background-color-changer-project
    ```

4.  **Run the App**
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
