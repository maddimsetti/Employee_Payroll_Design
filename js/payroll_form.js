window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector("#name");
    const textEror = document.querySelector('.text-error');
    name.addEventListener("input", function() {
        if(name.value.length == 0) {
            textEror.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;;
            textEror.textContent = "";
        } catch(e) {
            textEror.textContent = e;
        }
    });

    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output");
    output.textContent = salary.value;
    salary.addEventListener("input", function() {
        output.textContent = salary.value;
    });
});