# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

**Application folder structure**- public/folder: Where we will keep assets like images, icons, videos etc

src/folder: Where we will do the majority of our work. All of our React components will placed here.

node_modules : This directory contains dependencies and sub-dependencies of packages used by the current react app, as specified by package.json

package-lock.json:This file contains the exact dependency tree installed in node_modules. This provides a way to ensure every team member have the same version of dependencies and sub-dependencies.

The index.js in the path src/folder/ is a starting point to the application. App.js, App.css are imported in this file.

**Functionality of each component**-

UserList - This component is responsible for fetching and displaying a list of users. The fetched user data is passed as a prop to the UserCard component. Additionally, the AddUser button is included, which enables the creation of a new user..

UserCard - This component displays individual user cards, each with options to edit or delete. The edit and delete buttons navigate to their respective components for updating or removing user details.

AddUser - The AddUser component contains a form to collect user input and make an API call to add the new user to the system.

DeleteUser - This component handles the deletion of a user based on their unique ID.

EditUser - The EditUser component is used to update a user's details. It receives the user's ID to fetch and modify the specific information via an API.

NotFound - If the user navigates to a non-existent endpoint or invalid URL, the NotFound component is displayed, indicating the error.

**Application Workflow**:

**To view all users**:, navigate to **http://localhost:3000/users**. This page displays a list of all existing users. If you'd like to add a new user, click on the **Add User** button. This will open a form where you can input details such as **ID**, **First Name**, **Last Name**, **Email**, and **Department**. After completing the form, click **Submit** to create the user. Upon successful submission, a confirmation message—**"User created successfully"**—will be displayed.

For user deletion: Each user card includes two buttons, one of which is the Delete button. Clicking the Delete button navigates you to the DeleteUser component. Here, the user will be deleted through an API call. Upon successful deletion, a confirmation message—"User deleted successfully"—will be displayed. By clicking the Back button, you will be redirected to the list of all users.

For user edit: Each user card includes edit button, Clicking the edit button navigates you to the EditUser component.
here, the user will be edited though an api call. Upon successful, modification, a confirmation message - "User Updated Successfully" will be displayed.

Note: In this application, while the URLs may not function properly, the functionality of each component is working correctly.
