function addContact(){
    //retrieving information from the form fields
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let entryError = document.getElementById("inputError");
    let error = document.getElementById("noResult");

    if(validateName(name) == true && checkNumber(number) == true && validateEmail(email) == true){
        entryError.style.display = "none";
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
        entryError.style.display = "block";
    }
}

function checkNumber(number){
  if(isNaN(number)){
    return false;
  } else {
    //if it is a number then it must be 10 digits in length 
    if(number.length == 10){
      return true;
    }
  }
}

function validateName(name){
  if(name.length <= 20){
    //checks that the name only contains letters and spaces
    return /^[A-Za-z\s]*$/.test(name);
  }else{
    return false;
  }
}

function validateEmail(email){
  if(email.length <= 40){
    //checks for any string + @ symbol + any string + . symbol + any string
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  } else {
    return false;
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
  let swap = false;
  let sortBy = "ascending";
  let counter = 0;
  let i = 0;
  let table = document.getElementById("contacts");
  let rows = table.rows;
  let swapping = true;
  sortBy = "ascending";

  while (swapping) {
    swapping = false;

    for (i = 1; i < (rows.length - 1); i++) {
      //initally swap is false because no swapping is done.
      swap = false;
      //getting the current and next cell
      let currentCell = rows[i].getElementsByTagName("td")[0];
      let nextCell = rows[i + 1].getElementsByTagName("td")[0];


      if (sortBy == "ascending") {
        // if current cell is greater than next cell, we set swap to true and break to enter the if(swap) statement
        if (currentCell.innerHTML.toLowerCase() > nextCell.innerHTML.toLowerCase()) {
          swap = true;
          break;
        }
      } else if (sortBy == "descending") {
        // if current cell is less than next cell, we set swap to true and break to enter the if(swap) statement
        if (currentCell.innerHTML.toLowerCase() < nextCell.innerHTML.toLowerCase()) {
          swap = true;
          break;
        }
      }
    }

    if (swap) {
      //put the next element before the current element
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //increment the amount of changes made
      counter ++;
    } else {
      if (counter == 0 && sortBy == "ascending") {
        //if no swapping was done and it is sorted by ascending, we will then sort names by descending if the header is clicked.
        sortBy = "descending";
        swapping = true;
      }
    }
  }
  // when sorted - change the row color so every second row is as shoul be.
  rowColor();
}