# Penguin API
This is the official API for **Penguin** application (offical repo: https://github.com/KennyCT/Penguin)

Made separately to avoid dependency conflicts with React Native, provides functionality to app in order to retrieve and push data to Penguin database

# Instructions
In order to use, pull code into separate directory and use **npm install** to install all necessary dependencies for project.

Use **npm start** in order to run API locally and create a URL for local use. To create a public URL, use **npx localtunnel --port XXXX** to create publically accessible URL for use in code.

In order to perform API calls, users must use following format: <url>/penguin/<function_route&parameters>

Note: API is only functional on local machines that contain the password for the database, all other users will not be able to run the API otherwise.
