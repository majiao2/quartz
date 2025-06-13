---
title: "Python-Basic Syntax"
date: "2025-06-11"
tags:
  - MISY350
---

> [!example] Multitier Application Architecture
> - Web-based applications are often multitier applications that divide functionality into separate tiers. Although tiers can be located on the same computer, the tiers of web-based applications typically reside on separate computers.
> - <mark style="background: #FF5582A6;">The bottom tier</mark> (also called the data tier or the information tier) maintains the application’s data.
> - <mark style="background: #FF5582A6;">The middle tier</mark> implements business logic, controller logic and presentation logic to control interactions between the application’s clients and its data.
>     - Business logic in the middle tier enforces business rules and ensures that data is reliable before the server application updates the database or presents the data to users. Business rules dictate how clients can and cannot access application data, and how applications process data.
> - <mark style="background: #FF5582A6;">The top tier</mark>, or client tier, is the application’s user interface. In response to user actions, the client tier interacts with the middle tier to make requests and to retrieve data from the information tier. The client tier then displays the data retrieved for the user. The client tier never directly interacts with the information tier.  

![[Pasted image 20250611084243.png]]  

# Multitier Application Architecture
<mark style="background: #FF5582A6;">Top tier/client tier/presentation tiera</mark>
- Static or dynamically generated content rendered by the browser (front-end), e.g., HTML, CSS, JavaScript, jQuery
<mark style="background: #FF5582A6;">Logic tier</mark>
- An application server for dynamic content processing and generation (middleware), e.g, Python, PHP, Java EE, [ASP.NET](https://asp.net/)
<mark style="background: #FF5582A6;">Data tier</mark>
- A DBMS that manages and provides access to the data (back-end), e.g., MySQL, SQL Server, Oracle, DB2

> [!abstract] Client-side scripting
> - Client-side scripting can
>     - validate user input
>     - interact with the browser,
>     - enhance web pages
>     - add client/server communication between a browser and a web server.
> - Limitations of client-side scripting
>     - The browser or scripting host must support the scripting language and capabilities
>     - Sensitive information, such as passwords or other personally identifiable data, cannot be stored or validated on the client
>     - Placing large amounts of JavaScript on the client can cause security issues

> [!abstract] Server-side scripting
> - Server-side scripting languages have a wider range of programmatic capabilities than their client-side equivalents
> - Limitations of server-side scripting
>     - Increased demand for computing resources on the server
>     - Increased network traffic
>     - Dependent on a network connection

> [!done] Accessing Web Servers
> - To request documents from web servers, users must know the hostnames on which the web server software resides.
> - Users can request documents from local web servers or remote web servers.
> - Local web servers can be accessed through the name `localhost`—a hostname that references the local machine and normally translates to the IP address `127.0.0.1` (also known as the loopback address)
> - A remote web server can be accessed by a domain name (which is translated to an IP address by Domain Name Servers) or an IP address  

# Introduction to Python  
