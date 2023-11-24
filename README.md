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

```text
Add screenshot of the register-admin and login page
```

### 2. Dashboard

```text
Add screenshot of the dashboard page
```

### 3. Analytics

```text
Add screenshot of the analytics page
```

### 4. Register as a member

```text
Add screenshot of the register-member page
```

### 5. Export data

The system features an `Export Data` feature which, the administrator of the system can use to download a .csv format file containing the details of the members.

The .csv file comes with the latest data recorded in the system before downloading.

```text
Add screenshot of the Export Data button
```

### 6. Communications

```text
Add screenshot of the communications page
```

## Conclusion
