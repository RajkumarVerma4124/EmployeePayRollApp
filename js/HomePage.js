//Added javascript to view employee payroll details in a tabular format from jS file using template literals(UC17)
let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmpPayrollDataFromStorage();
    document.querySelector(".emp_count").textContent = empPayrollList.length;
    createTableContents();
});

//Arrow function to get the data from local storage(UC19)
const getEmpPayrollDataFromStorage = () => {
    return localStorage.getItem("EmployeePayrollList") ? JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
}

//Template literal
const createTableContents = () => {
    const tableHeader = `
        <tr>
            <th></th>
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
                <img src="../assets/icons/delete-black-18dp.svg" alt="delete" />
                <img src="../assets/icons/create-black-18dp.svg" alt="edit" />
            </td>
        </tr>`
    }
    document.getElementById('display_container').innerHTML = tableContents;
}

//Creating json object for employee data(UC18)
const createEmployeePayRollJSON = () => {
    let employeePayrollList = [{
            _empName: 'Raj Verma',
            _empGender: 'Male',
            _empDept: ['Developer', 'HR'],
            _empSalary: '500000',
            _startDate: '22 Jan 2022',
            _empNotes: '',
            _id: new Date().getTime() + 1,
            _empProfilePic: '../assets/profile-images/Ellipse -5.png'
        },
        {
            _empName: 'Yash Verma',
            _empGender: 'Male',
            _empDept: ['Developer'],
            _empSalary: '400000',
            _startDate: '15 Feb 2022',
            _empNotes: '',
            _id: new Date().getTime() + 1,
            _empProfilePic: '../assets/profile-images/Ellipse -2.png'
        }, {
            _empName: 'Mansi Verma',
            _empGender: 'Female',
            _empDept: ['Finance'],
            _empSalary: '300000',
            _startDate: '31 Dec 2021',
            _empNotes: '',
            _id: new Date().getTime() + 1,
            _empProfilePic: '../assets/profile-images/Ellipse -4.png'
        },
    ];
    return employeePayrollList;
}

//Arrow function to get all department name(UC18)
const getDept = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml}<span class="dept_label">${dept}</span>`;
    }
    return deptHtml;
}