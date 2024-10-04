function loadData() {
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = ""; 

    // Retrieve data from localStorage (array of objects)
    const formDataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];

    // Iterate over the formDataArray and create table rows
    formDataArray.forEach((formData, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${formData.firstName}</td>
            <td>${formData.lastName}</td>
            <td>${formData.street}</td>
            <td>${formData.barangay}</td>
            <td>
                <button class="btn btn-primary btn-sm" onclick="updateData(${index})">Update</button>
                <button class="btn btn-danger btn-sm" onclick="deleteData(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });

    // Update the "Total Users" card with the count of entries
    updateTotalUsers(formDataArray.length);
}

function updateData(index) {
    // Retrieve data from localStorage (array of objects)
    const formDataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];

    // Get the specific entry to update
    const formData = formDataArray[index];

    // Prompt the user to update values
    formData.firstName = prompt("Enter First Name:", formData.firstName);
    formData.lastName = prompt("Enter Last Name:", formData.lastName);
    formData.street = prompt("Enter Street:", formData.street);
    formData.barangay = prompt("Enter Barangay:", formData.barangay);

    // Save the updated data back to localStorage
    localStorage.setItem("formDataArray", JSON.stringify(formDataArray));

    // Reload the table with updated data
    loadData();
}

function deleteData(index) {
    if (confirm("Are you sure you want to delete this data?")) {
        // Retrieve data from localStorage (array of objects)
        const formDataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];

        // Remove the specific entry by index
        formDataArray.splice(index, 1);

        // Save the updated array back to localStorage
        localStorage.setItem("formDataArray", JSON.stringify(formDataArray));

        // Reload the table
        loadData();
    }
}

function updateTotalUsers(count) {
    const totalUsersElement = document.getElementById("totalUsers");
    totalUsersElement.textContent = count; // Update the number in the card
}

// Call loadData when the window is loaded
window.onload = loadData;
