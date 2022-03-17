//Javascript to add set event listeners on document loading(UC10&&UC21)
let isUpdate = false;
let empPayrollObj = {};
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
    //Calling the function to check for update(UC21)
    checkForUpdate();
});

//Arrow function to update the emp data(UC21)
let checkForUpdate = () => {
    const empPayrollJson = localStorage.getItem("editEmp");
    isUpdate = empPayrollJson ? true : false;
    if (!isUpdate) return;
    empPayrollObj = JSON.parse(empPayrollJson);
    setForm();
}

//Arrow function to fill the data with the emp data that we want to edit in register page(UC21)
const setForm = () => {
    setValue('#empName', empPayrollObj._empName);
    setSelectedValues('[name=profile]', empPayrollObj._empProfilePic);
    setSelectedValues('[name=gender]', empPayrollObj._empGender);
    setSelectedValues('[name=dept]', empPayrollObj._empDept);
    setValue('#salary', empPayrollObj._empSalary);
    setValue('#notes', empPayrollObj._empNotes);
    setTextValue('#salaryOutput', empPayrollObj._empSalary);
    let date = empPayrollObj._startDate.split(" ");
    setValue('#day', date[0]);
    setValue('#month', date[1]);
    setValue('#year', date[2]);
}

//Arrow function to set the values for both array and single value by id(UC21)
const setSelectedValues = (propertyValue, value) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        if (Array.isArray(value)) {
            if (value.includes(item.value)) {
                item.checked = true;
            }
        } else if (item.value == value) {
            item.checked = true;
        }
    });
}

//Arrow function to get the input value by id(UC11)
const getInputValueById = (id) => {
    return document.querySelector(id).value;
}

//Arrow function to get the id methods(UC13)
const getById = (id) => {
    return document.querySelector(id);
}

//Arrow function to save employee object(UC11)
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
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
    } catch (e) {
        setTextValue('#errorDate', e)
        throw e;
    }
    alert(employeePayrollData.toString());
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

//Arrow function to set the value by id(UC11)
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

//Arrow function to store emp object in local storage(UC12)
function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData];
    }
    alert("Successfully Saved Employee Data Into Local Storage");
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

//Arrow function to reset the form by initializing the values to default or null(UC13)
const resetForm = () => {
    setValue('#empName', '');
    setTextValue('#errorName', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=dept]');
    setValue('#salary', '');
    setTextValue('#salaryOutput', 400000);
    setTextValue('#errorDate', '');
    setValue('#notes', '');
    setTextValue('#')
    setValue('#notes', '');
    setValue('#day', 1);
    setValue('#month', 'Jan');
    setValue('#year', 2021);
}

//Arrow function for reset the values(UC13)
const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}