document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'i3j3nteqd3mwuiow9hqgkq97qkyy6b'; // Reemplaza con tu API key real
    const apiUrl = 'https://api.ejemplo.com/propertieshttps://api.easybroker.com/v1/properties?page=1&limit=20'; // Reemplaza con la URL de tu API

    fetch(apiUrl, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const propertiesContainer = document.getElementById('properties');
        data.forEach(property => {
            const propertyElement = document.createElement('div');
            propertyElement.className = 'property';
            propertyElement.innerHTML = `
                <h3>${property.name}</h3>
                <p>${property.description}</p>
                <p><strong>Price:</strong> ${property.price}</p>
            `;
            propertiesContainer.appendChild(propertyElement);
        });
    })
    .catch(error => console.error('Error:', error));
});
