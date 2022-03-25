const Manager = require('../lib/Manager');

test('test name', () => {
    const name = 'edd';
    const manager = new Manager(name);

    expect(manager.name).toBe(name);
 });

 test('test role', () => {
     const role = 'Manager';
     const manager = new Manager('edd', 1, 'edd@mail.com');

     expect(manager.getRole()).toBe(role);
 });