window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//Templete literal Es6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>"
    
    let innerHtml = `${headerHtml}`;                   
    let empPayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
    <tr>
        <td><img class="profile" alt="" src=${empPayrollData._profilePic}></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/image9.png" width="0%">
            <img name="${empPayrollData._id}" alt="edit" onclick="update(this)" src="../assets/image8.svg" width="15%">
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

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: "Pallavi Krishna",
            _gender: 'Female',
            _department: [
                'HR',
                'Finance'
            ],
            _salary: '50000',
            _startDate:'29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic:'../assets/image1.jpg'
        },
        
        {
            _name: "Amarpa Shashanka Keerthi Kumar",
            _gender: 'Female',
            _department: [
                'sales',
                'Finance'
            ],
            _salary: '70000',
            _startDate:'29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic:'../assets/image2.jpg'
        },
    ];
    return empPayrollListLocal;
}

