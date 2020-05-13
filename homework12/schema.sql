DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;
CREATE TABLE department(
id integer auto_increment not null,
name varchar(30) not null,
primary key(id)
);
CREATE TABLE role(
id integer auto_increment not null,
title varchar(30) not null,
salary decimal not null,
department_id Integer not null,
constraint fk_department_id foreign key (department_id) references department(id),
primary key(id)
);
CREATE TABLE employee(
id integer auto_increment not null,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id integer not null,
constraint fk_role_id FOREIGN KEY (role_id) REFERENCES role(id),
manager_id integer ,
constraint fk_manager_id FOREIGN KEY (manager_id) REFERENCES employee(id),
Primary key(id)
);

select * from employee;
select * from role;
select * from department;

INSERT into department (name)
VALUES ("Covert Ops");
INSERT into department (name)
VALUES ("Intelligence");
INSERT into department (name)
VALUES ("Lobbying");
INSERT into department (name)
VALUES ("Truth Telling");
INSERT into department (name)
VALUES ("Farming");

select * from department;

INSERT into role (title, salary, department_id)
VALUES ("CEO", 45000, 1);
INSERT into role (title, salary, department_id)
VALUES ("CFO", 35000, 1);
INSERT into role (title, salary, department_id)
VALUES ("Driver", 43000, 2);
INSERT into role (title, salary, department_id)
VALUES ("Accountant", 50000, 3);
INSERT into role (title, salary, department_id)
VALUES ("Agent1", 50000, 4);
INSERT into role (title, salary, department_id)
VALUES ("Agent2", 65000, 5);

select * from role;

INSERT into employee (first_name, last_name, role_id)
values ("David", "Schwimmer", 3); 
INSERT into employee (first_name, last_name, role_id)
values ("Jennifer", "Aniston", 4);
INSERT into employee (first_name, last_name, role_id)
values ("Matthew", "Perry", 5);
INSERT into employee (first_name, last_name, role_id)
values ("Courtney", "KCox", 6);
INSERT into employee (first_name, last_name, role_id)
values ("Matt", "LeBlanc", 7);
INSERT into employee (first_name, last_name, role_id)
values ("Lisa", "Kudrow", 8);

