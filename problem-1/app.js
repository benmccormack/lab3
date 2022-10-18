function addContact(){
    //retrieving information from the form fields
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;

    // finding the contact table
    var table = document.getElementById("contacts");

    // inserting a row into the contact table
    var row = table.insertRow();

    // Inserting the cells into the rows
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Adding the text to the rows
    cell1.innerHTML = name;
    cell2.innerHTML = number;
    cell3.innerHTML = email;
}

