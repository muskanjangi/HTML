“Documents and resources are stored on the web system. They can be accessed using the internet. The internet contains a lot of things, and one of them is the web.”The internet is a big entity and the web is smaller entity.


What is Website ?
-Shows static content (fixed information).
-When you reload, the page usually does not change (unless updated by the owner).
-User interaction is very limited (just reading, clicking links).
Example: A company’s “About Us” page.

What is Web Application ?
-Shows dynamic content (changes depending on user actions or data).
-When you reload, the content may change (because it comes from a database or server).
-Allows a lot of user interaction (frms, accounts, shopping carts, comments).
Example: Facebook, Gmail, Amazon.

**A website = mostly read-only, static info.
**A web application = interactive, dynamic, user-driven.

What is Full-Stack Web development ?
-A web application is built using three layers: the frontend, the backend, and the database. The frontend is what users see when they open a website, such as buttons, images, and visual designs. It is developed using technologies like HTML, CSS, JavaScript, and frameworks such as React. The backend is considered the brain of the application because it handles the logic and functionalities. For example, if you play Tic Tac Toe and place three O’s consecutively, the backend determines that you are the winner. The database layer is where all the data is stored, such as LinkedIn profiles and posts. Databases can be of different types, including SQL, NoSQL, and relational databases.

Full Stack Web Development combines all three layers—frontend, backend, and database—into one skill set. A popular approach to full stack development is the MERN Stack, where M stands for MongoDB, E for Express.js, R for React, and N for Node.js. By learning the MERN Stack, one can build complete projects, start freelancing, secure a job, and eventually earn money.

What are Networks?
- Devices like computers, laptops, printers, and mobiles are systems that can connect with each other, and this connected system as a whole is called a network.
For example:
In a house, your phone, your mother’s laptop, and your father’s tablet are all connected to a Wi-Fi router. This type of network is called LAN (Local Area Network).
When cities like Delhi, Punjab, and Haryana are connected, the network is called MAN (Metropolitan Area Network).
When countries like India, China, and Nepal are connected, the network is called WAN (Wide Area Network).
Through these networks, you can share resources, communicate, send messages, and exchange information.

What is Internet?
- The Internet is the global system that connects billions of devices. It is called the network of networks. In simple words, networks like LAN, MAN, and WAN combine together to form the Internet. It is a super-entity of networks.
Basically, browsing websites, using WhatsApp, checking email, scrolling through Instagram, online shopping, booking cabs, and playing online games are practical examples of how the internet is used.
Within the Internet, there is the WWW (World Wide Web), which is a smaller entity where documents and resources are stored and can be accessed using the Internet.
What is WWW?
-The World Wide Web is a system where numerous web pages are linked to each other, and their HTML, CSS, and JavaScript code is interconnected through hyperlinks.
What is ip address?
-If I want to send a gift to my friend, I need to know the address of his house. Similarly, when a machine is connected to the internet, it has an IP address—a unique identifier that distinguishes it from other machines. So, if Machine 1 wants to send data to Machine 2, it must know the IP address of Machine 2.


What are Borowsers?
-Browsers are tools used to access documents, resources, websites, and web applications. Popular browsers include Google Chrome, Safari, Mozilla Firefox, and Opera. The browser engine acts as the brain of the browser, responsible for interpreting code and rendering content on the screen.
eg-Imagine you’re reading a recipe (HTML), decorating the dish (CSS), and adding some cool effects like steam or sizzling sounds (JavaScript). The browser engine is the chef that reads all those instructions and brings the dish to life on your plate (screen).
** Google Chrome and Opera use the Blink browser engine, Safari uses WebKit, and Mozilla Firefox uses Gecko.

//Client-Server model:
A client sends requests to a server, and the server responds accordingly. These requests come in various types:
- GET – used to retrieve data from the server
- POST – used to send data to the server,or want to create something 
- PUT – used to update or modify existing data
- DELETE – used to remove data from the server
Clients can include devices or interfaces such as laptops, PCs, mobile phones, applications, command-line interface , and browsers. Servers, on the other hand, can be of different types, such as database servers, web servers, email servers, file servers, and application servers.

