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


function searcFuntion (){
    let input = document.getElementById('searchbar').value          
    input = input.toLowerCase();
 
    let rowContainsSearchText ;

    let table = document.getElementById("tasksTable");
    let rows = table.getElementsByTagName("tr");

    
    for (let i = 1 ; i < rows.length ; i++){
        let cell = rows[i].getElementsByTagName('td');

         rowContainsSearchText = false;

        for ( let j = 0 ; j < cell.length; j++){

            if (cell[j].textContent.toLocaleLowerCase().includes(input)){
                 rowContainsSearchText = true;

            }

        }
        rows[i].style.display = rowContainsSearchText ? '' : 'none';


    }
}

document.getElementById('searchbar').addEventListener('input', searcFuntion);

document.getElementById("openModalBtn").addEventListener("click", function() {
    document.getElementById('imageModal').style.display = 'block';
});

document.getElementById("closeModalBtn").addEventListener("click", function() {
    document.getElementById('imageModal').style.display = 'none';
});

document.getElementById("imageInput").addEventListener("change",function(event){

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e){
        const imagePreview = document.getElementById("imagePreview");
        imagePreview.innerHTML = `<img src="${e.target.result}" alt="Selected Image">`;
    }

        if (file) {
        reader.readAsDataURL(file);
    }


})
