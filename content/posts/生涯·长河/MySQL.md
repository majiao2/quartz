---
title: MySQL
date: 2025-05-26
tags:
  - MISY350
---
[[Web Applications-Design Principles]]

> [!example] MySQL
> - MySQL is a <mark style="background: #FFB86CA6;">relational database management system</mark> (RDBMS)
> - We use the MySQL database included in MAMP (Do NOT use MAMP Pro)

> [!example]+ Structured Query Language (SQL)
> - SQL is a database language for:
>     - creating database and table structures
>     - performing data manipulation and administration
>     - querying the database to extract useful information
> - It is a <mark style="background: #FFB86CA6;">nonprocedural</mark> language
>     - The user specifies <mark style="background: #D2B3FFA6;">what</mark> must be done, but not <mark style="background: #D2B3FFA6;">how</mark>
>     - Where the data is actually stored isn’t important  
>         …only the specified relations and relationships matter


> [!important]+ Structured Query Language (SQL)
> - All relational DBMS software thus supports SQL
> 	- Oracle, MySQL, SQL Server, DB2, MS Access
> 	- Many database vendors have developed extensions
> 		- Basic, simple vocabulary of < 100 “words”
> 		- Different “dialects” with minor differences

Categories of SQL commands

- Data Definition Language (DDL)
    
- Commands that define a database, including creating, altering, and dropping tables and stored procedures, and establishing constraints
    
- CREATE TABLE, set PRIMARY KEY
    
- Data Manipulation Language (DML)
    
- Commands that are used to manipulate data and extract information
    
- SELECT, UPDATE, INSERT, DELETE
    

Data types (cont.)

- MySQL data types  
    ([http://dev.mysql.com/doc/refman/5.1/en/data-types.html](http://dev.mysql.com/doc/refman/5.1/en/data-types.html)):
    
    - Primary numeric types:
        - TINYINT -128 to 127 (or 0 to 255) = 1 byte
        - SMALLINT -32768 to 32767 (or 0 to …) = 2 bytes
        - MEDIUMINT -8.39 x 10^6 to 8.39 x 10^6 = 3 bytes
        - INT -2.15 x 10^9 to 2.15 x 10^9 = 4 bytes
        - BIGINT -9.22 x 10^18 to 9.22 x 10^18 = 8 bytes
        - DECIMAL(M, D) M total digits / D digits after decimal

MySQL data types (cont.)

- Primary date and time types:
    - DATE ‘YYYY-MM-DD’ format  
        range: ‘1000-01-01’ to ‘9999-12-31’
    - DATETIME ‘YYYY-MM-DD HH:MM:SS’ format  
        range: ‘… 00:00:00’ to ‘… 23:59:59’

Invalid dates and times are converted to zero values: ‘0000-00-00’

Some built-in functions:  
NOW(), CURDATE(), DATEDIFF(), INTERVAL DATE(), TIME(), DAY(), YEAR(), MONTH(), etc.

MySQL data types (cont.)

• Primary string types:  
• CHAR(n) - always allocates n bytes of storage  
• VARCHAR(n) - only allocates used space (plus 1 byte)  
Values that exceed n characters in length are truncated  
• BLOB - used for large binary strings of data  
• TEXT - used for large character strings of data  
• ENUM - string object with a value chosen from a list of permitted values that is specified at table creation time

Sample Database

• Posted on Canvas:  
• lunchDB.sql (MySQL 5.0)  
• We will be running examples of queries on this database as we cover the material in class, to help illustrate how the different SQL statements work.

![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAsVBMVEVHcEzm6PHl6fHm6vLm6fLm6fHm6fLm6vLk6PHf3+/m6vHm6fLn5/fn6/Pn5/Pl6vLn5+/f7+/m6/Pm6vPf3//l6fHk6vLl5/Hm6fHl6PHn6vLm6fHo6vTl6fPm5vHn5/Lk5/Lm6/Hn6/Pm6fPm6vEaICnm6fJna3TN0NnZ3OU0OULNz9lNUluAhI0nLTZzeIFARU5zd4CAhY6zt7+mqrNaX2iZnqdARk/AxM2zt8CZnaYyn2x3AAAAJXRSTlMAcIC/39+v75AQ7+8gQECfIBCPjxDPYIDPsJ+gb89wYGBwf8/PXr3f9QAAAWdJREFUOMuNldd2gzAQREXvBuLgEqcniGLAxOn5/w+LigGJJuZpfPYejSRWawA4eU+6ZkBoRLrsgUldPyOmk+q749gaDjSG3hpwROqmz63hhK74WAVOKrIY8A7OSFmQ20vfQIEkyrmqCHToNm+gUCTchQtk9RZ8/8zjOCM2K4sqTpqCjEBmh6cY64jtT45tCzoArDqujFswJVwHQg/Irc9IsUhw9Be21emXuSG99R+4WFP/jWyeMrvfgxc+uaSerM21Eei6K8HVP7qLAegAyINVjddMyVHyggnvgzG5x/Ri3xjQGIDHDkyYaHUZ+Mpczyy4B9IyUGY+4SyIxoHBtwQ5ddY/tYa6Z9v8oI1QnbE/E65u79FHYLikcQPc4qaY88mbCQ0RpwX0Gd6LwMfmYQvCzW5UKHNcxMyecDczeixunpkLcqketDHMloYjNziMLGeNTvHgwK1qb63pP4aVrO9sxGi6tOIr/4xNt/ViQm5CAAAAAElFTkSuQmCC)

引用

![图片6](https://sfile.chatglm.cn/chatglm4/8d0e5b0c-8d0e-4a81-b8b5-8d0e5b0c8d0e.png)  
图片描述: SQL Commands

- SQL Commands are made up of:
    
    - Clauses - individual components of a command
    - Keywords - reserved words used in SQL statements
    - Identifiers - names of database objects like tables and columns
    - Constants - fixed values used in SQL statements
    - Expressions - combinations of identifiers, constants, and operators that evaluate to a value
- SQL commands can be divided into two main categories:
    
    - Data Definition Language (DDL) - used to define the database structure
    - Data Manipulation Language (DML) - used to manipulate the data in the database
- SQL commands can also include:
    
    - Data Control Language (DCL) - used to control access to the data in the database
    - Transaction Control Language (TCL) - used to manage transactions in the database






















