 const Employee = require('../lib/Employee');

test('test name', () => {
    const name = 'edd';
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
 });

 test('test role', () => {
     const role = 'Employee';
     const employee = new Employee('edd', 1, 'edd@mail.com');

     expect(employee.getRole()).toBe(role);
 });