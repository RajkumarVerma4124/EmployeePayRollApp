//Created Employee Payroll Data Class(UC9)
class EmployeePayrollData {

    //Getter and setter methods for property of id
    get empId() { return this._empId };
    set empId(id) {
        if (id != null)
            this._empId = id;
        else
            throw "The Id Is Null";
    };

    //Getter and setter methods for properties of name
    get empName() { return this._empName };
    set empName(name) {
        let namePattern = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (namePattern.test(name))
            this._empName = name
        else throw "Name Is Invalid";
    };

    //Getter and setter methods for properties of profilepic
    get empProfilePic() {
        return this._empProfilePic;
    }
    set empProfilePic(profilePic) {
        if (profilePic != null)
            this._empProfilePic = profilePic;
        else throw `Profile Value Is Null`;
    }

    //Getter and setter methods for property of gender
    get empGender() { return this._empGender };
    set empGender(gender) {
        //Pattern for gender either M or F or others
        let genderPattern = new RegExp('^male$|^female$|^others$');
        if (genderPattern.test(gender))
            this._empGender = gender;
        else
            throw "The Given Gender Is Not In Correct Format";
    }

    //Getter and setter methods for property of department
    get empDept() {
        return this._empDept;
    }
    set empDept(dept) {
        if (dept != null)
            this._empDept = dept;
        else throw `Department Value Is Null`;
    }

    //Getter and setter methods for property of salary
    get empSalary() { return this._empSalary };
    set empSalary(salary) {
        //Pattern for salary for positive numbers
        let salaryPattern = new RegExp('^[1-9][0-9]*$');
        if (salaryPattern.test(salary))
            this._empSalary = salary;
        else throw "The Given Salary Is Invalid";
    };

    //Getter and setter methods for property of startdate
    get startDate() { return this._startDate };
    set startDate(date) {
        //Givendate should not exceed todays date
        let todayDate = new Date().toLocaleDateString();
        let currentDate = date.toLocaleDateString();
        if (currentDate <= todayDate)
            this._startDate = currentDate;
        else throw "The Given Date Is Greater Than Current Date";
    }

    //Getter and setter methods for property of notes
    get empNotes() { return this._empNotes; }
    set empNotes(notes) {
        if (notes != null)
            this._empNotes = notes;
        else
            throw `Notes Value Is Null`;
    }

    //Method to return string of values
    toString() {
        return `Employee Name : ${this._empName} \nEmployee Gender : ${this._empGender} \nProfile Pic : ${this._empProfilePic} \nEmployee Department : ${this._empDept} \nEmployee Salary : ${this._empSalary} \nEmployee Date Of Joining : ${this._startDate} \nEmployee Notes = ${this._empNotes}`;
    }
}