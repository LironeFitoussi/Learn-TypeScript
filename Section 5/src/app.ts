class Department {
    private employees: string[] = [];

    constructor(private id: string, public  name: string) {
    }

    describe (this: Department) {
        console.log(`Department ${this.id}: ${this.name}`);        
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

const accounting = new Department("d1", "Accounting");

accounting.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printEmployeeInformation();

const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
