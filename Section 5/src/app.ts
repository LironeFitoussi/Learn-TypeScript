class Department {
    protected employees: string[] = [];

    constructor(private readonly id: string, public  name: string) {
    }

    describe (this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);        
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


class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }    
}

const it = new ITDepartment("d1", ['max']);

it.addEmployee("Max");
it.addEmployee("Manu");

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

class AcountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
    }

    addEmployee(name: string) {
        if (name === 'Nave') {
            return
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

const accounting = new AcountingDepartment("d2", []);
accounting.addReport("Report 1");

accounting.addEmployee("Nave");
accounting.addEmployee("Nava");

accounting.addReport("Report 2: i have a report");

accounting.printEmployeeInformation()

accounting.printReports()
// const accountingCopy = { name: 'DUMMY', describe: it.describe };
