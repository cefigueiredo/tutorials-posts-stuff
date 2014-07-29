describe("MyAngularTutorial", function() {
  beforeEach(module("tutorialApp"));

  describe("ContactsCtrl", function() {
    var ctrl, scope, httpBackend, contacts;

    beforeEach(inject(function($httpBackend, $rootScope, $controller) {
      contacts = [
        {"name": "Contact1", "number": "12342"},
        {"name": "Contact2", "number": "41313"}
      ];
      scope = $rootScope.$new();
      ctrl = $controller('ContactsCtrl', {$scope: scope});

      httpBackend = $httpBackend;
      httpBackend.when("GET", '/contacts').respond(contacts)

    }));

    afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    describe("getContacts()", function() {

      it('should get place a list of contacts on $scope.contacts', function() {
        scope.getContacts();

        httpBackend.expectGET('/contacts');
        httpBackend.flush()

        expect(scope.contacts).toBeDefined();
      });
    });



  });
});