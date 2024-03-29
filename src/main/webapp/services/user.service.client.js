function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;

    function createUser(user) {
        return fetch('https://wbdv-generic-server.herokuapp.com/api/001866430/users',{
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    function findAllUsers() {
        return fetch('https://wbdv-generic-server.herokuapp.com/api/001866430/users')
            .then(function (response) {
                return response.json();
        })
    }

    function findUserById(userId) {
        return fetch('https://wbdv-generic-server.herokuapp.com/api/001866430/users/' + userId, {
            method: 'GET',

        }).then(function (response) {
            return response.json();
        })

    }

    function updateUser(userId, user) {
        return fetch('https://wbdv-generic-server.herokuapp.com/api/001866430/users/' + userId, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

    }

    function deleteUser(userId) {
        return fetch("https://wbdv-generic-server.herokuapp.com/api/001866430/users/" + userId,{
            method: 'DELETE',
        })
    }
}
