# Spendr - team31

## Instructions

## Frontend-web

- navigate to the frontend-web folder 

- run `npm install` to install packages and dependencies 

- run `npm start` to get the development server going 

- navigate to http://localhost:3000/ to checkout Spndr!

## Backend

 - To be completed in Phase 2

## Log in credentials
Standard User: username user, password: user

Admin user: username: admin, password: admin

## Key Features

**Home Page**
 - http://localhost:3000
 - Users can use the homepage to login to their account, as well as register to create a new account.

**Dashboard/Feed**
 - http://localhost:3000/dashboard
 - Users can see their own posts about their spendings, as well as posts made by people they follow. Currently, they can comment on each others posts and like/share posts as well. 
 - We have also included the UI to input data to create a new post.

**Analytics**
 - http://localhost:3000/analytics
 - The analytics dashboard allows users to visualize their spending habits and budgeting. It has an interactive pie chart of their spendings based on different categories as well as a time series of their past spendings.

**Profile**
 - http://localhost:3000/profile for your own profile or http://localhost:3000/profile/kungpaoamygao for another user's profile
 - Spndr users can view have their own user profile, with the option to add a display photo and have their name public to all users. They can edit their bio and username through the profile tab. In addition, users can view their followers/following and access their friends' profiles as well.

**Settings**
 - http://localhost:3000/settings
 - The settings page displays account information and allows the user to make their profile public/private/friends only.
 - The user also has the option to delete their account or request a forgotten password.

**Admin View**
- http://localhost:3000/admin
 - The admin view allows the admin to view user profiles, their account information as well as delete users accounts from the site.

## Notable Third Party Libraries Used
- React Router DOM
    - Used for routing within our app.
- React-Bootstrap
    - We used React Bootstrap for some prestyled components. For the most part, everything in the view was created by us with React and CSS.
- React-Lazyload
    - Used to lazyload posts in the dashboard so they are not all loaded from the first load.
- React Timeseries Charts, React Minimal Pie Chart
    - Used for the graphs displayed on the analytics page.

