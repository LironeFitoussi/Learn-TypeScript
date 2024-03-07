class Department {
    public name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe (this: Department) {
        console.log('Department: ' + this.name);
    }

    addEmployee (employee: string) {
        // Validation   
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("Accounting");

accounting.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = 'Anna';

accounting.printEmployeeInformation();

// console.log(accounting);
const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe(); 