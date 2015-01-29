'use strict';

describe('Controller: UserController', function () {

  // load the controller's module
  beforeEach(module('ghubApp'));

  var UserController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserController = $controller('UserController', {
      $scope: scope
    });
  }));
});
