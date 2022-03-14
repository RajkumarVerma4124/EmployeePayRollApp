//Javascript for salary range(UC8)
const salary = document.querySelector('#salary');
const outputSal = document.querySelector('#salaryOutput');
outputSal.textContent = salary.value;
salary.addEventListener('input', () => {
    outputSal.textContent = salary.value;
});