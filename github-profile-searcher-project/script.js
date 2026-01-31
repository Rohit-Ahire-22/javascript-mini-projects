const parent = document.getElementById("first");
const h1 = document.querySelector('h1');

async function func1() {

    try {
        const response = await fetch("https://api.github.com/users");
        if (!response.ok) {
            throw new Error("Data is not found");
        }
        const data = await response.json();

        for (let user of data) {

            const ele = document.createElement('div');
            ele.classList.add("user");

            const img = document.createElement('img');
            img.src = user.avatar_url;

            const name = document.createElement('h2');
            name.textContent = user.login;

            const link = document.createElement('a');
            link.href = user.html_url;
            link.textContent = "View Profile";
            link.target = "_blank";

            ele.append(img, name, link);
            parent.append(ele);
        }
    } catch (error) {
        h1.textContent = error;
    }
}

func1();