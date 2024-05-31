
let form = document.getElementById("form")

form.addEventListener("submit", (e)=>{


    let fuelcost= document.getElementById("fuelcost").value
    let mpg = document.getElementById("mpg").value
    let distance = document.getElementById("distance").value

    let result = document.getElementById("result")

    let estimatedCost = fuelcost*distance/mpg

    result.innerHTML= `
    
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
            <td>${fuelcost}</td>
            <td>${distance}</td>
            <td>${mpg}</td>
            <td>${estimatedCost}</td>
        </tr>       
    </tbody>
</table>


    
    `



    e.preventDefault()
})
