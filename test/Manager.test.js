const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe('Manager Class', () => {
    describe('Initialization', () => {
        it('Should create an Manager object with an ID, Name, Email and Office Number', () => {
            const manager = new Manager('Frank', 400, "Frank@frank.com", "001")
            expect(manager.name).toEqual('Frank');
            expect(manager.id).toEqual(400);
            expect(manager.email).toEqual("Frank@frank.com");
            expect(manager.officeNumber).toEqual("001");
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});
