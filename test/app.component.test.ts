import 'zone.js';
import 'reflect-metadata';
import { Component } from  "@angular/core";
import {inject, beforeEachProviders} from  "@angular/core/testing";
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var assert = chai.assert;
var expect = chai.expect;
import { AppComponent } from '../app/app.component';
import { Service } from '../app/service';


describe('App Component Test',() => {
    var app = null;
    beforeEachProviders( () => [Service]);

    beforeEach(inject([Service],(Service)=>{
      app = new AppComponent(Service);
    }));

    it('Promise Array',()=>{
        app.getData((promise) => {
            assert.isArray(promise);
            expect(promise).to.have.lengthOf(3);
        });
    });
    it('Chai Spy',()=>{
        var spy = chai.spy(app.callOnSpy);
        spy();
        expect(spy).to.have.been.called().once;
    });

});