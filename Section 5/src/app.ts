class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string ,public name: string) {
        // this.id = id;
        // this.name = name;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        // validation etc
        // this.id = 'd2'; // This will not work because id is readonly
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}


class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addEmployee(name: string) {
        if(name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

const accounting0 = new Department("d1", 'Accounting');
console.log(accounting0);

accounting0.addEmployee('Max');
accounting0.addEmployee('Manu');

// accounting.employees[2] = 'Anna'; // This will not work because employees is private
const it = new ITDepartment("d1" ,['Max']);

accounting0.describe();
accounting0.name = 'NEW NAME'; // This will work because name is public by default
accounting0.printEmployeeInformation();

// const accountingCopy = { name: "DUMMMY", describe: accounting.describe};

// accountingCopy.describe(); // Department: undefined

console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();
accounting.addReport('Something went wrong...');
accounting.printReports();