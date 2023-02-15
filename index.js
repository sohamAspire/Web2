const Email = document.getElementById('inputEmail4');
const myForm  = document.getElementById('myForm') 
const Password = document.getElementById('inputPassword4');
const updating = document.getElementById("updating");

updating.classList.add("hide");


// Onload 
function showData() {
    data1 = JSON.parse(localStorage.getItem('items'));
    console.log(data1);
    data1.forEach((i , index) => {
        document.getElementById("data").innerHTML += `<tr>
            <td>${i.Email}</td>
            <td>${i.Password}</td>
            <td><button class='btn btn-outline-secondary' data-toggle='modal' onclick='openMod(this,${index})' data-target='#exampleModalCenter'>Edit</button>
            <button class='btn btn-outline-danger' onclick='deleteAl(this,${index})'>Delete</button></td>
            </tr> `
    })
}
// Onload 

// Add Data 
function addData() {
    updating.classList.add("hide");
    if (localStorage.getItem("items") == null) {     
        var itemsArray = [];
    }
    else{
        var itemsArray = JSON.parse(localStorage.getItem("items"))
    }

    userdetail = {
        Email: Email.value,
        Password: Password.value
    };

    itemsArray.push(userdetail)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    data1 = JSON.parse(localStorage.getItem('items'));
    console.log(data1);
}

// Add Data 


// Delete Data 
function deleteAl(e ,ind) {
   data = JSON.parse(localStorage.getItem('items'));
   data.splice(ind, 1)
   localStorage.setItem('items',JSON.stringify(data))
   e.parentElement.parentElement.remove();
}
// Delete Data 

// Edit 
function openMod(e , id) {
    updating.classList.remove("hide");
    Email.value = e.parentElement.parentElement.cells[0].innerHTML;
    Password.value = e.parentElement.parentElement.cells[1].innerHTML;
    btn = document.getElementById("updating");
    data = JSON.parse(localStorage.getItem('items'));
    btn.addEventListener("click", function () {
       data[id] = {
            Email : Email.value,
            Password: Password.value
       }
       console.log(data);
       localStorage.setItem('items',JSON.stringify(data))
    })
}

// Edit 