(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn, $updateBtn;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    var userId
    $(main);


    function main() {
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");
        $roleFld = $("#roleFld");
        $removeBtn = $('.wbdv-remove');
        $editBtn = $('.wbdv-edit');
        $createBtn = $('.wbdv-create');
        $updateBtn = $('.wbdv-update');


        $userRowTemplate = $('.wbdv-template');
        $tbody =$('.wbdv-tbody');

        $createBtn.click(createUser);
        $removeBtn.click(deleteUser);
        $editBtn.click(selectUser);
        $updateBtn.click(updateUser);

        findAllUsers()
    }


    function createUser() {
        var username = $usernameFld.val()
        var password = $passwordFld.val()
        var firstName = $firstNameFld.val()
        var lastName = $lastNameFld.val()
        var role = $roleFld.val()

        var user = {username,password,firstName,lastName,role};
        userService.createUser(user).then(findAllUsers)

        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
        $roleFld.val("")

    }

    function findAllUsers() {
         userService.findAllUsers().then(renderUsers)
    }
    function findUserById() {
        userService.findUserById(userId).then(backTop)

    }

    function deleteUser() {
        userId = event.target.id
        userService.deleteUser(userId).then(findAllUsers)
    }

    function selectUser() {
           userId = event.target.id
           findUserById()
    }


    function updateUser() {
        var username = $usernameFld.val();
        var password = $passwordFld.val();
        var firstName = $firstNameFld.val();
        var lastName = $lastNameFld.val();
        var role = $roleFld.val();
        var user = {username,password,firstName,lastName,role};
        renderUser(user)

        $usernameFld.val("")
        $passwordFld.val("")
        $firstNameFld.val("")
        $lastNameFld.val("")
        $roleFld.val("")
    }

    function renderUser(updateUser) {
        userService.updateUser(userId, updateUser).then(findAllUsers)
    }


    function renderUsers(users) {
        $tbody.empty();
        for(var i in users) {
            const user = users[i]
            const row = $userRowTemplate.clone();
            row.removeClass('wbdv-hidden');
            row.find('.wbdv-username').html(user.username);
            row.find('.wbdv-password').html(user.password);
            row.find('.wbdv-first-name').html(user.firstName);
            row.find('.wbdv-last-name').html(user.lastName);
            row.find('.wbdv-role').html(user.role);
            row.find('.wbdv-remove').attr('id',user.id)
            row.find('.wbdv-edit').attr('id',user.id)
            row.find('.wbdv-update').attr('id',user.id)
            $tbody.append(row);
        }

        $(".wbdv-remove").click(function () {
            deleteUser();
        });

        $(".wbdv-edit").click(function () {
            selectUser();
        });



    }
    function backTop(user) {
        $usernameFld.val(user.username)
        $passwordFld.val(user.password)
        $firstNameFld.val(user.firstName)
        $lastNameFld.val(user.lastName)
        $roleFld.val(user.role)
    }
})();


