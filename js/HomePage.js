//Added javascript to view employee payroll details in a tabular format from jS file using template literals(UC17)
window.addEventListener('DOMContentLoaded', (event) => {
    createTableContents();
});
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
    const tableContents = `${tableHeader}
        <tr>
            <td class="td-img"><img class="profile " src="../assets/profile-images/Ellipse -5.png" /></td>
            <td>Aman Nikam</td>
            <td>Male</td>
            <td>
                <span class="dept_label ">Dev</span>
                <span class="dept_label ">Finance</span>
            </td>
            <td>₹450000</td>
            <td>15 Dec 2022</td>
            <td class="td-icon">
                <img src="../assets/icons/delete-black-18dp.svg" alt="delete" />
                <img src="../assets/icons/create-black-18dp.svg" alt="edit" />
            </td>
        </tr>
        <tr>
            <td class="td-img"><img class="profile " src="../assets/profile-images/Ellipse -4.png" /></td>
            <td>Raj Verma</td>
            <td>Male</td>
            <td>
                <span class="dept_label">Developer</span>
                <span class="dept_label">Finance</span>
            </td>
            <td>₹450000</td>
            <td>15 Dec 1999</td>
            <td class="td-icon">
                <img src="../assets/icons/delete-black-18dp.svg " alt="delete" />
                <img src="../assets/icons/create-black-18dp.svg " alt="edit" />
            </td>
        </tr>`;
    document.getElementById('display_container').innerHTML = tableContents;
}