const Engineer = require('../lib/Engineer');

test('test name', () => {
    const name = 'edd';
    const engineer = new Engineer(name);

    expect(engineer.name).toBe(name);
 });

 test('test role', () => {
     const role = 'Engineer';
     const engineer = new Engineer('edd', 1, 'edd@mail.com');

     expect(engineer.getRole()).toBe(role);
 })