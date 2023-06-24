
create database itss;
use itss ; 

create table user  (
id int auto_increment primary key,
username VARCHAR(50) NOT NULL,
email VARCHAR(255),
verified_time DateTime,
password VARCHAR(8) NOT NULL,
create_at DateTime NOT NULL,
update_at DateTime NOT NULL,
status INT NOT NULL,
avatar VARCHAR(255) ,
name VARCHAR(255),
gender VARCHAR(255),
address VARCHAR(255)

); 



create table food(
id int auto_increment primary key,
name VARCHAR(255) NOT NULL,
image VARCHAR(2555),
description VARCHAR(255),
status INT,
create_at TIMESTAMP,
update_at TIMESTAMP
);

create table food_attribute (
id int auto_increment primary key,
user_id INT,
but_at TIMESTAMP,
status INT NOT NULL,
buy_address VARCHAR(255),
measure  VARCHAR(10),
quantity decimal(10,0)

);


create table dish(
id int auto_increment primary key,
name INT NOT NULL,
descriptions TEXT,
status INT NOT NULL,
type varchar(255) not null,
create_at TIMESTAMP,
update_at TIMESTAMP

);
create table dish_attribute(
id int auto_increment primary key,
dish_id INT NOT NULL,
recipe_des TEXT NOT NULL,
expride TIMESTAMP,
cook_status int,
cook_date timestamp,
create_at TIMESTAMP,
update_at TIMESTAMP, 
foreign key (dish_id) references dish(id)
);


create table recipe_food(
id int auto_increment primary key,
recipe_id INT NOT NULL, 
food_id INT NOT NULL, 
foreign key (recipe_id) references dish_attribute(id) , 
foreign key(food_id) references food(id)
);

create table group_table (
id int auto_increment primary key,
leader INT NOT NULL , 
name VARCHAR(255) NOT NULL, 
create_at TIMESTAMP , 
update_at TIMESTAMP , 
foreign key (leader) references user(id)
);

create table group_member(
id int auto_increment primary key,
group_id int not null , 
user_id int not null, 
foreign key (group_id) references user(id), 
foreign key (user_id) references group_table(id)
); 

create table group_food( 
id int auto_increment primary key,
group_id INT not null, 
food_id INT not null, 
foreign key	(group_id) references group_table(id), 
foreign key (food_id) references food(id)
); 

create table favorite( 
id int auto_increment primary key,
user_id int not null, 
recipe_id int not null, 
foreign key (user_id) references user(id), 
foreign key (recipe_id) references dish_attribute(id)
);

create table fridge (
id int auto_increment primary key,
name varchar(100) not null,
food_id int ,
quantity int,
foreign key (food_id) references food(id)
);

