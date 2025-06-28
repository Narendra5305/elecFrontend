#  NPM Favs App

A simple React app to search and save your favorite NPM packages, using local storage and React Router for navigation.

---

##  Features

-  Search NPM packages using the NPMS API
-  Add a reason for why it's your favorite
- Save favorites to local storage
- View, Edit, or Delete favorites
-  Routing between pages using `react-router-dom`
- Styled with vanilla CSS

---

##  Pages

1. **Packages Page (`/packages`)**  
   - Search NPM packages  
   - Select one from 3 suggestions  
   - Add a reason why it's your favorite  
   - Save to local storage

2. **Favorites Page (`/favs`)**  
   - View saved favorites in a table  
   - Conditional rendering: shows message if no favorites  
   - Edit or delete favorites with a confirmation modal

---

## Tech Stack

- React + Vite
- React Router DOM
- NPMS API (`https://api.npms.io/v2/search`)
- Local Storage
- Vanilla CSS

---

## Setup Instructions

```bash
# 1. Clone the repo
git clone
cd npm-favs-app

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
