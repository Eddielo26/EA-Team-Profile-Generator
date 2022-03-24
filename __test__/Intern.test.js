const Intern = require('../lib/Intern');

test('test name', () => {
    const name = 'edd';
    const intern = new Intern(name);

    expect(intern.name).toBe(name);
 });

 test('test role', () => {
     const role = 'Intern';
     const intern = new Intern('edd', 1, 'edd@mail.com');

     expect(intern.getRole()).toBe(role);
 });