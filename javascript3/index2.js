
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
const userIdInput = document.getElementById('userIdInput');
const getUserButton = document.getElementById('getUserButton');


const apiUrl = 'https://jsonplaceholder.typicode.com/users';


function fetchUsers() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(users => {
            displayUsers(users);
        })
        .catch(error => console.error('Error fetching data:', error));
}


function displayUsers(users) {
    
    dataTable.innerHTML = '';

    
    users.forEach(user => {
        const row = dataTable.insertRow();
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
        `;
    });
}


function fetchUserById(id) {
    fetch(`${apiUrl}/${id}`)
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                displayUsers([user]); 
            } else {
                alert('User not found');
            }
        })
        .catch(error => console.error('Error fetching user by ID:', error));
}


getUserButton.addEventListener('click', function() {
    const userId = userIdInput.value.trim();
    if (userId) {
        fetchUserById(userId);
    } else {
        alert('Please enter a User ID');
    }
});


fetchUsers();
