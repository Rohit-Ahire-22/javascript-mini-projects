const body = document.querySelector('body');

body.addEventListener('click', (e) => {

    const circleEle = document.createElement('div');
    circleEle.classList.add("circle");

    const hellos = [
        "Hello",
        "Hola",
        "Bonjour",
        "Ciao",
        "Hallo",
        "Olá",
        "Namaste",
        "Salaam",
        "Konnichiwa",
        "Annyeong",
        "Nǐ hǎo",
        "Merhaba",
        "Zdravstvuyte",
        "Hej",
        "Ahoj",
        "Xin chào",
        "Sawubona",
        "Salve",
        "Halo",
        "Yassas"
    ];


    const colors = [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#F1C40F",
        "#9B59B6",
        "#1ABC9C",
        "#E74C3C",
        "#2ECC71",
        "#3498DB",
        "#E67E22",
        "#ECF0F1",
        "#95A5A6",
        "#34495E",
        "#16A085",
        "#27AE60",
        "#2980B9",
        "#8E44AD",
        "#C0392B",
        "#D35400",
        "#2C3E50"
    ];



    circleEle.textContent = hellos[Math.floor(Math.random()*hellos.length)];
    circleEle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    circleEle.style.top = `${e.clientY - 25}px`;
    circleEle.style.left = `${e.clientX - 25}px`;

    body.append(circleEle);

    setTimeout(() => {
        circleEle.remove();
    }, 5000);

});