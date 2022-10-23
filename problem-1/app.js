function addContact(){
    //retrieving information from the form fields
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;

    var error = document.getElementById("noResult");

    if(name.length >= 20 || number.length ==10 || email.length >= 40){
        error.style.display = "none";
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

        //running the function to change the row color - we're going to have to run this again on sort.
        rowColor();
        //resetting the form fields
        document.getElementById("contactForm").reset();
    } else {
        //show the error div with text
    }
}

function rowColor(){
    //get the rows
    var table = document.getElementById("contacts");
    var row = document.getElementsByTagName("tr");

    //cycle through all rows and change the color of every second row.
    for(let i=0; i<row.length; i++){
        if(i % 2 == 0){
            row[i].style.backgroundColor = '#ffffff';
        }
        else{
            row[i].style.backgroundColor = '#f2f2f2';
        }
    }
}

function filterContacts(){
    var input = document.getElementById("search");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("contacts");
    var row = document.getElementsByTagName("tr");
    var error = document.getElementById("noResult");

    //looping through each row and hiding the rows that do not match
    for(i=0; i<row.length; i++){
        // getting the elements from the phone number coplumn of each row.
        td = row[i].getElementsByTagName("td")[1];
        if(td){
            var text = td.textContent || td.innerText;
            if(text.toUpperCase().indexOf(filter) >- 1){
                row[i].style.display = "";
                error.style.display="none";
            } else {
                row[i].style.display="none";
                error.style.display="block";
            }
        }
    }
}

function sortNames(){
    var table = document.getElementById("contacts");
    var rows = table.rows;

    
}