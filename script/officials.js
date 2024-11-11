function addOfficial() {
    // Get the values from the form
    const fullName = document.getElementById("fullName").value;
    const chairmanship = document.getElementById("chairmanship").value;
    const position = document.getElementById("position").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    // Check if all fields are filled
    if (!fullName || !chairmanship || !position || !startDate || !endDate) {
        alert("Please fill out all fields.");
        return;
    }

    // Determine the status based on current date
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const status = (currentDate >= start && currentDate <= end) ? "Active" : "Inactive";

    // Create a new row
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${fullName}</td>
        <td>${chairmanship}</td>
        <td>${position}</td>
        <td><span class="status-badge">${status}</span></td>
        <td>
            <button class="action-btn edit-btn" title="Edit"><i class="fa fa-pencil-alt"></i></button>
            <button class="action-btn delete-btn" title="Delete" onclick="deleteRow(this)"><i class="fa fa-trash"></i></button>
        </td>
    `;

    // Add the new row to the table body
    document.getElementById("officialsTableBody").appendChild(newRow);

    // Clear the form fields
    document.getElementById("addOfficialForm").reset();
}
