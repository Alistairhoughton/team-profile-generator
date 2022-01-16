const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Should create an Intern object with an ID, Name, Email and School', () => {
            const intern = new Intern('Billy', 500, "Billy@Billy.com", "Manchester-HighSchool")
            expect(intern.name).toEqual('Billy');
            expect(intern.id).toEqual(500);
            expect(intern.email).toEqual("Billy@Billy.com");
            expect(intern.school).toEqual("Manchester-HighSchool");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});
