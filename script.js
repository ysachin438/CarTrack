// Mock data for leads
let leads = [
    { name: "Sachin", status: "New", source: "Website" },
    { name: "Abhishek", status: "Contacted", source: "Facebook" },
    { name: "Ravi", status: "Not Interested", source: "Twitter" },
    {name:"Suraj", status: "New", source:"Website"},
];

// Display Lead Listing
function displayLeads() {
    const tableBody = document.querySelector("#leadTable tbody");
    tableBody.innerHTML = ""; // Clear existing rows
    leads.forEach((lead, index) => {
        const row = `<tr>
                        <td>${lead.name}</td>
                        <td>${lead.status}</td>
                        <td>${lead.source}</td>
                        <td><button onclick="viewLead(${index})">View</button></td>
                     </tr>`;
        tableBody.innerHTML += row;
    });
}

// Add a new lead
function addLead() {
    const newLead = { name: "New Lead", status: "New", source: "Website" };
    leads.push(newLead);
    displayLeads();
}

// View lead details
function viewLead(index) {
    const lead = leads[index];
    document.getElementById("leadName").innerText = lead.name;
    document.getElementById("leadStatus").innerText = lead.status;
    document.getElementById("leadSource").innerText = lead.source;
    showScreen('lead-details');
}

// Update lead information (placeholder for real functionality)
function updateLead() {
    alert("Lead updated!");
}

// Apply bulk action to all leads
function applyBulkAction() {
    const action = document.getElementById("bulkAction").value;
    leads.forEach((lead) => {
        if (action === "contacted") {
            lead.status = "Contacted";
        } else if (action === "not-interested") {
            lead.status = "Not Interested";
        }
    });
    displayLeads();
}

// Switch between screens
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach((screen) => {
        screen.style.display = "none";
    });
    document.getElementById(screenId).style.display = "block";
}

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
    displayLeads();
    showScreen('lead-listing'); // Show Lead Listing screen by default
});
