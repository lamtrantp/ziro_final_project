const member = JSON.parse(localStorage.getItem("member"));

member.forEach((item, index) => {
    let myTable = document.getElementById("mytable");

    let newRow = myTable.insertRow(Element.lastchill);
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);
    let newCell4 = newRow.insertCell(3);
    let newCell5 = newRow.insertCell(4);
    let newCell6 = newRow.insertCell(5);
    let newCell7 = newRow.insertCell(6);

    newCell1.innerHTML = item.firstName;
    newCell2.innerHTML = item.middleName;
    newCell3.innerHTML = item.lastName;
    newCell4.innerHTML = item.birthDate;
    newCell5.innerHTML = item.email;
    newCell6.innerHTML = item.phoneNumber;
    newCell7.innerHTML = item.about;
});
