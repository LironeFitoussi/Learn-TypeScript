abstract class Department {
    static fiscalYear = 2020;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public  name: string) {
        // console.log(Department.fiscalYear);
    }

    static createEmployee(name: string) {
        return {name: name}
    }

    abstract describe (this: Department): void

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
    
    describe() {
        console.log('IT Department - ID: ' + this.id);
        
    }
}
// const employee1 = Department.createEmployee('Max')
// console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ['max']);

// it.addEmployee("Max");
// it.addEmployee("Manu");

it.describe();
// it.name = 'NEW NAME';
// it.printEmployeeInformation();

// console.log(it);

class AcountingDepartment extends Department {
    private lastReport: string; 
    private static instance: AcountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Report available");
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please provide a valide report");
        }

        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(AcountingDepartment.instance) {
            return AcountingDepartment.instance;
        }
        this.instance = new AcountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Nave') {
            return
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

const accounting = AcountingDepartment.getInstance();
const accounting2 = AcountingDepartment.getInstance();

console.log(accounting, accounting2);


// console.log(accounting.mostRecentReport);

// accounting.addReport("Report 1");

// accounting.addEmployee("Nave");
// accounting.addEmployee("Nava");

// accounting.addReport("Report 2: i have a report");
// accounting.printEmployeeInformation()
// accounting.printReports()
// accounting.mostRecentReport = "New Report"
// console.log(accounting.mostRecentReport);

// accounting.describe()

// const accountingCopy = { name: 'DUMMY', describe: it.describe };
