const Email = document.getElementById('inputEmail4');
const Password = document.getElementById('inputPassword4');
var itemsArray = [];

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
    <td>${localStorage.getItem("Email")}</td>
    <td>${localStorage.getItem("Password")}</td>
    <td><button class='btn btn-outline-secondary' onclick='openMod(this)'>Edit</button>
    <button class='btn btn-outline-danger' onclick='deleteAl(this)'>Delete</button></td>
    </tr>
    `
}

// console.log(localStorage);
function showData() {
    data1 = JSON.parse(localStorage.getItem('items'));
    console.log(data1);
    data1.forEach((i) => {
        document.getElementById("data").innerHTML += `<tr>
            <td>${i.Email}</td>
            <td>${i.Password}</td>
            <td><button class='btn btn-outline-secondary' data-toggle='modal' data-target='#exampleModalCenter'>Edit</button>
            <button class='btn btn-outline-danger' onclick='deleteAl(this)'>Delete</button></td>
            </tr> `
    })
}

function deleteAl(e) {
    e.parentElement.parentElement.remove();
}

function openMod(e) {
    data1 = JSON.parse(localStorage.getItem('items'));
    Email.value = i.Email;
    Password.value = i.Password;
}