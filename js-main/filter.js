document.addEventListener('DOMContentLoaded', () => {
    // Function to collect unique values from each column based on filter criteria
    function getColumnValues() {
        const unique_col_values = {}; // Object to store unique values for each column

        const allFilters = document.querySelectorAll(".table-filter"); // Select all filter elements
        allFilters.forEach(filter => {
            const colIndex = filter.getAttribute("data-col-index"); // Get column index from filter; Computer Lab, Date of Reservation, and Time of Reservation
            const colIndexNumber = Number(colIndex);

            const rows = document.querySelectorAll("#reservations-table > tbody > tr"); // Select reservations-table rows

            rows.forEach(row => {
                const cell_value = row.querySelector(`td:nth-child(${colIndexNumber})`).textContent.trim(); // Get cell value for the column

                // Check if the value is already stored for the column, if not, add it
                if (unique_col_values[colIndex]) {
                    if (!unique_col_values[colIndex].includes(cell_value)) {
                        unique_col_values[colIndex].push(cell_value);
                    }
                } else {
                    unique_col_values[colIndex] = [cell_value];
                }
            });
        });

        updateSelectOptions(unique_col_values); // Update the options with unique values
    }

    // Function to update the filter options with unique values from the table columns
    function updateSelectOptions(unique_col_values) {
        const allFilters = document.querySelectorAll(".table-filter");
        allFilters.forEach(filter => {
            const colIndex = filter.getAttribute('data-col-index');
            if (unique_col_values[colIndex]) {
                let optionsHTML = '<option value="all">All</option>';
                unique_col_values[colIndex].forEach(value => {
                    optionsHTML += `\n<option value="${value}">${value}</option>`; // Add unique values as options
                });
                filter.innerHTML = optionsHTML; // Update filter options
            }
        });
    }

    // Function to filter table rows based on selected filter criteria
    function filter_rows() {
        const allFilters = document.querySelectorAll(".table-filter");
        const dateFilter = document.querySelector(".date-input");
        const filter_values = {}; // Object to store selected filter values

        allFilters.forEach(filter => {
            const colIndex = filter.getAttribute('data-col-index'); // Get column index from filter
            const value = filter.value;
            if (value !== "all") {
                filter_values[colIndex] = value; // Store selected value if it's not 'all'
            }
        });

        const rows = document.querySelectorAll("#reservations-table tbody tr"); // Select all table rows
        rows.forEach(row => {
            let display_row = true; // Flag to determine if the row should be displayed

            // Check each filter value against the corresponding column in the row
            for (const [colIndex, filterValue] of Object.entries(filter_values)) {
                const row_cell_value = row.querySelector(`td:nth-child(${colIndex})`).textContent.trim();
                if (row_cell_value.indexOf(filterValue) === -1) {
                    display_row = false; // If value doesn't match, hide the row
                    break;
                }
            }

            // check for the date filter
            if (display_row && dateFilter.value) {
                const dateColIndex = dateFilter.getAttribute('data-col-index');
                const row_date_value = row.querySelector(`td:nth-child(${dateColIndex})`).textContent.trim();
                if (row_date_value !== dateFilter.value) {
                    display_row = false; // If date doesn't match, hide the row
                }
            }

            row.style.display = display_row ? "table-row" : "none"; // Show or hide the row based on the flag
        });
    }

    getColumnValues(); // Initialize and get unique column values

    const allFilters = document.querySelectorAll(".table-filter"); // Select all filter elements
    allFilters.forEach(filter => {
        filter.addEventListener('change', filter_rows);
    });

    const dateFilter = document.querySelector(".date-input"); // Select date filter input
    dateFilter.addEventListener('change', filter_rows);
});