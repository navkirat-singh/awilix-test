function UserController(opts) {
    this.userService = opts.userService;

    this.getUser = function () {
        let user = this.userService.loadUser();
        return user;
    }
}

module.exports = UserController;
