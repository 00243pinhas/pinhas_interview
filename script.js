function fetchData() {
    fetch('/index.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // console.log(data); 

            populating(data);
        })
        .catch(error => console.error('Error:', error));
}

function populating(datas){
    
    const tableOfTask = document.getElementById("bodyTable");

    tableOfTask.innerHTML="";
    
    datas.forEach(function(data){

        let row = document.createElement("tr");

        row.innerHTML= `
            <td>${data.task}</td>
            <td>${data.title}</td>
            <td>${data.description}</td>
            <td class="color_code">${data.colorCode}</td>
        `
        // console.log(row)

        tableOfTask.appendChild(row);


        const colorBackgound = document.querySelectorAll(".color_code");

        colorBackgound.forEach(function(color){
        
            let actualColor = color.innerHTML ;
        
            color.style.background = actualColor;
        })
        
    })  


}

fetchData();

setInterval(fetchData, 3600000 ); 