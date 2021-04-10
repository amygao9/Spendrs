# Spendr - team31

## Deployed Application

https://spendrs.herokuapp.com/

## Instructions

## Frontend-web

- navigate to the frontend-web folder 
- run `npm install` to install packages and dependencies 
- run `npm start` to get the development server going 

## Backend

 - navigate to the backend folder
 - run `npm install` to install packages and dependencies 
 - run `npm start` to get the server going 

## API Routes
 - Please view our API.md for an overview of the routes in our server and instructions about usage with Postman.

## User credentials

### Admin user

username: admin
password: admin

### Regular user

user 1)
username: user
password: user

# Use cases

## Admin user

1. as an admin user logging will provide us with the list of registered users and basic information
2. as the admin user you will be able to view all peoples profiles regardless of privacy setting
3. the admin also has permission to delete any user they want

## Regular user
1. regular users can create accounts and login/log out to enjoy all the key features.

# Key Features

**Home Page**
 - https://spendrs.herokuapp.com/
 - Users can use the homepage to login to their account, as well as register to create a new account.

**Dashboard/Feed**
 - https://spendrs.herokuapp.com/dashboard
 - Users can see their own posts about their spendings, as well as posts made by people they follow. Additionally, they can comment on and like each others posts, as well as view other peoples comments/likes. 

**Create/Delete Posts**
 - Users can create a post about their purchases, with names, links prices, captions, categories as well as optional photos. 
 - In either feed or profile, users can delete their past posts. 

**Analytics**
 - https://spendrs.herokuapp.com/analytics
 - The analytics dashboard allows users to visualize their spending habits and budgeting. It has a summary section of monthly spendings and purchases.
 - It also has an interactive pie chart of their spendings based on different categories as well as a time series of their past spendings.


**Profile**
 - https://spendrs.herokuapp.com/profile for your own profile or https://spendrs.herokuapp.com/user for another user's profile
 - Spndr users can view have their own user profile with all of the user's posts, with the option to add a display photo. They can edit their bio and username through the profile tab. In addition, users can view their followers/following and access their friends' profiles as well.
 - Users can also edit their own username as well as their user bio.
- By clicking on the followers/following, there are direct links to other member's profiles. 

**Search Users**
 - Users can search for other user profiles based on username 
 - This will bring you to other user profiles where you will have the option to view their posts and follow/ unfollow them.
 - Other users profiles will be rendered depending on their privacy status. Public profiles will be available to all users, Friends Only profiles will only be viewable by followers, and private profiles are only viewable by the owner.

**Settings**
 - https://spendrs.herokuapp.com/settings
 - The settings page displays account information and allows the user to make their profile public/private/friends only.
 - The user also has the option to delete their account or change their password

**Admin View**
- https://spendrs.herokuapp.com/admin
 - The admin view allows the admin to view user profiles, their account information as well as delete users accounts from the site.


## Notable Third Party Libraries Used in Phase 1
- React Router DOM
    - Used for routing within our app.
- React-Bootstrap
    - We used React Bootstrap for some prestyled components. For the most part, everything in the view was created by us with React and CSS.
- React-Lazyload
    - Used to lazyload posts in the dashboard so they are not all loaded from the first load.
- React Timeseries Charts, React Minimal Pie Chart
    - Used for the graphs displayed on the analytics page.
- React-Hook-Form
    - Used for login credential validation

## Notable Third Party Libraries Used in Phase 2
- axios: For making promise based api requests 
- browser-image-compression: For compressing uploaded images
- js-cookie: For handling browser cookies
- lodash:
- moment:
- pondjs:
- react-alert: For making custom react alert pop ups
- react-icons: For icons in our UI
- react-infinite-scroller:
- react-lazyload: For lazy loading dashboard posts and profiles
- react-minimal-pie-chart: For rendering our analytics data
- react-password-strength-bar: For registration and creating new passwords
- react-redux
- react-scripts
- react-timeseries-charts: For rendering our analytics data
- react-tiny-link
- react-tooltip
- react-transition-group
- react-useanimations
- redux
- redux-devtools-extension
- redux-thunk
- web-vitals
