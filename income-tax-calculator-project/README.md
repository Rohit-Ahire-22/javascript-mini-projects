# 💰 Income Tax Calculator

> **A financial utility tool that calculates progressive tax liability based on income slabs.**

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

The **Income Tax Calculator** is a logic-driven application designed to simplify complex financial calculations.

It implements a **Progressive Tax Regime** system where different portions of a user's income are taxed at different rates. Instead of a flat percentage, the application uses a "tiered" approach (Slabs) to compute the exact tax payable in Rupees (₹). It serves as a practical demonstration of complex **Conditional Logic (`if-else-if`)** in JavaScript.

---

## 🛠️ Tech Stack <a name="tech-stack"></a>

| Domain | Technologies Used |
| :--- | :--- |
| **Structure** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) |
| **Styling** | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) (Inline Styles, Flexbox) |
| **Logic** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) (Conditional Branching, Form Handling) |

---

## ⚙️ How It Works (The Logic) <a name="logic"></a>

The core engine relies on an `if-else-if` ladder that categorizes the input income into specific brackets. It calculates tax on the *exceeding amount* for that specific bracket and adds the cumulative tax from lower brackets.

| Income Slab (₹) | Tax Rate | Calculation Logic |
| :--- | :--- | :--- |
| **0 - 12,00,000** | **0%** | `calc = 0` (Tax Free) |
| **12L - 16,00,000** | **15%** | `(Income - 12L) * 0.15` |
| **16L - 20,00,000** | **20%** | `(Income - 16L) * 0.20 + 60,000` (Prev Slab Tax) |
| **20L - 24,00,000** | **25%** | `(Income - 20L) * 0.25 + 1,40,000` (Cumulative Tax) |
| **Above 24,00,000** | **30%** | `(Income - 24L) * 0.30 + 2,40,000` (Cumulative Tax) |

---

## 🚀 Features <a name="features"></a>

* **⚡ Form Control**: Uses `e.preventDefault()` to process data instantly without reloading the page.
* **🔄 Auto-Reset**: Automatically clears the input field after every calculation for a smooth user experience.
* **🌑 Dark Theme**: Features a deep black background (`rgba(0, 0, 0, 0.945)`) with white text for high contrast.
* **💲 Currency Formatting**: Outputs the final result with the Indian Rupee symbol (`₹`).

---

## 💻 Setup & Installation <a name="setup"></a>

Since this project uses **Vanilla JavaScript**, no `npm install` or build steps are required.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Rohit-Ahire-22/javascript-mini-projects.git
    ```

2.  **Navigate to the Folder**
    ```bash
    cd javascript-mini-projects/income-tax-calculator-project
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
