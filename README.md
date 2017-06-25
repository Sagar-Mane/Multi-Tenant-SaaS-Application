# Multi-Tenant-SaaS-Application
It is a Software as a Service application which provides UML parser as a backend and a web portal through which java source can be submitted to the UML parser hosted in cloud and can be graded.

## Table of contents
- [Objective](#objective)
- [Getting Started](#getting-started)
- [ Architecure Diagram](#architecure-diagram)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Demo Video](#demo-video)
- [Future Enhancements](#future-enhancements)

## Objective 
Objective was to develop a Multi-Tenant, Cloud Scalable, Multi-AZ SaaS App using Amazon Web Services.

## Getting Started
1. Download all the tenant servers and web application express server.
2. Run app.py from tenant 1 server and all remaining servers.
3. Run app.js from web application express server.
4. Goto localhost:3000 in your browser.

## Architecure Diagram
<p align="center"><img src="https://github.com/Sagar-Mane/Multi-Tenant-SaaS-Application/blob/master/docs/Architecture%20Diagram.png" /></p>

## Technology Stack
- AWS (Deployment of servers, load balancing using ELB and EC2 Auto Scaling)
- Python Flask (Writing web services)
- Angular (Front End)
- HTML5 (Markup)
- CSS3 (UI/UX)

## Features
- Grader can submit java source code as a zip file
- Web server will unzip the java source code
- UML parser will generate class diagram from the submitted java source code
- Grader will be able to see the class diagram in web application
- Grader can then grade the class diagram with tenant specific grading fields
- Servers are configured to auto scale and load balance in using Application Gateway in AWS.

## Demo Video 
<p align="center"><a href="https://www.youtube.com/watch?v=V3lPU9NaLVk"><img src="https://github.com/Sagar-Mane/Multi-Tenant-SaaS-Application/blob/master/docs/thumbnail.png" 
alt="Demo and Directions Video" width="500" height="300" border="10" /></a></p>

## Future Enhancements
- Application can have student login page so that each student will be able to submit their assignments.
- There can be a dashboard for grader where he will see all the pinned submissions.
- Application should accomodate other types of submission apart from java source code.
