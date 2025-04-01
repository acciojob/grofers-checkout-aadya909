document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'price' (matching the HTML table class)
    let priceElements = document.querySelectorAll(".price");

    const getSumBtn = document.createElement("button");
    getSumBtn.append("Get Total Price");
    document.body.appendChild(getSumBtn);

    // Create an answer display element if it doesn't exist
    let ansElement = document.getElementById("ans");
    if (!ansElement) {
        ansElement = document.createElement("div");
        ansElement.id = "ans";
        document.body.appendChild(ansElement);
    }

    const getSum = () => {
        let totalPrice = 0;

        // Loop through the price elements and sum up their values
        priceElements.forEach(function (priceElement) {
            totalPrice += parseFloat(priceElement.textContent) || 0; // Ensure it's a number
        });

        // Update the ans element with the total price
        ansElement.textContent = "Total Price: Rs " + totalPrice.toFixed(2);
    };

    getSumBtn.addEventListener("click", getSum);
});



