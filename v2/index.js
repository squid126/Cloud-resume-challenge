// Function to call the API
function updateVisitorCount() {
    fetch('https://4mh5kxsti1.execute-api.us-east-1.amazonaws.com/test')
        .then(response => response.json())
        .then(data => document.getElementById('visitor-count').textContent = data)
        .catch(error => console.error('Error:', error));
}

// Call the function when the page loads
window.onload = updateVisitorCount;
