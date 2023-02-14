const Email = document.getElementById('inputEmail4');
const Password = document.getElementById('inputPassword4');
const updating = document.getElementById("updating");
updating.classList.add("disabled");
var itemsArray = [];

// Onload 
function showData() {
    
    data1 = JSON.parse(localStorage.getItem('items'));
    console.log(data1);
    data1.forEach((i) => {
        document.getElementById("data").innerHTML += `<tr>
            <td>${i.Email}</td>
            <td>${i.Password}</td>
            <td><button class='btn btn-outline-secondary' data-toggle='modal' onclick='openMod(this)' data-target='#exampleModalCenter'>Edit</button>
            <button class='btn btn-outline-danger' onclick='deleteAl(this)'>Delete</button></td>
            </tr> `
    })
}
// Onload 

// Add Data 
function addData() {
    userdetail = {
        Email: Email.value,
        Password: Password.value
    };

    itemsArray.push(userdetail)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    data1 = JSON.parse(localStorage.getItem('items'));
    console.log(data1);
    

    // // console.log(localStorage);
    // localStorage.setItem("Data",userdetail);
    // console.log(localStorage);
    // // localStorage.setItem("Password",Password.value);

    document.getElementById("data").innerHTML += `<tr>
    <td>${Email.value}</td>
    <td>${Password.value}</td>
    <td><button class='btn btn-outline-secondary' onclick='openMod(this)' data-toggle='modal' data-target='#exampleModalCenter'>Edit</button>
    <button class='btn btn-outline-danger' onclick='deleteAl(this)'>Delete</button></td>
    </tr>
    `
}

// Add Data 


// Delete Data 
function deleteAl(e) {
    e.parentElement.parentElement.remove();
}
// Delete Data 

// Edit 
function openMod(e) {
    
    Email.value = e.parentElement.parentElement.cells[0].innerHTML;
    Password.value = e.parentElement.parentElement.cells[1].innerHTML;
    return updating.classList.remove("disabled");
}
// Edit 


