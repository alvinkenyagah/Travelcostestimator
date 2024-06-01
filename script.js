// Get the form element
let form = document.getElementById("form");

// Add an event listener for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Retrieve and parse input values
    let fuelCost = parseFloat(document.getElementById("fuelcost").value);
    let mpg = parseFloat(document.getElementById("mpg").value);
    let distance = parseFloat(document.getElementById("distance").value);

    // Calculate the estimated cost
    let estimatedCost = calculateEstimatedCost(fuelCost, mpg, distance);

    // Update the result in the DOM
    updateResult(fuelCost, distance, mpg, estimatedCost);
});

// Function to calculate the estimated cost
function calculateEstimatedCost(fuelCost, mpg, distance) {
    return fuelCost * distance / mpg;
}

// Function to update the result in the DOM
function updateResult(fuelCost, distance, mpg, estimatedCost) {
    let result = document.getElementById("result");
    result.innerHTML = generateResultHTML(fuelCost, distance, mpg, estimatedCost);
}

// Function to generate the result HTML
function generateResultHTML(fuelCost, distance, mpg, estimatedCost) {
    return `
        <table>
            <thead>
                <tr>
                    <th>Fuel Cost</th>
                    <th>Distance</th>
                    <th>Average MPG</th>
                    <th>Estimated Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${fuelCost.toFixed(2)}</td>
                    <td>${distance.toFixed(2)}</td>
                    <td>${mpg.toFixed(2)}</td>
                    <td>${Math.round(estimatedCost)}</td>
                </tr>       
            </tbody>
        </table>
    `;
}
