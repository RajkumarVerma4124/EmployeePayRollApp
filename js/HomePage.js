//Added javascript to view employee payroll details in a tabular format from jS file using template literals(UC17)
let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmpPayrollDataFromStorage();
    document.querySelector(".emp_count").textContent = empPayrollList.length;
    createTableContents();
    localStorage.removeItem('editEmp');
});

//Arrow function to get the data from local storage(UC19)
const getEmpPayrollDataFromStorage = () => {
    return localStorage.getItem("EmployeePayrollList") ? JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
}

//Template literal
const createTableContents = () => {
    const tableHeader = `
        <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start date</th>
            <th>Actions</th>
        </tr>`;
    if (empPayrollList.length == 0)
        return;
    let tableContents = `${tableHeader}`;
    for (const empPayrollData of empPayrollList) {
        tableContents = `${tableContents}
        <tr>
            <td class="td-img"><img class="profile" src="${empPayrollData._empProfilePic}" /></td>
            <td>${empPayrollData._empName}</td>
            <td>${empPayrollData._empGender}</td>
            <td>${getDept(empPayrollData._empDept)}</td>
            <td>₹${empPayrollData._empSalary}</td>
            <td>${empPayrollData._startDate}</td>
            <td class="td-icon">
                <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="${empPayrollData.id}" onclick="remove(this)"/>
                <img src="../assets/icons/create-black-18dp.svg" alt="edit" id="${empPayrollData.id}" onclick="update(this)"/>
            </td>
        </tr>`
    }
    document.getElementById('display_container').innerHTML = tableContents;
}

//Arrow function to get all department name(UC18)
const getDept = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml}<span class="dept_label">${dept}</span>`;
    }
    return deptHtml;
}

//Arrow function to delete employee using id(UC20)
const remove = (employee) => {
    let empPayrollData = empPayrollList.find(empData => empData.id == employee.id);
    if (!empPayrollData) return;
    const index = empPayrollList.map(empData => empData.id).indexOf(empPayrollData.id);
    empPayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector('.emp_count').textContent = empPayrollList.length;
    createTableContents();
    window.location.reload();
}

//Arrow function to update employee using id(UC21)
let update = (employee) => {
    let empPayrollData = empPayrollList.find(empData => empData.id == employee.id);
    if (!empPayrollData)
        return;
    localStorage.setItem("editEmp", JSON.stringify(empPayrollData));
    window.location.replace(site_properties.register_page);
}