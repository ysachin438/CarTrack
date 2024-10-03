# CarTrack
A web application for HSR Motors, a car dealership, to manage leads effectively. It includes creating four screens: Lead Listing, Lead Details, Lead Management, and Dashboard, featuring user-friendly interfaces, real-time collaboration, lead filters, and statistics to streamline the lead management process for the sales team and business manager.

CarTrack
03/10/2003

OVERVIEW
The assignment involves designing a web application for HSR Motors, a car dealership, to manage leads effectively. It includes creating four screens: Lead Listing, Lead Details, Lead Management, and Dashboard, featuring user-friendly interfaces, real-time collaboration, lead filters, and statistics to streamline the lead management process for the sales team and business manager.

FEATURES
Features Implemented:
1. Dashboard Overview:
2. Display total leads count.
3. Display contacted leads count.
4. Display not interested leads count.
5. Pie chart visualizing lead distribution.
Lead Filters:
1. Dropdowns for filtering leads by status (e.g., New, Contacted, Not Interested).
2. Dropdowns for filtering leads by source (e.g., Website, Facebook).
Real-Time Data Fetching:
1. Fetch lead data from a backend API using the Fetch API.
1. Dynamic updating of lead statistics based on selected filters.
User Interaction:
1. Event listeners for dropdown changes to trigger data fetching.
2. Responsive updates to the dashboard based on user selections.
Lead Management Features:
1. Placeholder for lead management actions (e.g., editing lead status, adding notes).
2. Initial structure for creating, updating, and deleting leads (API endpoints).
WIREFRAME / MOCKUP / PROTOTYPE

USER FLOW
1. Landing on the Dashboard
Upon opening the application, users are greeted with a modern and user-friendly Dashboard interface. The header prominently displays the title, "GadiLead - Business Lead Dashboard," setting the context for the users.
2. Dashboard Overview
The Dashboard section showcases key statistics:
--Total Leads: Displays the overall count of leads currently in the system.
--Contacted Leads: Shows the number of leads that have been contacted by the sales team.
--Not Interested Leads: Indicates the number of leads that have expressed disinterest.
--A pie chart visually represents the distribution of leads across different statuses, providing quick insights into lead engagement.
3. Lead Filters
Just below the dashboard statistics, users can find filters to refine their view of leads:
Status Filter: Dropdown menu allows users to filter leads based on their current status (New, Contacted, Not Interested).
Source Filter: Another dropdown enables filtering based on the lead's source (e.g., Website, Facebook).
Once a filter is selected, the dashboard automatically refreshes to reflect the filtered data.
4. Lead Listing Screen
Users can navigate to the Lead Listing screen by selecting a link or button (in a complete version).
The Lead Listing table displays all relevant leads in a structured format:
Columns for Lead Name, Status, Source, and Date of entry.
Each lead entry may be clickable to view further details.
5. Lead Details Screen
Selecting a specific lead from the listing takes users to the Lead Details screen.
Here, detailed information about the lead is presented:
Fields for Lead Name, Contact Information, Current Status, and Notes.
Users can edit the lead's information, update the status, and add notes about their interactions with the lead.
Action buttons like Save Changes and Cancel are prominently placed for easy access.
6. Lead Management Features
The Lead Management screen allows sales team members to manage their leads effectively.
Users can:
Change the status of leads through dropdown menus.
Add comments or notes from their interactions.
Perform actions like Mark as Contacted, Archive Lead, or Save Changes.
7. Real-Time Data Updates
The application fetches lead data dynamically from a backend API. When users interact with the filters or manage leads, the data is refreshed without needing to reload the entire page.
This feature ensures that the sales team has access to the most up-to-date information on leads, facilitating better collaboration and communication.
8. User Experience
The overall design emphasizes simplicity and clarity, with a focus on usability.
Intuitive navigation allows users to seamlessly move between the dashboard, lead listing, details, and management screens.

OTHER LINKS
Figma Link: https://www.figma.com/design/jAN7y7iUfPv3JaFUr8hkZA/Untitled?node-id=0-1&t=BRwt0JXIvkG5DgCh-1


