# Swahilipot Members Management and Engagement System

## Table of contents
1. Introduction
2. Setup and installation
    {2.1. Setting up dependencies
    2.2. Contribution}
3. Registering a member
4. Viewing Member List
5. conclusion
   
> #### 1. Introduction
>
>> The platform is tailored specifically for organizations operating within or related to the Swahili-speaking regions.<br> It streamlines the process of member registration and enables effective communication and analysis of membership data.

> ### 2.Member Registration

>> Members registration is done via an online registration form which has the following features:
> + **Data Collection**
>In Data Collecction, the Form is designed to capture essential member details such as:
> 
> - Member ID.
> - Name.
> - Gender.
> - Year of Birth.
> - Phone Number.
> - Email address
> - Country
> - County
> - Sub-County

> + **Validation Rule**
> 
>>The validation rule ensures data intergrity by checking the validity of the inputs.

>  + **Responsive Design**
>
>>  A mobile-friendly form that can easily accessed on various devices.

> + **Submission Confirmation**
>
>> An automatic email is send to confirm successful registration.

> + **Security**
>
>> CAPTCHA is used to prevent bot registrations.

> ##### Instructions for Registration:
>
>> - **Accessing the Form**:<br> Visit the SWAHILIPOT membership registration page.
>
>> - **Filling in the Form:**
>
> + Complete all required fields with accurate information.
> + For Kenyan members, select the appropriate County and Sub County from the dropdown menus.
>> - **Submitting the Form:**
>
> + Verify the information entered.
> + Complete the CAPTCHA verification.
> + Click on ‘Submit’ to complete the registration process.
> 
>> - **Confirmation:**
> + Upon submission, a confirmation email will be sent to the provided email address.
> + Note down the MEMBER ID for future reference.

> 3. ### Member Communication
>
>> Member Commuication is done via:
>
> + ***Email updates***:Individual and Bulk emails are able be sent to members on updates, newsletter and events.
>   
> + ***SMS Notifications***: SmS alert are sent to mmembers on successful registration and also updates.

> ##### Instructions for Registration:
>
>> - **Email Members:**
>
> + Navigate to the ‘Communications’ tab in the admin dashboard.
> + Choose to create a new email campaign.
> + Select recipients, compose the message, and send it immediately or schedule it for later.
>
>> - **Send SMS**
>
> + In the same ‘Communications’ section, switch to the SMS panel.
> + Use the integrated API (Africa's Talking Sandbox or Twilio) to send SMS messages.
> + Select members, draft the message, and click ‘Send’ to deliver SMS notifications.

> ### 4.Dashboard for Analysis of Members.
>
***Features of the Dashboard***
>> + **Membership Overview**
<p>It provides a quick snapshot of the total number of members, new registrations, and other key metrics.</p>
>
>> + **Demographic Overvire
<p>It provides a quick snapshot of the total number of members, new registrations, and other key metrics.</p>



#### Setting up dependencies
- Frontend
Change directory to `frontend` by running the commands below:
```bash
cd frontend
npm install
```
- Backend
Use virtual environment
```bash
cd backend
pip install r"requirements.txt"
```
    



**Purpose**This project aims to streamline and enhance the management processes for Swahilipot h
The system leverages modern technologies to provide efficient solutions for the management to collect data and regester members to the system.
**Audience**
The audience are the members getting regestered to SWahilipot hub. 
## 2. set up and instolations
## 2.2 contribution
**Frontend:** NEXT.js React
**Backend:** Django
**Project Documentation**GitHub (README.md)
**Version Control:** Git and GitHub
## 3.Registering a member

