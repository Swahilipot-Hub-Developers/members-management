# Swahilipot Members Management and Engagement System

## Table of contents

1. [Introduction](#introduction)
    - [Objective](#objective)
    - [Audience](#audience)
2. [Contribution](#contribution)
    - [Setup the project](#setup-the-project)
    - [Installing dependencies](#installing-dependencies)
3. [Features](#features)
    - [Log-in and Sign-up](#1-log-in-and-sign-up)
    - [Dashboard](#2-dashboard)
    - [Analytics](#3-analytics)
    - [Register as a Member](#4-register-as-a-member)
    - [Export data](#5-export-data)
    - [Communications](#6-communications)
4. [Conclusion](#conclusion)

## Introduction

The Swahilipot Membership Management & Engagement platform stands as a robust solution, fostering effective communication, streamlined registration, and insightful data analysis.

### Objective

The primary goal of the Swahilipot Membership Management & Engagement project is to provide Swahilipot with a powerful tool to manage their memberships effectively, fostering an active and vibrant community.

### Audience

Swahilipot Hub Members, both existing and new.

## Contribution

To setup the project for contribution, you need the following packages/languages:

- Node v20.x.x (with the latest npm version)
- Python v3.10.x

### Project Tree

```bash
📦 members-management
├─ .github
├─ backend
│  ├─ backend
│  ├─ membersmgmt
│  ├─ .gitignore
│  ├─ manage.py
│  └─ requirements.py
├─ frontend
│  ├─ public
│  ├─ src
│  ├─ .eslintrc.json
│  ├─ .gitignore
│  ├─ next.config.js
│  ├─ package-lock.json
│  └─ package.json
└─ README.md
```

### Setup the project

_**Fork and Clone the project**_

To contribute to the project, you need to fork the repo to make a copy of your own before making any changes. After forking the repo, clone the repo using HTTPS (default):

```bash
git clone https://github.com/Swahilipot-Hub-Developers/members-management.git
```

_**You can use the alternatives (SSH or GH CLI) depending on your preferences**_

After that, you navigate to the project directory and create your own branch where you will be working from and making your own changes:

```bash
cd members-management
git checkout -b "your-branch-name"
```

You can now install the dependencies and begin making changes and contributing!

### Installing dependencies

_**Frontend Dependencies**_

The project uses `NextJS v13.5.6` as the front-end framework together with `Bootstrap 5` and `SCSS (SASS)`. To check and/or install the latest version of node, run the following commands:

```bash
node -v
npm install -g node@latest
```

To install the require dependencies, run the following commands: in your terminal:

```bash
cd frontend
npm install
```

_**Backend Dependencies**_

The project uses `Python` for the backend operations. Check and install the latest pip by running the following commands (respectively):

```bash
pip --version
python.exe -m pip install --update pip
```

After installing the latest pip, you can now run the following commands to install required dependencies for the project:

```bash
cd backend
pip install -r "requirements.txt"
```

With the required dependencies installed, you can now contribute to the project with less flaws concerning dependencies missing. _Happy coding!_

## Features

### 1. Log-in and Sign-up

Most of the features of the system are accessed by an Administrator. For this to be a secure and flawless procedure, an admin has to create an account for them to be able to access the various pages and features of the system.

An administrator, preferrably someone working at SPH, can sign up for an account in the system. Their details are saved in a database and they can use this to log-in to the system.

### 2. Dashboard

Right after logging in, the first page that loads is the Dashboard. The Dashboard contains various preview features that provide the Admin with an idea of what the system contains/is about.

The Dashboard contains: data summary (total members registered in the system, total members in an individual county, sub-county and country) and a section containing recently registered members.

### 3. Analytics

The Analytics page consists of Analytics components created to display different data. In general, the components provide a summary of the following:

- Total number of members who have been registered, in the database.
- Summary (numbers) of members in individual counties, sub-counties or countries.
- Summary (numbers) of members according to Gender

The summaries and analytics will be displayed in different formats: Charts, numbers and other analytical diagrams/figures.

### 4. Register as a member

People who want to be members of the Swahilipot Hub Foundation will be able to register through a form within the system. The form is unrestricted and can be accessed by anyone who wants to register. The form takes in the following fields:

- Name
- Gender
- Year of birth
- Email address
- Phone number
- Country
- County
- Sub-county

These details are essential to ensure that all communication from the foundation can be made easily to the members, either through emails or SMS, and also for ease of registration for any event happening around the foundation that requires registration of this sort.

Once a member registers, they will receive a confirmation email informing them that they have successfully registered their details in the system.

### 5. Export data

The system features an `Export Data` feature which, the administrator of the system can use to download a .csv format file containing the details of the members.

The .csv file comes with the latest data recorded in the system before downloading.

### 6. Communications

Swahilipot Hub hosts various events and also, sponsors others. The community is a great part of the foundation and therefore, if any event is to take place at the hub, the members are alerted through the communications page.

The Communications page features two ways for communicating with the members in the system: E-mail and SMS. An admin can select from the two, write a message and send it as bulk to the members. Any message to be sent to the members is sent through either of the two.

## Conclusion

The SWAHILIPOT MEMBERSHIP MANAGEMENT & ENGAGEMENT platform serves as a powerful tool for organizations to manage their memberships effectively. With a user-friendly registration process, efficient communication channels, and a robust analytical dashboard, the platform enables organizations to engage with their members proactively and maintain an active, vibrant community.

## Creators

This project was created by the amazing team consisting of:

- [Chris Mwalimo🖖🏻👽](https://github.com/codeschris)
- [Joy Ngugi](https://github.com/Joyngugs)
- [Daniel Kimanzi](https://github.com/Legacylight)
- [Abdallah Khalfan](https://github.com/abdallahkhalfan)
