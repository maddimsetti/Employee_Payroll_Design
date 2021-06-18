window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromstorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromstorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}
 
//Templete literal Es6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>"
    
    if(empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;                   
    for(const empPayrollData of empPayrollList) {
        console.log(empPayrollData._id +"this is my id");
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src=${empPayrollData._profilePic}></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${stringifyDate(empPayrollData._startDate)}</td>
            <td>
                <img id="${empPayrollData._name}"    src='../assets/bin.svg' onclick="remove(this)" alt="delete">
                <img id="${empPayrollData._name}"   src="../assets/image10.svg" width="10%" onclick="update(this)" alt="edit">
            </td>
        </tr>`
        ;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const remove = (node) => {
    console.log(node);
    let empPayrollData = empPayrollList.find(empData => empData._id == node._id);
    if(!empPayrollData) return;
    const index = empPayrollList.map(empData => empData._id)
                                .indexOf(empPayrollData._id);
    empPayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}




