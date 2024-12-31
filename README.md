<p align='center'><img src='https://github.com/user-attachments/assets/28a31a6f-9afb-4691-aba4-47e814ca6ad4' width="250" ></p>
<h1 align='center'> ZenFlow</h1> 
<p align='center'> <a href="https://zenflow-mu.vercel.app/">Deployed Link </a> | <a href="https://youtu.be/AHKwPu39rGA">Demo Link</a> </p>

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
![Screenshot (1041)](https://github.com/user-attachments/assets/490da31a-5d07-45c4-9aaa-c226f837d80a)
![Screenshot (1042)](https://github.com/user-attachments/assets/7cfacaeb-5d9a-4230-b19b-093c82ac88e4)
![Screenshot (1043)](https://github.com/user-attachments/assets/d65221c8-f9d9-4aa4-ba39-532b70229843)
![Screenshot (1044)](https://github.com/user-attachments/assets/56384474-614f-4805-9c69-ea43bce00bd3)
![Screenshot (1045)](https://github.com/user-attachments/assets/4ad2b03f-1fc3-44cf-8407-5f92a5d33664)
![Screenshot (1046)](https://github.com/user-attachments/assets/87cdf3f3-af29-4b71-83be-ea9f1acd09cb)
![Screenshot (1047)](https://github.com/user-attachments/assets/e098263b-8c82-4ae4-97f8-2338d0a44f26)
![Screenshot (1048)](https://github.com/user-attachments/assets/042be527-57e4-447a-b2b0-0caf461ed38c)
![Screenshot (1049)](https://github.com/user-attachments/assets/01fdcd21-4442-47cc-ad8c-316afa4a92b6)
![Screenshot (1050)](https://github.com/user-attachments/assets/4191639a-eeab-4a4a-8fd1-da06cb4df7eb)
![Screenshot (1051)](https://github.com/user-attachments/assets/e2edbfdb-cbe0-45a4-aed3-8be1790803b2)
![Screenshot (1052)](https://github.com/user-attachments/assets/5b081798-e5c6-41bf-af72-b82760a250b5)
![Screenshot (1053)](https://github.com/user-attachments/assets/2d74d0c7-5923-4eb0-b038-28fbc12b0aab)
![Screenshot (1054)](https://github.com/user-attachments/assets/a8e8f250-2a71-4c32-941c-abfbe0dc90ba)
![Screenshot (1055)](https://github.com/user-attachments/assets/c08d6b06-7ee9-49f3-900f-8789250ec76d)
![Screenshot (1056)](https://github.com/user-attachments/assets/44aa9a41-ec31-4682-9df6-9cc3ed70afe2)
![Screenshot (1057)](https://github.com/user-attachments/assets/9e208138-77d2-4f56-a3b2-9441703455a8)
![Screenshot (1058)](https://github.com/user-attachments/assets/8d5adb59-e61e-4b8a-af87-9aababe7ee48)
![Screenshot (1059)](https://github.com/user-attachments/assets/7961669a-2098-494c-aa96-1708aca58a74)
![Screenshot (1060)](https://github.com/user-attachments/assets/c5b725b9-1922-4f2a-8c1e-848bdfddbe07)
![Screenshot (1061)](https://github.com/user-attachments/assets/8ae2ad9b-65c9-4e61-b456-05e520d1ec29)
![Screenshot (1063)](https://github.com/user-attachments/assets/9b5f3bc5-0ba8-4aa5-8507-b550425a4f5a)
![Screenshot (1064)](https://github.com/user-attachments/assets/4701b755-13bc-4a24-9925-f71b138f4a64)
![Screenshot (1065)](https://github.com/user-attachments/assets/398f7a40-5474-4c13-808b-ba3bf6ceb58e)
![Screenshot (1066)](https://github.com/user-attachments/assets/61f72f53-805b-48c5-8e8f-893e439b6989)
![Screenshot (1068)](https://github.com/user-attachments/assets/eaa5356c-4ca0-47ef-88f5-14a8d6684b1e)
![Screenshot (1069)](https://github.com/user-attachments/assets/bec0db52-2e23-4d1c-8c79-bfc19407ca32)
![Screenshot (1070)](https://github.com/user-attachments/assets/8d3d8004-9b1a-47f1-a286-66e870483529)
![Screenshot (1071)](https://github.com/user-attachments/assets/fe9e02b6-40ec-44a4-ab62-3c7b574552b8)

  ## Loved the project 💖? 
  
  If you found the project intresting then please do give this project a star ⭐. 
  <br> <br> <br>
   <p align="center" width="100%">
   Made with 💖 by Harshit Aditya   
</p>
