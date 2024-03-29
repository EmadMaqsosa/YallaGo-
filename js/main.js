var selectedRow = null;
function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}
// Read operation using this function
function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["phone"] = document.getElementById("phone").value;
  formData["cost"] = document.getElementById("cost").value;
  formData["address"] = document.getElementById("address").value;
  return formData;
}

// Create operation
function insertNewRecord(data) {
  var table = document
    .getElementById("customer")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.phone;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.cost;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.address;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<br><a href="#" class="btn-mi" onClick='onEdit(this)'>Edit</a>
  <a href="#" class="btn-mi" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("cost").value = "";
  document.getElementById("address").value = "";
  selectedRow = null;
}

// For Edit operation
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("phone").value = selectedRow.cells[1].innerHTML;
  document.getElementById("cost").value = selectedRow.cells[2].innerHTML;
  document.getElementById("address").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.phone;
  selectedRow.cells[2].innerHTML = formData.cost;
  selectedRow.cells[3].innerHTML = formData.address;
}
function onDelete(td) {
  if (confirm("Are you sure you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("customer").deleteRow(row.rowIndex);
    resetForm();
  }
}