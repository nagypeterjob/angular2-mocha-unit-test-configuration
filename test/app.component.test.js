"use strict";
require('zone.js');
require('reflect-metadata');
var testing_1 = require("@angular/core/testing");
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var assert = chai.assert;
var expect = chai.expect;
var app_component_1 = require('../app/app.component');
var service_1 = require('../app/service');
describe('App Component Test', function () {
    var app = null;
    testing_1.beforeEachProviders(function () { return [service_1.Service]; });
    beforeEach(testing_1.inject([service_1.Service], function (Service) {
        app = new app_component_1.AppComponent(Service);
    }));
    it('Promise Array', function () {
        app.getData(function (promise) {
            assert.isArray(promise);
            expect(promise).to.have.lengthOf(3);
        });
    });
    it('Chai Spy', function () {
        var spy = chai.spy(app.callOnSpy);
        spy();
        expect(spy).to.have.been.called().once;
    });
});
//# sourceMappingURL=app.component.test.js.map