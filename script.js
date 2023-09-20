document.addEventListener("DOMContentLoaded", function () {
    const changeColorButton = document.getElementById("changeColorButton");

    // Array of background colors to cycle through
    const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff57e3"];

    let currentColorIndex = 0;

    // Function to change the background color
    function changeBackgroundColor() {
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    // Add a click event listener to the button
    changeColorButton.addEventListener("click", changeBackgroundColor);
    
});