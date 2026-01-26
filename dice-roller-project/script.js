

function diceShow() {
    const myInput = document.getElementById("myInput");
    const myButton = document.getElementById("myButton");
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");

    let values = [];
    let images = [];
    let input;
    input = myInput.value;
    for (let i = 0; i < input; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="dice ${value}">`);
    }
    diceResult.textContent = `Dice : ${values.join(", ")}`;
    diceImg.innerHTML = images.join(" ");
}

