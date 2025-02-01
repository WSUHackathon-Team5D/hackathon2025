CREATE TABLE IF NOT EXISTS "users" (
Email varchar(50) UNIQUE NOT NULL,
username varchar(50) UNIQUE NOT NULL primary key,
password varchar(50) NOT NULL,
Fname varchar(50),
Lname varchar(50)
);
CREATE TABLE IF NOT EXISTS "pet"(
    petname varchar(50) NOT null,
    piepic VARBINARY(MAX)
    constraint owner_email foreign key (Email),
    likes INT,
    imageId INT UNIQUE not null primary key
);
