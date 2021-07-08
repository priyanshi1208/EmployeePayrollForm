let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => { 
    empPayrollList=getEmpPayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp'); 
});

const getEmpPayrollDataFromStorage =() =>{
    return localStorage.getItem('EmployeePayrollList')?JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

const createInnerHtml = () => { 
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th>"+
                        "<th>Actions</th> ";
    if(empPayrollList.length==0) return;
    let innerHtml=`${headerHtml}`;
    for(const empPayrollData of empPayrollList){
        innerHtml=`${innerHtml}
        <tr> 
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td> 
            <td>${empPayrollData._name}</td> 
            <td>${empPayrollData._gender}</td> 
            <td>${getDeptHtml(empPayrollData._department)}</td> 
            <td>${empPayrollData._salary}</td> 
            <td>${empPayrollData._startDate}</td> 
            <td> 
                <img id="${empPayrollData._id}" onclick="remove(this)" src="../images/icons/delete-black-18dp.svg" alt="delete"> 
                <img id="${empPayrollData._id}" onclick="update(this)" src="../images/icons/create-black-18dp.svg" alt="edit"> 
            </td> 
        </tr>`
        ;
    }
    document.querySelector('.table').innerHTML = innerHtml;
}
const getDeptHtml=(deptList)=>{
    let deptHtml='';
    for(const dept of deptList){
        deptHtml=`${deptHtml}<div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}
// const createEmployeePayrollJSON= () => {
//     let empPayrollListLocal = [ 
//         { 
//             _name: 'Narayan Nahadeyan', 
//             _gender: 'male', 
//             _department:[ 
//                 'Engineering', 
//                 'Finance' 
//             ], 
//             _salary: '500000', 
//             _startDate: '29 Oct 2019', 
//             _note: '', 
//             _id: new Date().getTime(), 
//             _profilepic: '../images/profile-images/Ellipse -2.png' 
//         }, 
//         {
//             _name: 'Marna Shashanka Keerthi Kumar', 
//             _gender: 'female', 
//             _department: [ 
//                 'Sales' 
//             ],
//             _salary: '400000',
//             _startDate: '29 Oct 2019', 
//             _note: '',
//             _id: new Date().getTime(), 
//             _profilePic: '../images/profile-trages/Ellipse -1.png' 
//         }
//     ];
// return empPayrollListLocal;
// } 
