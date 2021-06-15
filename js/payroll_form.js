window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector("#name");
    const textEror = document.querySelector('.text-error');
    name.addEventListener("input", function() {
        if(name.value.length == 0) {
            textEror.textContent = " ";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
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

const save = () => {
    try {
        let employyeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employyeePayrollData);
    } catch(e) {
        return;
    }
}

const createEmployeePayroll = () => {
    let employyeePayrollData = new EmployeePayrollData();
    try {
        employyeePayrollData.name = getInputValueById("#name");
    } catch(e) {
        setTextValue(".text-error",e);
        throw e;
    }
    employyeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
    employyeePayrollData.gender = getSelectedValues("[name=gender]").pop();
    employeePayrollData.department = getSelectedValues("[name=department]");
    employyeePayrollData.salary = getInputValueById("#salary");
    employyeePayrollData.note = getInputValueById("#notes");
    let date = getInputValueById("#day")+ " " + getInputValueById("#month") +" "+ getInputValueById("#year");
    employyeePayrollData.date = Date.parse(date);
    alert(employyeePayrollData.toString());
    return employyeePayrollData;
}

function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData]
    }
    alert(employyeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

/*
 * 1: querySelector is the newer feature.
 * 2: The querySelector method can be used when selecting by element name, nesting, or class name.
 * 3: querySelector lets you foind elements with rules that can't be expressed with getElementById
 */
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

/*
 * 1: getElementById is better supported than querySelector in older versions of the browsers.
 * 2: The thing with getElementById is that iot only allows to select an element by its id.
 *
const getInputValueById = (id) => {
    let value = document.getElementById(id).value;
    return value;
}
*/

const getSelectedValues = (propertyValue) => {
    let allItems =document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const resetForm = () => {
    setValue('#name','');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setvalue('#year','2021');
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    }); 
}

const setTextValue = () => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}