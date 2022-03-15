//Javascript to add set event listeners on document loading(UC10)
window.addEventListener('DOMContentLoaded', (event) => {
    //Setting the name to the employee object for validation
    const name = document.querySelector('#empName');
    const nameError = document.querySelector('#errorName');
    name.addEventListener('input', () => {
        if (name.value.length == 0) {
            nameError.textContent = '';
            return;
        }
        try {
            (new EmployeePayrollData()).empName = name.value;
            nameError.textContent = '';
        } catch (e) {
            nameError.textContent = e;
        }
    });
    //Setting the salary output by checking the salary value(UC10)
    const salary = document.querySelector('#salary');
    const outputSal = document.querySelector('#salaryOutput');
    outputSal.textContent = salary.value;
    salary.addEventListener('input', () => {
        outputSal.textContent = salary.value;
    });
    //Setting the date to the employee object for validation(UC10)
    const date = document.querySelector('#date');
    const errorDate = document.querySelector('#errorDate');
    date.addEventListener('input', function() {
        let startDate = `${getInputValueById('#day')} ${getInputValueById('#month')} ${getInputValueById('#year')}`;
        try {
            (new EmployeePayrollData()).startDate = new Date(startDate);
            errorDate.textContent = "";
        } catch (e) {
            errorDate.textContent = e;
        }
    });
});

//Arrow function to get the input value by id(UC11)
const getInputValueById = (id) => {
    return document.querySelector(id).value;
}

//Arrow function to set the value by id(UC11)
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

//Arrow function to save employee object(UC11)
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        alert(employeePayrollData.toString());
    } catch (e) {
        return;
    }
}

//Arrow function to create employee object and set the values provided by the user to object(UC11)
const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.empName = getInputValueById('#empName');
    } catch (e) {
        setTextValue('#errorName', e)
        throw e;
    }
    employeePayrollData.empProfilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.empGender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.empDept = getSelectedValues('[name=dept]');
    employeePayrollData.empSalary = getInputValueById('#salary');
    employeePayrollData.empNotes = getInputValueById('#notes');
    let date = `${getInputValueById('#day')} ${getInputValueById('#month')} ${getInputValueById('#year')}`;
    try {
        employeePayrollData.startDate = new Date(date);
        setTextValue('#errorDate', e)
    } catch {
        setTextValue('#errorDate', e)
        throw e;
    }
    return employeePayrollData;
}

//Arrow function to get all the selected values checked by user(UC11)
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selectedItems = [];
    allItems.forEach(item => {
        if (item.checked)
            selectedItems.push(item.value);
    });
    return selectedItems;
}