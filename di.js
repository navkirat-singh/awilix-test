const awilix = require('awilix');
const UserController = require('./UserController');
const UserService = require('./UserService')

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
});

container.register({
    userController: awilix.asClass(UserController),
    userService: awilix.asClass(UserService)
});


module.exports = container;