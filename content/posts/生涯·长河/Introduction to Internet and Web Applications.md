---
title: Introduction to Internet and Web Applications
date: 2025-05-21
tags:
  - MISY350
---
# Internet & World Wide Web
> [!note]+ Introduction
> - The Internet and web programming technologies are designed to be <font color="#c0504d"><span style="background:#d3f8b6">portable (portability)</span></font>, allowing you to design web pages and applications that run across an enormous range of Internet enabled devices.
> - <span style="background:#d3f8b6">Client-side</span> programming: technologies are used to build web pages and applications that are run on the client (i.e., in the browser on the user’s device).
> - <span style="background:#d3f8b6">Server-side</span> programming: the applications that respond to requests from client-side web applications, such as searching the Internet, checking your bank-account balance, ordering a book from Amazon, and ordering concert tickets.

> [!example]+ Web Basics
> In its simplest form, <span style="background:#d3f8b6">a web page</span> is an <font color="#c0504d">HTML</font> (HyperText Markup Language) document (with the extension .html or .htm) that describes to a web browser the document’s content and structure.
> > [!summary] Hyperlinks
> > - HTML documents normally contain <span style="background:#d3f8b6">hyperlinks</span>, which, when clicked, load a specified web document
> > - Both images and text may be hyperlinked.
> > - When the user clicks a hyperlink, a web request is sent to a <span style="background:#d3f8b6">web server</span>, which locates the requested web page and sends it back to the user’s web browser.
> > - Similarly, the user can type the address of a web page into the browser’s address field and press Enter to view the specified page.
> > - Hyperlinks can reference other web pages, e-mail addresses, files and more.
> > - If a hyperlink’s URL is in the form mail to: emailAddress, clicking the link loads your default e-mail program and opens a new <span style="background:#d3f8b6">message window</span> addressed to the specified e mail address.
> > - If a hyperlink references a file that the browser is incapable of displaying, the browser prepares to <span style="background:#d3f8b6">download</span> the file, and generally prompts the user for information about how the file should be stored.

> [!attention]+ URIs and URLs
> - URIs (Uniform Resource Identifiers) identify resources on the Internet.
> - URIs that start with http:// are called URLs (Uniform Resource Locators
> - Part of URL
> > - A URL contains information that directs a browser to the resource that the user wishes to access
> > - <span style="background:#d3f8b6">Web servers</span> make such resources available to web clients
> > - Popular web servers include Apache’s HTTP Server and Microsoft’s Internet Information Services (IIS)
> - Let’s examine the components of a URL
> > - "http://" indicates that the HyperText Transfer Protocol (HTTP) should be used to obtain the resource
> > - Next in the URL is the server’s fully qualified <span style="background:#d3f8b6">hostname</span> (e.g., www.deitel.com)—the name of the web-server computer on which the resource resides
> > - This computer is referred to as the <span style="background:#d3f8b6">host</span>, because it houses and maintains resources
> > - The hostname www.deitel.com is translated into an <span style="background:#d3f8b6">IP (Internet Protocol) address</span>
> > - An Internet <span style="background:#d3f8b6">Domain Name System (DNS) server</span> maintains a database of hostnames and their corresponding IP addresses and performs the translations automatically

> [!cite]+ *HTTP GET* and *POST Requests*
> - The two most common <span style="background:#fff88f">HTTP request types</span> (also known as <span style="background:#fff88f">request methods</span>) are GET and POST.
> - A **GET** request typically gets (or retrieves) information from a server, such as an HTML document, an image or search results based on a user-submitted search term.
> - *How a GET request works*
>	- A GET request appends data to the URL, e.g., [www.google.com/search?q=deitel&sourceid=chrome](https://www.google.com/search?q=deitel&sourceid=chrome).
>	- In this case search is the name of Google’s server - side form handler, q is the name of a variable in Google’s search form and deitel is the search term.
>	- The ? in the preceding URL separates the query string from the rest of the URL in a request.
>	- A name/value pair is passed to the server with the name and the value separated by an equals sign (=).
>	- If more than one name/value pair is submitted, each pair is separated by an ampersand (&).
>	- The server uses data passed in a query string to retrieve an appropriate resource from the server.
>	- The server then sends a response to the client. A GET request may be initiated by submitting an HTML form whose method attribute is set to "GET", or by typing the URL (possibly containing a query string) directly into the browser’s address bar.
> - A **POST** request typically posts (or sends) data to a server.
> - <u>However, both request types can send data from the client to a server</u>
> - *How a POST request works*
>	- A POST request sends form data <span style="background:#fff88f">as part of the HTTP message, not as part of the URL</span>.
>	- A GET request typically limits the query string (i.e., everything to the right of the ?) to a specific number of characters, so it's often necessary to send large amounts of information using the post method.
>	- The POST method is also sometimes preferred because it hides the submitted data from the user by embedding it in an HTTP message.
>	- If a form submits several hidden input values along with user - submitted data, the POST method might generate a URL like [www.searchengine.com/search](https://www.searchengine.com/search).
>	- The form data still reaches the server and is processed in a similar fashion to a GET request, but the user does not see the exact information sent.

> [!success]+ Model-View-Controller (MVC)
> - Model: Represents application data and business rules that govern data accessing and updates
>   View: Renders the user interface
>   Controller: Interprets user actions and events and maps them into actions in the model or the view

# Web Developer Readmap
[Developer Roadmaps - roadmap.sh](https://roadmap.sh/)
