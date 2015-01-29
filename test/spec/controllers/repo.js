'use strict';

describe('Controller: RepoController', function () {

  // load the controller's module
  beforeEach(module('ghubApp'));

  var RepoController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepoController = $controller('RepoController', {
      $scope: scope
    });
  }));
});
