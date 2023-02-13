
myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (e) {
    e.preventDefault(); // It will helps to stop reload

    // Targeting all values 
    const Email = document.getElementById("inputEmail4").value;
    const Password = document.getElementById("inputPassword4").value;
    const Address = document.getElementById("inputAddress").value;
    const City = document.getElementById("inputCity").value;
    const State = document.getElementById("inputState").value;
    if (Email == "" || Password == "" || Address == "" || City == "" || State =="") {
        alert("Please Filled Up the Complete Form")
    } else {
        
    }
    // Making Object 
    var Data = {
        Email: Email,
        Password: Password,
        Address: Address,
        City: City,
        State: State
    };
    console.log(Data);

    // Table Stripes 
    document.getElementById('demo').innerHTML += `<tr>
    <td>${Data.Email}</td>
    <td>${Data.Password}</td>
    <td>${Data.Address}</td>
    <td>${Data.City}</td>
    <td>${Data.State}</td> </tr>`
})


// Edit 
// Delete and 