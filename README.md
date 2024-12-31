<p align='center'><img src='' width="250" ></p>
<h1 align='center'> ZenFlow</h1> 
<p align='center'> <a href="https://zenflow-mu.vercel.app/">Deployed Link </a> | <a href="">Demo Link</a> </p>


## Introduction 🐱‍💻
- ZenFlow is a versatile project management application crafted to help teams and individuals efficiently handle and monitor their project progress. It offers a range of features, including workspace creation, task assignment, and real-time progress tracking, ensuring seamless collaboration and streamlined workflows. With ZenFlow, you can stay organized, meet deadlines, and achieve your project goals with enhanced performance and productivity.

- It offers a variety of functionalities to streamline project management. Users can create workspaces and organize projects that align with their workspace's theme. Within each project, tasks can be created and assigned to specific members or assignees for efficient collaboration. Additionally, workspaces and projects can be edited as needed, and custom logos can be added to enhance branding and organization.

- It provides three core functionalities for effective project tracking. The table view allows users to see all tasks related to a project, complete with essential details such as the assigned member, due date, task status, and the project it belongs to. The standout feature is the <b>Kanban board</b>, which offers a drag-and-drop interface where tasks can be moved between stages, automatically updating their status in real-time. The calendar view provides a clear visual representation of task deadlines, making it easy to plan and prioritize work. Additionally, tasks can be filtered based on parameters like status, project, assignee, and more across all three functionalities, ensuring an organized and efficient tracking system.

- It also includes dedicated pages for each task, allowing users to view and edit task details with ease. These pages provide space to update key information and write detailed descriptions about the task, ensuring clarity and alignment among team members.

- It allows users to invite members to workspaces through an invite link, enabling seamless collaboration on projects. This feature simplifies team onboarding and ensures that everyone involved can contribute and stay updated on project progress.

- It also features an analytics for each workspace and project, providing a detailed overview of task progress. It highlights key metrics such as completed tasks, incomplete tasks, overdue tasks, and pending tasks, offering valuable insights to help users monitor performance and stay on track with their goals.

- It utilizes <a href="https://appwrite.io/"> Appwrite </a> for authentication, as well as for handling and storing user data, workspaces, tasks, and other essential information. This ensures secure and efficient management of all data within the application while providing a reliable backend for user interactions.

## Tech Stack used 👨‍💻

- **HTML**
- **TailwindCSS** 
- **TypeScript** 
- **React** 
- **Next.js**
- **AppWrite**
  
## Features 🧰

- Manual **authentication** and **Google** and **GitHub OAuth** **authentication** 🔒.
- **Collaborate** with others users for projects via the **invite link** functionality 📬.
- **Individual pages** for each task, project and workspace 📄.
- **Drag and drop** functionality in Kanbabn board to change the status of tasks 🗂️.
- Add specific **description** for each tasks 📝.
- Tasks can also be seen in **Calendar** which specifies the due date 🗓️.
- **Analytics** for each workspace and projects 📶.

## Learnings 📝
  
- Learned how to integrate **AppWrite** for authentication and oAuth in the project.   
- Learned the complex logic behind **kanban board**. 

## Test the application 📲

- If you don't want to use authnetication and test the application then we have also provides test credentials to skip the authentication process and directly move towards the testing of the application. You can use the below credentials to log in to the application.

```js
email address:testuser@zenflow.com
password:testuser12345
``` 

- 🚨 When inviting members to a workspace, it is crucial to ensure that all tasks associated with a member are deleted if the member is removed. Failure to do so may leave tasks linked to the removed member, **potentially causing issues and breaking the application**.

## Installation 🛠️
  **Step 1**: Fork the repository. You can fork the repository by clicking on the fork button on the right-hand side below the profile.<br> 

  **Step 2**: Clone your forked repository. Replace **yourusername** with your GitHub Username. 
  
  ```
https://github.com/HarshitAditya27/ZenFlow.git
``` 
  **Step 3** : Go to the project folder and run npm i. It will install all the packages and dependencies used in the project. 
  
  ```
npm i
``` 
  **Step 4** : Run npm run dev. This will start the project in your local machine 🖥️.  
  
  ```
npm run dev
``` 
Hurray 🥳, you successfully deployed the project in your local machine 🎉.  

🚨But the app won't work because it will require **API keys** from various tools which are mentioned in **Setup .env file** section.

 ### Setup .env file

```js
NEXT_PUBLIC_APP_URL
NEXT_PUBLIC_APPWRITE_ENDPOINT
NEXT_PUBLIC_APPWRITE_PROJECT
NEXT_PUBLIC_APPWRITE_DATABASE_ID
NEXT_PUBLIC_APPWRITE_WORKSPACES_ID
NEXT_PUBLIC_APPWRITE_MEMBERS_ID
NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID
NEXT_APPWRITE_KEY
NEXT_PUBLIC_APPWRITE_PROJECTS_ID
NEXT_PUBLIC_APPWRITE_TASKS_ID
``` 

  ## Screenshots  

  ## Loved the project 💖? 
  
  If you found the project intresting then please do give this project a star ⭐. 
  <br> <br> <br>
   <p align="center" width="100%">
   Made with 💖 by Harshit Aditya   
</p>
