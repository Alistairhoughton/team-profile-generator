const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe('Employee Class', () => {
    describe('Initialization', () => {
        it('Should create an object with an ID, Name and Email', () => {
            const employee = new Employee('Tom', 100, "tom@tom.com")
            expect(employee.name).toEqual('Tom');
            expect(employee.id).toEqual(100);
            expect(employee.email).toEqual("tom@tom.com");
        });
    });

    describe('Initialization', () => {
        it('Should create an object with an ID, Name and Email', () => {
            const employee = new Employee('Ali', 200, "ali@ali.com")
            expect(employee.name).toEqual('Ali');
            expect(employee.id).toEqual(200);
            expect(employee.email).toEqual("ali@ali.com");
        });
    });
});


