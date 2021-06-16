window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//Templete literal Es6 feature
const createInnerHtml = () => {
    const innerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td><img class="profile" alt="" src="../assets/image2.jpg"></td>
        <td>Pallavi Krishna</td>
        <td>Female</td>
        <td>
            <div class="dept-label">Engineering</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>30000</td>
        <td>1 NOV 2020</td>
        <td>
        <img id="1" onclick="remove(this)" alt="delete" src="../assets/image9.png" width="0%">
        <img id="1" alt="edit" onclick="update(this)" src="../assets/image8.svg" width="15%">
        </td>
    </tr>`
    ;
    document.querySelector("#table-display").innerHTML = innerHtml;
}