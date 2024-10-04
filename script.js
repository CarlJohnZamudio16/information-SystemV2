document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dataForm").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent the form from submitting

        // Collect form data
        const formData = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            street: document.getElementById("street").value,
            barangay: document.getElementById("barangay").value,
            email: document.getElementById("email").value,
            contact: document.getElementById("contact").value,
            nationality: document.getElementById("nationality").value,
            gender: document.getElementById("gender").value,
            civilStatus: document.getElementById("civilStatus").value,
            employmentStatus: document.getElementById("employmentStatus").value,
            birthDate: document.getElementById("birthDate").value,
            age: document.getElementById("age").value,
            education: document.getElementById("education").value,
            guardianName: document.getElementById("guardianName").value,
            guardianMail: document.getElementById("guardianMail").value,
            classification: document.getElementById("classification").value,
            disability: document.getElementById("disability").value,
            causeOfDisability: document.getElementById("causeOfDisability").value,
            ncae: document.getElementById("ncae").value,
            where: document.getElementById("where").value,
            when: document.getElementById("when").value,
            course: document.getElementById("course").value,
            scholar: document.getElementById("scholar").value
        };

        // Get existing data from local storage
        const existingData = JSON.parse(localStorage.getItem("formData")) || [];

        // Add new form data to the existing data
        existingData.push(formData);

        // Save the updated data back to local storage
        localStorage.setItem("formData", JSON.stringify(existingData));

        // Notify the user that the data was saved
        alert("Data has been saved!");

        // Refresh the displayed data
        displayData();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dataTableBody = document.querySelector("#dataTable tbody");

    // Function to display saved data in the table
    function displayData() {
        // Clear the existing table rows
        dataTableBody.innerHTML = "";

        // Get existing data from local storage
        const existingData = JSON.parse(localStorage.getItem("formData")) || [];

        // Populate the table with existing data
        existingData.forEach((data, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${data.firstName}</td>
                <td>${data.lastName}</td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="updateData(${index})">Update</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteData(${index})">Delete</button>
                </td>
            `;
            dataTableBody.appendChild(row);
        });

        // Update the user count and scholar count
        updateCounts(existingData);
    }

    // Function to update user counts
    function updateCounts(data) {
        const totalUsers = data.length;
        const scholarsOutsideBacolod = data.filter(user => user.where && user.where.toLowerCase() !== 'bacolod' && user.scholar === 'yes').length;

        // Update counts in the UI (assuming you have elements with these IDs)
        document.getElementById("totalUsers").innerText = `Total Users: ${totalUsers}`;
        document.getElementById("scholarsOutsideBacolod").innerText = `Scholars Outside Bacolod: ${scholarsOutsideBacolod}`;
    }

    // Function to delete data from local storage
    window.deleteData = function(index) {
        const existingData = JSON.parse(localStorage.getItem("formData")) || [];

        // Confirmation before deletion
        const confirmDelete = confirm("Are you sure you want to delete this data?");
        if (confirmDelete) {
            existingData.splice(index, 1); // Remove the item at the specified index
            localStorage.setItem("formData", JSON.stringify(existingData)); // Save the updated data
            displayData(); // Refresh the displayed data
        }
    };

    // Function to update data
    window.updateData = function(index) {
        const existingData = JSON.parse(localStorage.getItem("formData")) || [];
        const dataToUpdate = existingData[index];

        // Prompt the user for new values for all fields
        const newFirstName = prompt("Enter new first name:", dataToUpdate.firstName);
        const newLastName = prompt("Enter new last name:", dataToUpdate.lastName);
        const newStreet = prompt("Enter new street:", dataToUpdate.street);
        const newBarangay = prompt("Enter new barangay:", dataToUpdate.barangay);
        const newEmail = prompt("Enter new email:", dataToUpdate.email);
        const newContact = prompt("Enter new contact number:", dataToUpdate.contact);
        const newNationality = prompt("Enter new nationality:", dataToUpdate.nationality);
        const newGender = prompt("Enter new gender:", dataToUpdate.gender);
        const newCivilStatus = prompt("Enter new civil status:", dataToUpdate.civilStatus);
        const newEmploymentStatus = prompt("Enter new employment status:", dataToUpdate.employmentStatus);
        const newBirthDate = prompt("Enter new birth date:", dataToUpdate.birthDate);
        const newAge = prompt("Enter new age:", dataToUpdate.age);
        const newEducation = prompt("Enter new education:", dataToUpdate.education);
        const newGuardianName = prompt("Enter new guardian name:", dataToUpdate.guardianName);
        const newGuardianMail = prompt("Enter new guardian email:", dataToUpdate.guardianMail);
        const newClassification = prompt("Enter new classification:", dataToUpdate.classification);
        const newDisability = prompt("Enter new disability:", dataToUpdate.disability);
        const newCauseOfDisability = prompt("Enter new cause of disability:", dataToUpdate.causeOfDisability);
        const newNcae = prompt("Enter new NCAE:", dataToUpdate.ncae);
        const newWhere = prompt("Enter new where:", dataToUpdate.where);
        const newWhen = prompt("Enter new when:", dataToUpdate.when);
        const newCourse = prompt("Enter new course:", dataToUpdate.course);
        const newScholar = prompt("Enter new scholar:", dataToUpdate.scholar);

        // Update the data with new values only if the user provided them
        existingData[index] = {
            firstName: newFirstName || dataToUpdate.firstName,
            lastName: newLastName || dataToUpdate.lastName,
            street: newStreet || dataToUpdate.street,
            barangay: newBarangay || dataToUpdate.barangay,
            email: newEmail || dataToUpdate.email,
            contact: newContact || dataToUpdate.contact,
            nationality: newNationality || dataToUpdate.nationality,
            gender: newGender || dataToUpdate.gender,
            civilStatus: newCivilStatus || dataToUpdate.civilStatus,
            employmentStatus: newEmploymentStatus || dataToUpdate.employmentStatus,
            birthDate: newBirthDate || dataToUpdate.birthDate,
            age: newAge || dataToUpdate.age,
            education: newEducation || dataToUpdate.education,
            guardianName: newGuardianName || dataToUpdate.guardianName,
            guardianMail: newGuardianMail || dataToUpdate.guardianMail,
            classification: newClassification || dataToUpdate.classification,
            disability: newDisability || dataToUpdate.disability,
            causeOfDisability: newCauseOfDisability || dataToUpdate.causeOfDisability,
            ncae: newNcae || dataToUpdate.ncae,
            where: newWhere || dataToUpdate.where,
            when: newWhen || dataToUpdate.when,
            course: newCourse || dataToUpdate.course,
            scholar: newScholar || dataToUpdate.scholar,
        };

        // Save the updated data
        localStorage.setItem("formData", JSON.stringify(existingData)); // Save the updated data
        displayData(); // Refresh the displayed data
    };

    // Initially display data when the page loads
    displayData();
});

 // Function to update user counts
    function updateCounts(data) {
        const totalUsers = data.length;
        const scholarsOutsideBacolod = data.filter(user => user.where && user.where.toLowerCase() !== 'bacolod' && user.scholar === 'yes').length;

        // Update counts in the UI
        document.getElementById("totalUsers").innerText = totalUsers;
        document.getElementById("scholarsOutsideBacolod").innerText = scholarsOutsideBacolod;
    }