eg-if a user types www.fb.com to request data, the response requires an IP address.
This is because www.fb.com is a domain name, and the DNS (Domain Name System) converts it into an IP address.
In detail:
- When a user requests data by entering a domain name, the system performs domain name resolution to find the corresponding IP address.
- Once the IP address is obtained, the request is sent to the Facebook server.
- The server processes the request and returns a response, which is then displayed as data on the user's device.
eg- If Sushant wants a good haircut and he requests Nitin to give him one, then think of Nitin as the domain name. This domain name is converted into an IP address, and the haircut is the request. Nitin, acting as the server, receives the request and provides the response by giving the haircut.

How Internet Works?
The Internet is a combination of two words: 'Inter', which means interconnected, and 'Net', which means networks.
History of Internet
In the 1960s, there was a project called ARPANET, basically designed by the defense army. Let's say Machine 1 wants to send data of 10 MB to Machine 2—this data is sent in the form of small chunks called packets so that, in case of war, at least some of the data can be received at the destination. In the 1970s, it increased in strength so a wider mass could take advantage of it. In the 1980s, DNS was introduced, which translates the URL to an IP address, sends the request to the destination, and receives the response. In the 1990s, email, messaging, and shopping came into existence so people could benefit from them. In the 2000s, Facebook was launched, allowing us to communicate. Also, the rise of mobile phones started from there. In today's world, we can talk to a person sitting in the USA. We can access AI tools through the Internet and take advantage of AI to build big projects in less time.


**When Machine 1 sends a request to Machine 2, the request doesn’t go directly. Even though an IP address is involved, it’s important to understand who generates it. The IP address is assigned by the ISP—Internet Service Provider. ISPs like Airtel, Jio, and Vodafone are the companies that allow us to access the Internet. So, when Machine 1 initiates a request, it first goes through its respective ISP, which assigns an IP address to the device. The request is then routed to Machine 2 using this IP address, allowing communication between the two machines.

What are Packets?
When Machine 1 sends a large file of 100 MB to a destination, the file is divided into smaller chunks called packets. Each packet is assigned a sequence number so that, once all packets reach the destination, they can be reassembled in the correct order. This process ensures reliable data transfer, even if packets arrive out of sequence or take different paths through the network.

**if PC 1 has the Gmail application and sends a message to PC 2, which also has Gmail, how do the two applications interact? There is a model called TCP/IP, which has four layers. The Application layer interacts with the application itself—this is the layer we see, like Gmail. The TCP layer deals with port numbers, meaning PC 1 wants to interact with a specific application on PC 2. The IP layer handles the IP address, and the Hardware layer deals with the physical transmission. These layers work in sequence when sending Gmail. This model came into existence after an earlier model with seven layers,which is OSI model, which had some disadvantages—so the switch was made to the TCP/IP model.
Between these two PCs, there is the Internet. Now we understand how Gmail is sent from PC 1 to PC 2. A protocol is a set of rules, and in the case of sending Gmail, the protocol used is SMTP (Simple Mail Transfer Protocol). Using this protocol, PC 1 in India and PC 2 in the USA can both write and send emails because the protocol is the same for everyone. To communicate, both sides must understand a common language.
PC 1 passes through these four layers one by one and performs the tasks required by each layer—like specifying the port number, IP address, and converting the data into binary (0s and 1s), since machines understand binary language. Through the Internet, these 0s and 1s are transmitted, and then the IP address of PC 2, the port number, and the Gmail application are identified. Finally, the data reaches the Application layer. This is how Gmail is sent.

