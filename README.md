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

## Views

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
 - Users can search for other user profiles based on username with an autocomplete feature.
 - This will bring you to other user profiles where you will have the option to view their posts and follow/ unfollow them.
 - Other users profiles will be rendered depending on their privacy status. Public profiles will be available to all users, Friends Only profiles will only be viewable by followers, and private profiles are only viewable by the owner.

**Settings**
 - https://spendrs.herokuapp.com/settings
 - The settings page displays account information and allows the user to make their profile public/private/friends only.
 - The user also has the option to delete their account or change their password

**Admin View**
- https://spendrs.herokuapp.com/admin
 - The admin view allows the admin to view user profiles, their account information as well as delete users accounts from the site.

 ## User Authentication
 **JWT**
 - We are currently using JWTs to provide user authentication. These JWTs are generated from the backend and returned when the user logs in or signs up. We use a custom axios client with interceptors that provide the JWT to protected routes in the header. This JWT is checked on every page to make sure it is valid. If it is invalid or expired, the user is logged out.
 **Cookies**
 - We are using cookies to store the JWTs. The cookies are initially stored on log in and removed on log out or when the JWT is invalid and expires.

 ## Usage
 The user with the username, password user is already prepopulated with data. This user can be used to demonstrate the a normal user for the application. The user is also following some other users to demonstrate the different features and views above.

 The admin user with the username and password admin is set up. When logging in, you have a view of all of the users as well as specific data about each user. The admin can also choose to view profile or delete the user.

 You can also create a new account to see what a new account looks with no data. Click create a new account on the login screen to do so.

 ## API
 API documentation can be found in API.md in the same level as this README.md


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
- lodash: Used for miscellaneous utility functions.
- moment: Used for formatting. 
- pondjs: Used as a dependency for react-timeseries-chart
- react-alert: For making custom react alert pop ups
- react-icons: For icons in our UI
- react-infinite-scroller: To load new posts in the dashboard feed
- react-lazyload: For lazy loading dashboard posts and profiles
- react-minimal-pie-chart: For rendering our analytics data
- react-password-strength-bar: For registration and creating new passwords
- react-redux: For global state management
- react-scripts
- react-timeseries-charts: For rendering our analytics data
- react-tiny-link: For displaying links in the post with a preview.
- react-tooltip
- react-transition-group
- react-useanimations
- redux: For global state management.
- redux-devtools-extension: For debugging redux in the browser.
- redux-thunk: For middleware functions that use axios.
- web-vitals: Used as a dependency for react-timeseries-chart.
- testing-library/jest-dom
- testing-library/react
- testing-library/user-event
- body-parser
- chai
- cloudinary
- connect-multiparty
- cors
- dotenv
- jsonwebtoken
- mocha
- mockgoose
- multer
- node-gyp
- node-pre-gyp
- nodemailer
- nodemon
- supertest
