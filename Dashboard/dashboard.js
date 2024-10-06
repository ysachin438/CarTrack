// Mock lead data
let leads = [
    { name: "John Doe", status: "New", source: "Website" },
    { name: "Jane Smith", status: "Contacted", source: "Facebook" },
    { name: "Sam Green", status: "Not Interested", source: "Twitter" },
    { name: "Emily Brown", status: "Contacted", source: "Google" },
    { name: "Michael Lee", status: "New", source: "Website" },
    { name: "Sarah White", status: "Not Interested", source: "Offline" },
];

// Function to update lead statistics based on selected filters
function updateDashboardStats(filteredLeads) {
    const totalLeads = filteredLeads.length;
    const contactedLeads = filteredLeads.filter(lead => lead.status === "Contacted").length;
    const notInterestedLeads = filteredLeads.filter(lead => lead.status === "Not Interested").length;

    document.getElementById('totalLeads').innerText = totalLeads;
    document.getElementById('contactedLeads').innerText = contactedLeads;
    document.getElementById('notInterestedLeads').innerText = notInterestedLeads;

    // Update collaboration status
    document.getElementById('collabStatus').innerText = "Real-time updates are active.";

    // Generate chart with updated data
    generateChart(contactedLeads, notInterestedLeads, totalLeads - contactedLeads - notInterestedLeads);
}

// Function to apply lead filters based on status and source
function applyFilters() {
    const statusFilter = document.getElementById('statusFilter').value;
    const sourceFilter = document.getElementById('sourceFilter').value;

    let filteredLeads = leads;

    // Apply status filter
    if (statusFilter !== 'all') {
        filteredLeads = filteredLeads.filter(lead => lead.status === statusFilter);
    }

    // Apply source filter
    if (sourceFilter !== 'all') {
        filteredLeads = filteredLeads.filter(lead => lead.source === sourceFilter);
    }

    updateDashboardStats(filteredLeads);
}

// Function to generate a chart displaying lead statuses
function generateChart(contacted, notInterested, newLeads) {
    const ctx = document.getElementById('leadChart').getContext('2d');

    const data = {
        labels: ['Contacted', 'Not Interested', 'New'],
        datasets: [{
            data: [contacted, notInterested, newLeads],
            backgroundColor: ['#28a745', '#dc3545', '#ffc107']
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Initialize the dashboard on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set up event listeners for filters
    document.getElementById('statusFilter').addEventListener('change', applyFilters);
    document.getElementById('sourceFilter').addEventListener('change', applyFilters);

    // Initialize the dashboard with unfiltered data
    applyFilters();
});


//---------------------------------------------------------------------------------------------------------------------------//
// Function to fetch leads from backend and apply filters
// function fetchLeads(statusFilter = 'all', sourceFilter = 'all') {
//     const url = new URL('http://localhost:3000/leads');
//     url.searchParams.append('status', statusFilter);
//     url.searchParams.append('source', sourceFilter);

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             updateDashboardStats(data);
//         })
//         .catch(error => console.error('Error fetching leads:', error));
// }

// // Function to update lead statistics based on filtered data
// function updateDashboardStats(leads) {
//     const totalLeads = leads.length;
//     const contactedLeads = leads.filter(lead => lead.status === 'Contacted').length;
//     const notInterestedLeads = leads.filter(lead => lead.status === 'Not Interested').length;

//     document.getElementById('totalLeads').innerText = totalLeads;
//     document.getElementById('contactedLeads').innerText = contactedLeads;
//     document.getElementById('notInterestedLeads').innerText = notInterestedLeads;

//     // Generate chart with updated data
//     generateChart(contactedLeads, notInterestedLeads, totalLeads - contactedLeads - notInterestedLeads);
// }

// // Fetch leads when filters change
// document.getElementById('statusFilter').addEventListener('change', () => {
//     fetchLeads(document.getElementById('statusFilter').value, document.getElementById('sourceFilter').value);
// });

// document.getElementById('sourceFilter').addEventListener('change', () => {
//     fetchLeads(document.getElementById('statusFilter').value, document.getElementById('sourceFilter').value);
// });

// // Initial fetch of leads when page loads
// document.addEventListener('DOMContentLoaded', () => {
//     fetchLeads();
// });