**Internet Data Flow: From Client to Server-
When a user initiates a request through their browser, the data first passes through the TCP/IP stack, where protocols manage how it's sent. The DNS system resolves the domain name into an IP address, allowing the browser to identify the destination server. This request is then routed through the user's Local ISP, which forwards it to a Regional ISP, and eventually to a Network Service Provider (NSP)—the backbone of the internet. From there, the data travels through multiple routers until it reaches the target server. Once the server processes the request, the response follows the same path in reverse: through routers, NSP, Regional ISP, Local ISP, and finally back to the client’s browser, completing the communication loop.

**What is NAP?
A NAP (Network Access Point) is a crucial part of the internet's infrastructure where multiple Internet Service Providers (ISPs) interconnect their networks to exchange data traffic. Think of it as a major junction or hub—like a highway interchange—where digital traffic from different networks meets and is efficiently routed to its destination. These points are equipped with high-capacity hardware and are strategically located to handle large volumes of internet traffic. NAPs improve speed, reliability, and performance by allowing ISPs to exchange data directly, reducing latency and ensuring redundancy. This setup helps maintain the stability and resilience of the global internet, especially during high traffic or network failures.
**Analogy-
Imagine the Internet as a Delivery System
- Local ISP → Like your neighborhood courier. It picks up packages (data) from your house and takes them to the city hub.
- Regional ISP → Like a city-level logistics center. It gathers packages from many neighborhoods and sends them to the state hub.
- National ISP (NSP) → Like a national shipping company. It moves packages across states or even countries using highways and air routes.
- NAP (Network Access Point) → Like a massive airport or cargo terminal where different shipping companies meet and exchange packages. It doesn’t deliver anything itself—it just connects networks so packages can switch carriers and reach faraway destinations.


//A modem is a device that connects your home or office to the internet by converting digital signals from your computer into analog signals that can travel over telephone or cable lines, and vice versa. It acts as a bridge between your local network and your Internet Service Provider (ISP). A router, on the other hand, creates a local network by connecting multiple devices and managing data traffic between them and the internet. It assigns IP addresses to each device and ensures that data reaches the correct destination. While a modem provides access to the internet, a router distributes that access to various devices. A switch is used within a local network to connect multiple devices and intelligently forward data only to the intended recipient, improving efficiency. A hub also connects devices but broadcasts data to all of them, making it less secure and slower than a switch. In summary, the modem brings the internet in, the router shares it, the switch organizes it, and the hub simply spreads it without direction.

//sending the packet
When a client sends a request over the internet, the data packet includes both the source IP address (the client's address) and the destination IP address (the server's address). This packet is first received by a router, which plays a crucial role in directing the data to its destination. The router examines the destination IP and consults its internal routing table—a database that contains information about various IP address ranges and the best routes to reach them. Based on this lookup, the router selects the most efficient path and forwards the packet to the next router or directly to the destination if it's nearby. This process may involve multiple hops, with each router making decisions based on its own routing table. The packet continues to travel through the network until it reaches the target server, ensuring reliable and optimized delivery across the internet.

//To find the server IP address of www.google.com, you can use the nslookup command in your terminal.

//in brief-
On a client PC, when a browser requests www.google.com, the query goes to the Domain Name System (DNS) for domain name resolution. The DNS contacts the domain name server to obtain the corresponding IP address. Once the IP address is retrieved, the request is forwarded to the Internet Service Provider (ISP), then to the Network Service Provider (NSP), followed by the router, and finally reaches the destination server.

//TREE STRUCTURE OF DNS-
The Domain Name System (DNS) is structured like an inverted tree, starting from the root at the top and branching downward into various levels. At the very top is the root domain, represented by a dot (.), which connects to Top-Level Domains (TLDs) such as .com, .org, .net, and country-specific ones like .in. Beneath each TLD are second-level domains like google.com or amazon.in, which are typically registered by organizations or individuals. These can further branch into subdomains, such as mail.google.com or blog.amazon.in, representing specific services or hosts. When a user enters a domain name, DNS works hierarchically—starting from the root, moving through the TLD, then to the second-level domain, and finally to the subdomain—to resolve the name into an IP address. This tree-like structure ensures efficient and scalable navigation across the vast landscape of the internet.

