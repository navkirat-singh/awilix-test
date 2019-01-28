const container = require('./di');

const userController = container.resolve('userController');

console.log(userController.getUser());
