# Fantasy Todo App

A production-ready Todo application built with **React** and **Vite**.  
This project demonstrates strong understanding of state management, immutable updates, component architecture, and deployment workflows.

---

## Live Demo

**Deployed on Netlify:**  
https://a-random-todo-app.netlify.app

---

## Features

- Add new tasks  
- Mark tasks as completed  
- Delete tasks  
- Filter by **All**, **Open**, and **Completed**  
- Persistent storage using `localStorage`  
- Responsive layout  

---

## Tech Stack

- React (Hooks)
- Vite
- JavaScript (ES6+)
- CSS (Fanta.css + custom styling)
- Netlify (Deployment)

---

## Architecture

The application follows a top-down state model:

- `App` — owns global state (`todos`, `selectedTab`)
- `Tabs` — controls filtering state
- `TodoList` — renders filtered tasks
- `TodoCard` — handles complete/delete logic
- `TodoInput` — controlled input component

State updates are immutable and ID-based to avoid index bugs.

---

## Running Locally

```bash
git clone https://github.com/your-username/your-repo-name.git
cd todo-app
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Deployment Configuration (Netlify)

- Base directory: `todo-app`
- Build command: `npm run build`
- Publish directory: `dist`

---

## Credits

Built while following and expanding upon:

**ReactJS Full Course | Build & Deploy 3 Modern Web Apps and Get Hired!**  
by Smoljames  
https://www.youtube.com/watch?v=iKpkVKubvKk&t=165s  

Extended with ID-based updates