//There are three commonly used internet protocols: HTTP, FTP, and SMTP. HTTP (HyperText Transfer Protocol) is used for accessing websites and transferring web pages between a browser and a web server. It’s the foundation of data communication on the World Wide Web. FTP (File Transfer Protocol) is designed for transferring files between computers over a network, often used for uploading or downloading files to and from servers. SMTP (Simple Mail Transfer Protocol) is used for sending emails across networks, handling the transmission of messages from a client to a mail server. All these protocols rely on IP addresses to locate and communicate with devices on the internet.

//IP address
An IP address is a unique identifier assigned to each device connected to a network. It’s written in a numerical format, typically as four sets of numbers separated by dots (e.g., 192.168.1.1). This format is known as IPv4 (Internet Protocol version 4), which uses 32-bit addressing and can support around 4.3 billion unique addresses. However, with the explosive growth of internet-connected devices, IPv4 addresses are running out. That’s why IPv6 (Internet Protocol version 6) was introduced. IPv6 uses 128-bit addressing, allowing for an almost unlimited number of unique IP addresses, ensuring scalability and continued growth of the internet. It also improves routing efficiency and security features compared to IPv4.

//HTML,CSS,JS-
HTML stands for HyperText Markup Language.
It defines the structure of a web page. HTML is like labeling content:
“This is a heading,” “This is a paragraph,” “This is a section,” “This is a form,” etc.
Just like Java or C++ provide structure in programming, HTML provides structure for web pages.
CSS stands for Cascading Style Sheets.
It handles the styling and appearance of the page.
You can change background colors, add animations, adjust font sizes, and more using CSS.
JS stands for JavaScript.
It adds logic and interactivity to the page.
JavaScript is like the brain—it defines how the page behaves.

//Analogy: Human Body
- HTML is like the skeleton of a human body. It defines the parts—hands, legs, head, etc.
- CSS is like the skin and appearance—fair, brown, black, etc.
- JavaScript is like the brain—it controls behavior and responses.
So, HTML gives a description and structure of the web page, CSS makes it look good, and JS makes it think and respond.

//Tags -
In HTML, tags are the building blocks that define the structure and content of a webpage. Each tag serves a specific purpose—like <h1> and <h2> for headings, <p> for paragraphs, <section> for organizing content, <article> for standalone pieces, and <form> for user input. Tags are enclosed in angle brackets and usually come in pairs: an opening tag and a closing tag. They help browsers understand how to display and interpret the content within a webpage.

**there are 2 tyoes of tags which are open and close tyags ,but also theer are only open tags . 

HTML Elements
- 1. HTML Element
<html> is root element for HTML content.
- 2. HTML Tag
<html> is not itself visible. It is a tag.
- 3. SEO → Search Engine Optimization
It helps to increase visibility of website.
- 4. These meta tags can help us make our website more visible.
- 5. Meta tags are used to describe the content of the webpage.

## Summary
STRUCTURE OF HTML
<!DOCTYPE html>
<html>
  <head>
    1. extra content that is not visible on webpage
    2. title, metadata, description
  </head>

  <body>
    1. extra content that is visible on webpage
    2. heading, paragraph, etc.
  </body>
</html>

# What are Tags?
→ Tag is a machine entity  
   Tag gives the content a structure,  
   a meaning,  
   a formatting

→ Tags are keywords enclosed in angle brackets  
   which tells the browser how to display the content  
   Tags are not visible in the output  
   Tags are used to create HTML elements  
   Tags are used to define the structure of the webpage  
   Tags are used to create hyperlinks, paragraphs, headings, etc.

→ Tags are of two types:  
   1. Paired Tags  
   2. Unpaired Tags

→ Paired Tags:  
   Tags which have both opening and closing tags  
   Opening tag starts with `<tagname>`  
   Closing tag starts with `</tagname>`  
   Example:  
   `<html> </html>`  
   `<body> </body>`  
   `<head> </head>`  
   `<title> </title>`  
   `<p> </p>`  
   `<h1> </h1>`  
   `<table> </table>`  
   `<tr> </tr>`  
   `<td> </td>`

