# Spendr - team31

## Server route home

https://spendrs.herokuapp.com/

## User credentials

### Admin user

username: admin
password: admin

### Regular user

user 1)
username: user
password: user

# Use cases

## Regular user

## Admin user

1. as an admin user logging will provide us with the list of registered users and basic information
2. as the admin user you will be able to view all peoples profiles regardless of privacy setting
3. the admin also has permission to delete any user they want

# Key Features

**Home Page**
 - https://spendrs.herokuapp.com/
 - Users can use the homepage to login to their account, as well as register to create a new account.

**Dashboard/Feed**
 - https://spendrs.herokuapp.com/dashboard
 - Users can see their own posts about their spendings, as well as posts made by people they follow. Currently, they can comment on each others posts and like/share posts as well. 
 - We have also included the UI to input data to create a new post. This currently works if you try to create a post.
 - We also have a comment system where you can see the comments made by other users as well as make comments yourself. 

**Analytics**
 - https://spendrs.herokuapp.com/analytics
 - The analytics dashboard allows users to visualize their spending habits and budgeting. It has an interactive pie chart of their spendings based on different categories as well as a time series of their past spendings.

**Profile**
 - https://spendrs.herokuapp.com/profile for your own profile or https://spendrs.herokuapp.com/user for another user's profile
 - Spndr users can view have their own user profile with all of the user's posts, with the option to add a display photo. They can edit their bio and username through the profile tab. In addition, users can view their followers/following and access their friends' profiles as well.
- By clicking on the followers/following, there are direct links to other member's profiles. 

**Settings**
 - https://spendrs.herokuapp.com/settings
 - The settings page displays account information and allows the user to make their profile public/private/friends only.
 - The user also has the option to delete their account or request a forgotten password.

**Admin View**
- https://spendrs.herokuapp.com/admin
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
- React-Hook-Form
    - Used for login credential validation
