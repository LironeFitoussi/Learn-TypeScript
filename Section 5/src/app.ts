abstract class Department {
    // private readonly id: string;
    // private name: string;
    static fiscalYear: number = 2020;
    protected employees: string[] = [];

    constructor(protected readonly id: string ,public name: string) {
        // this.id = id;
        // this.name = name;
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;
    
    // {
        // console.log(`Department (${this.id}): ${this.name}`);
    // }

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

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if(name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

// const accounting0 = new Department("d1", 'Accounting');
// console.log(accounting0);

// accounting0.addEmployee('Max');
// accounting0.addEmployee('Manu');

const employee1 = Department.createEmployee('Anna');
console.log(employee1, Department.fiscalYear);

// accounting.employees[2] = 'Anna'; // This will not work because employees is private
const it = new ITDepartment("d1" ,['Max']);



// accounting0.describe();
// accounting0.name = 'NEW NAME'; // This will work because name is public by default
// accounting0.printEmployeeInformation();

// const accountingCopy = { name: "DUMMMY", describe: accounting.describe};

// accountingCopy.describe(); // Department: undefined

console.log(it);

const accounting = new AccountingDepartment('d2', []);
it.addEmployee('Max');
it.addEmployee('Manu');
it.printEmployeeInformation();
// console.log(accounting.mostRecentReport);

accounting.addReport('New Report 1...');
accounting.addReport('New Report 2...');

console.log(accounting.mostRecentReport);
// accounting.mostRecentReport = ''; // This will throw an error
accounting.mostRecentReport = 'New Report 3...';
accounting.printReports();

accounting.describe();
it.describe();