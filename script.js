document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'price' (matching the HTML table class)
    let priceElements = document.querySelectorAll(".price");

    const getSumBtn = document.createElement("button");
    getSumBtn.append("Get Total Price");
    document.body.appendChild(getSumBtn);

    const getSum = () => {
        let totalPrice = 0;

        // Loop through the price elements and sum up their values
        priceElements.forEach(function (priceElement) {
            totalPrice += parseFloat(priceElement.textContent) || 0; // Ensure it's a number
        });

        // Remove any existing total row before adding a new one
        let existingTotalRow = document.querySelector(".total-price-row");
        if (existingTotalRow) {
            existingTotalRow.remove();
        }

        // Create a new row
        let table = document.querySelector("table");
        let newRow = document.createElement("tr");
        newRow.classList.add("total-price-row");
        let totalCell = document.createElement("td");

        // Set colspan to span all columns (assuming two columns: Item and Price)
        totalCell.setAttribute("colspan", "2");
        totalCell.style.fontWeight = "bold";
        totalCell.textContent = "Total Price: Rs " + totalPrice.toFixed(2);

        // Append the totalCell to the newRow and the newRow to the table
        newRow.appendChild(totalCell);
        table.appendChild(newRow);
    };

    getSumBtn.addEventListener("click", getSum);
});


