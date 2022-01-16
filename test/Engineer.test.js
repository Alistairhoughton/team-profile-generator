const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Should create an Engineer object with an ID, Name, Email and github', () => {
            const engineer = new Engineer('Tom', 300, "tom@tom.com", "Githubtest")
            expect(engineer.name).toEqual('Tom');
            expect(engineer.id).toEqual(300);
            expect(engineer.email).toEqual("tom@tom.com");
            expect(engineer.github).toEqual("Githubtest");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});
