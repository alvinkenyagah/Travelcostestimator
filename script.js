
let form = document.getElementById("form")

form.addEventListener("submit", (e)=>{


    let fuelcost= parseFloat(document.getElementById("fuelcost").value)
    let mpg = parseFloat(document.getElementById("mpg").value)
    let distance = parseFloat(document.getElementById("distance").value)

    let result = document.getElementById("result")

    let estimatedCost = fuelcost*distance/mpg

    // if(fuelcost || mpg || distance != typeof(0.01) || NaN){
    //     result.innerHTML = `
        
    //     <h1 style="color:red; ">Error please input a valid number<h1/>
        
    //     `
    // }
    // else {
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
            <td>${Math.round(estimatedCost)}</td>
        </tr>       
    </tbody>
</table>


    
    `
    // }


    e.preventDefault()
})
