var inquirer = require("inquirer");
var connection = require('./config');
const viewOptions = [
    
    "View Departments",
    "View Roles",
    "View Employees",
    "Update Employee",
    "test",
    "exit"
];

var employeeOptions = [];

const updateOptions = [
    "first_name",
    "last_name",
    "role_id",
    "exit"
];
getEmployees();
init();

function init() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: viewOptions
        })
        .then(function (answer) {
            switch (answer.action) {
 
                case viewOptions[0]:
                    departmentView();
                    break;

                case viewOptions[1]:
                    roleView();
                    break;

                case viewOptions[2]:

                    //console.log(answer)
                    employeeView();
                    break;

                case viewOptions[3]:
                    
                    updateEmployee();
                case viewOptions[4]:
                    getEmployees();

                case viewOptions[5]:
                    connection.end();
                    break
            }
        })
}



function departmentView() {
    var sqlStr = "SELECT * FROM department";
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;

        console.table(result)
        runSearch();
    })
}

function employeeView() {
    var sqlStr = "SELECT first_name, last_name, title, salary FROM employee ";
    sqlStr += "LEFT JOIN role ";
    sqlStr += "ON employee.role_id = role.id"
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;

        console.table(result)
        runSearch();
    })
}

function roleView() {
    var sqlStr = "SELECT * FROM role";
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;

        console.table(result)
        runSearch();
    })
}


const updateEmployee = () => {
   
          inquirer.prompt([{
                name: "employee",
                type: "list",
                message: "Which employee do you want to update?",
                choices: employeeOptions
            },
            {
            name: "whatToUpdate",
            type: "list",
            message: "Which employee do you want to update?",
            choices: updateOptions
        },
        {
        name: "updateValue",
        type: "input",
        message: "Which employee do you want to update?",
        
    }]).then(function(answer) {


        var splitStr = answer.employee.split(" ")
        var fname = splitStr[0];
        var lname = splitStr[1];

        var sqlStr = `employee SET ${answer.whatToUpdate} = ${answer.updateValue} WHERE first_name = ${fname} AND last_name = ${lname}`

        connection.query(sqlStr, function (err) {
            if (err) throw err;
    
          
        })
          
    
            })
           
    
     
    
}


function getEmployees() {

    var sqlStr = "SELECT first_name, last_name FROM employee ";

    connection.query(sqlStr, function (err, result) {
        if (err) throw err;
        for (let index = 0; index < result.length; index++) {
            employeeOptions.push(result[index].first_name+" "+result[index].last_name)
            
        }
        //console.log(employeeOptions);

       
       
    })


    
}







                            


