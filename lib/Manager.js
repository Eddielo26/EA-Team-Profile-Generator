const Employee = require('./Employee');

// uses employee properties for manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOffice() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;

