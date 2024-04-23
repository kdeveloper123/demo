// JavaScript code for Check Stock webpage

// Function to display stock information
function displayStock() {
    // Dummy stock data
    const stockData = [
        { category: 'Grey Furniture', quantity: 20 },
        { category: 'Fold up Couch', quantity: 15 },
    ];

    // Display stock information in a table
    const table = document.getElementById('stock-table');
    stockData.forEach(item => {
        const row = table.insertRow();
        const categoryCell = row.insertCell(0);
        const quantityCell = row.insertCell(1);
        categoryCell.textContent = item.category;
        quantityCell.textContent = item.quantity;
    });
}


// Call the displayStock function when the page loads
window.onload = displayStock;