→ Unpaired Tags:  
   Tags which do not have closing tags  
   Example:  
   `<br>`  
   `<hr>`  
   `<img>`  
   `<input>`  
   `<meta>`  
   `<link>`
   # Self Closing Tags

→ Tags which do not have closing tags  
→ They do not enclose any content  
→ They will not decrease the performance of webpage

Examples:  
→ `<br>` : line break  
→ `<hr>` : horizontal line  
→ `<img>` : image  
→ `<input>` : input field  
→ `<meta>` : metadata  
→ `<link>` : link external resources

Can a site contain multiple <h1>? → Yes, for different sections

# <a> Anchor Tag

→ Anchor tag is used to create hyperlinks  
→ Hyperlinks are clickable text or images  
→ It is used to link one page to another page  
→ It is used to link external websites  
→ It is used to link files, folders, email, etc.  
→ The anchor tag is written as: `<a href="url">text</a>`  
→ The url is the destination of the link  
→ Example:  
   `<a href="https://www.google.com">Click Here</a>`  
   Output:  
   Click Here → www.google.com

→ Practical usage:  
   There is no need to write full url  
   Just write relative path  
   That’s because it is part of same webpage

Webpage  
↘  
www.google.com

<a href="mailto:abc@gmail.com">Submit</a>  
→ Used to send mail to the mentioned email

<a href="tel:+91-1234567890">Call</a>  
→ Used to make a call

Examples:  
`<a href="page1.html">Page 1</a>`  
`<a href="page2.html">Page 2</a>`  
`<a href="burger.html">Burger</a>`

Two Page →  
Page 1  
Burger

`<html>`  
   `<head>`  
   `<title>Page 1</title>`  
   `</head>`  
   `<body>`  
      `<a href="page2.html">Page 2</a>`  
      `<a href="burger.html">Burger</a>`  
   `</body>`  
`</html>`

→ `<table>` is used to create a table  
→ It is used to arrange content into rows and columns  
→ Table is created using multiple tags  
→ Table has both instructions and actual data  
→ Table has both instructions and actual data  
    but `<tr>` and `<td>` are not block level

× `<div>`  
× `<body>`

→ `<table>`  
→ `<tr>` : table row  
→ `<td>` : table data  
→ `<th>` : table heading

Example Format →  
<table>  
   <tr>  
      <td> x </td>  
      <td> x </td>  
   </tr>  
</table>

R1 →  
   `<tr>`  
      `<td>` 1 `</td>`  
      `<td>` 2 `</td>`  
      `<td>` 3 `</td>`  
   `</tr>`

R2 →  
   `<tr>`  
      `<td>` 4 `</td>`  
      `<td>` 5 `</td>`  
      `<td>` 6 `</td>`  
   `</tr>`

R3 →  
   `<tr>`  
      `<td>` 7 `</td>`  
      `<td>` 8 `</td>`  
      `<td>` 9 `</td>`  
   `</tr>`

Practical Usage →  
<table border="1">  
   <tr>  
      <td> 1 </td>  
      <td> 2 </td>  
      <td> 3 </td>  
   </tr>  
   <tr>  
      <td> 4 </td>  
      <td> 5 </td>  
      <td> 6 </td>  
   </tr>  
   <tr>  
      <td> 7 </td>  
      <td> 8 </td>  
      <td> 9 </td>  
   </tr>  
</table>

→ Every tag has some attributes  
→ Attributes are used to provide additional information about the element  
→ Attributes are written inside the opening tag  
→ Attributes have 2 components:  
   1. Name  
   2. Value  
→ Example:  
   `<a href="https://www.google.com">Click Here</a>`  
   → href is the attribute  
   → https://www.google.com is the value  
→ Multiple attributes will be separated by a single space

