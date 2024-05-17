document.addEventListener('DOMContentLoaded', function() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-Authorization': 'NUEVA_API_KEY'
        }
    };

    fetch('https://api.easybroker.com/v1/properties?page=1&limit=20', options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(response => {
            console.log('API response:', response); // Verificar que los datos están siendo recibidos
            if (response.content) {
                const propertiesContainer = document.getElementById('properties');
                response.content.forEach(property => {
                    const propertyElement = document.createElement('div');
                    propertyElement.className = 'property';
                    propertyElement.innerHTML = `
                        <h3>${property.title}</h3>
                        <img src="${property.title_image_full}" alt="${property.title}" style="width: 100%; height: auto;">
                        <p>${property.location}</p>
                        <p><strong>Price:</strong> ${property.operations[0].formatted_amount} ${property.operations[0].currency}</p>
                        <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
                        <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
                        <p><strong>Parking Spaces:</strong> ${property.parking_spaces}</p>
                    `;
                    propertiesContainer.appendChild(propertyElement);
                });
            } else {
                console.error('No content in the response');
            }
        })
        .catch(err => console.error('Fetch error:', err));
});
