# Data Structures

## User

### model

Represents a Spendr user.

| FIELD       | TYPE                 | DESCRIPTION                            |
| ----------- | -------------------- | -------------------------------------- |
| \_id        | mongoDB.ObjectId     | the objectid of this user              |
| name        | String               | name of this user                      |
| email       | String               | email of this user                     |
| username    | String               | the user name of this user             |
| password    | String               | a salted and peppered user password    |
| posts       | Array of Post Object | the posts this user made               |
| image       | Image                | the image of this user                 |
| description | String               | a user profile description             |
| followers   | Array of User Object | people that follows this user          |
| following   | Array of User Object | people this user follows               |
| admin       | Boolean              | the user is an admin                   |
| createdAt   | ISODate              | ISO date for when this user is created |
| updatedAt   | ISODate              | ISO date when this user was modified   |

### example

```
/**
* Paste one or more documents here
*/
{
    "posts": [{
        "$oid": "606a98c382b1e2419f1091ae"
    }, {
        "$oid": "606a98ec82b1e2419f1091b0"
    }, {
        "$oid": "606a991b82b1e2419f1091b1"
    }, {
        "$oid": "606aa5b5451bd94396fcdbfa"
    }],
    "followers": [{
        "$oid": "606a0d7c610aac22c0f634f1"
    }, {
        "$oid": "606c951a49f17c7eb4b440ac"
    }, {
        "$oid": "606a2056e4645513d4c5d578"
    }],
    "following": [],
    "name": "Amy",
    "username": "ag123",
    "password": "$2b$10$p0mF.72EZmD4ULZ7PiWHgeNIjcAwljGZXp15jwu3yskLGAZkGC.ma",
    "email": "ag@uoft.com",
    "createdAt": {
        "$date": "2021-04-04T19:44:49.728Z"
    },
    "updatedAt": {
        "$date": "2021-04-09T19:30:49.526Z"
    },
    "__v": 30,
    "privacy": "Public",
    "admin": false
}
```

<br/>
<br/>
<br/>

## Image

### model

Represents how we save images from thumbnails to post images.

| FIELD | TYPE          | DESCRIPTION                        |
| ----- | ------------- | ---------------------------------- |
| id    | cloudinary ID | the id for the image on cloudinary |
| url   | String        | the url for the image              |

### example

```
{
  "id": "zkelas7a7qyk5orwldpu",
  "url": "http://res.cloudinary.com/dikl8liky/image/upload/v1617569384/zkelas7a7qyk5orwldpu.jpg"
}
```

<br/>
<br/>
<br/>

## Post

### model

Represents how we save posts on news feed.

| FIELD         | TYPE             | DESCRIPTION                            |
| ------------- | ---------------- | -------------------------------------- |
| \_id          | mongoDB.ObjectId | the objectid of this Post              |
| user          | User             | name of the user that wrote this post  |
| itemName      | String           | name of the item                       |
| itemLink      | String           | link to the item                       |
| itemCategory  | String           | what type of item is this              |
| attachedImage | Image            | image of this product                  |
| description   | String           | a of this item                         |
| price         | Number           | price of the item                      |
| likes         | Array of User    | people who liked this post             |
| comments      | Array of Comment | the comments made on this post         |
| createdAt     | ISODate          | ISO date for when this Post is created |
| updatedAt     | ISODate          | ISO date when this Post was modified   |

### example

```
{
    "itemCategory": "misc",
    "itemName": "aaaaaaaaaaa",
    "user": {
        "$oid": "606a0d7c610aac22c0f634f1"
    },
    "attachedImage": {
        "id": "zkelas7a7qyk5orwldpu",
        "url": "http://res.cloudinary.com/dikl8liky/image/upload/v1617569384/zkelas7a7qyk5orwldpu.jpg"
    },
    "createdAt": {
        "$date": "2021-04-04T20:49:44.139Z"
    },
    "updatedAt": {
        "$date": "2021-04-06T22:29:46.436Z"
    },
    "__v": 24,
    "comments": [{
        "_id": {
            "$oid": "606bfe19b761fe0ebcde9561"
        },
        "author": {
            "$oid": "60661b61f49d8226248d563c"
        },
        "comment": "cool"
    }, {
        "_id": {
            "$oid": "606c10fb6848b85ce8e2bb51"
        },
        "author": {
            "$oid": "60661b61f49d8226248d563c"
        },
        "comment": "neat"
    }],
    "likes": ["jacky123"]
}
```

<br/>
<br/>
<br/>

## Comment

### model

Represents a comment in on the post.

| FIELD   | TYPE             | DESCRIPTION                        |
| ------- | ---------------- | ---------------------------------- |
| \_id    | mongoDB.ObjectId | the mongo objectid of this comment |
| author  | User             | the objectid of this user          |
| comment | String           | The comment this user made         |

### example

```
{
  "_id": {
    "$oid": "606bfe19b761fe0ebcde9561"
  },
  "author": {
    "$oid": "60661b61f49d8226248d563c"
  },
  "comment": "cool"
}
```

# Unprotected API Routes

## Home

The routes used when a user isn't logged in.

### Login
<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> post </span> /api/login.
Requires a body with username and password fields.
Returns a JWT on success which should be used for protected routes.

### example body
```
{
  username: "user",
  password: "password123"
}
```

### example response
```
{
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmM5NTFhNDlmMTdjN2ViNGI0NDBhYyIsImlhdCI6MTYxODAwOTI3NSwiZXhwIjoxNjE4MDk1Njc1fQ.tRwoIg7zt070d50rMc-h7zjfzGoFBixzKWV0hM_WP1A"
}
```

### Signup

<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> post </span> /api/signup.
Requires a body with name, email, username, password, and passwordStrength fields.
Returns a JWT on success which should be used for protected routes.
Errors with appropriate error messages as a json with the err key.
Note: password strength needs to be >= 2 for a user to be created.

### example body
```
{
  "name": "newuser",
  "email": "newuser123@gmail.com",
  "username": "newuser1",
  "password": "iamanewuser1234",
  "passwordStrength": 4
}
```

### example response
```
{
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmM5NTFhNDlmMTdjN2ViNGI0NDBhYyIsImlhdCI6MTYxODAwOTI3NSwiZXhwIjoxNjE4MDk1Njc1fQ.tRwoIg7zt070d50rMc-h7zjfzGoFBixzKWV0hM_WP1A"
}
```
<br/>
<br/>
<br/>

# Protected API Routes

The following apis require you to set the header as following

| FIELD         | TYPE   | DESCRIPTION                        |
| ------------- | ------ | ---------------------------------- |
| authorization | String | The token recieved when logging in |

example: (note: this is not an actual token)

| FIELD         | value                                       |
| ------------- | ------------------------------------------- |
| authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 |

With the token stored in the header, the `authenticateToken` middleware will extract the user's ID from the token and pass it into the protected routes as req.user.

<br/>
<br/>
<br/>

## Admin

The admin routes used to do admin activity. These routes are only accessible by admin accounts.

### Get all users
<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> get </span> /api/admin/allUsers.
gets all user accounts and their individual posts.

### example response

```
[
    {
        "posts": [],
        "followers": [
            "6064f9d74681fd1760a6d7b0"
        ],
        "following": [],
        "privacy": "Private",
        "admin": false,
        "_id": "6063708b7e81c57b408aa90f",
        "name": "jacky",
        "username": "notjacky",
        "password": "$2b$10$x6VGSHtXfcyRw0Lu7y84IuN/9.vmc0l4aotjdPN/cZtehoJBv/8I6",
        "email": "jacky",
        "__v": 5,
        "createdAt": "2021-04-05T00:40:09.902Z",
        "updatedAt": "2021-04-05T00:40:09.902Z"
    },
    {
        "posts": [
            {
                "itemCategory": "misc",
                "price": 20,
                "likes": [],
                "_id": "606a5da1181d705c38398e33",
                "itemName": "rice",
                "user": "6064d632ae584c5aa08462ac",
                "createdAt": "2021-04-05T00:45:21.267Z",
                "updatedAt": "2021-04-05T00:45:21.267Z",
                "__v": 0,
                "comments": []
            },
            {
                "itemCategory": "misc",
                "price": 17,
                "likes": [],
                "_id": "606a5daa181d705c38398e35",
                "itemName": "water bottle",
                "user": "6064d632ae584c5aa08462ac",
                "createdAt": "2021-04-05T00:45:30.390Z",
                "updatedAt": "2021-04-05T00:45:30.390Z",
                "__v": 0,
                "comments": []
            }
        ],
        "followers": [
            "6064f9d74681fd1760a6d7b0"
        ],
        "following": [
            "6064f9d74681fd1760a6d7b0"
        ],
        "privacy": "Private",
        "admin": false,
        "_id": "6064d632ae584c5aa08462ac",
        "name": "Alexander Shih",
        "username": "asdf",
        "password": "$2b$10$AcHYbjofPKy8ydUM2oHwoeCUsl4qnnVz2Y/qOvWTiYaxKUYRR3ogi",
        "email": "alex.alex.shih@gmail.com",
        "__v": 4,
        "createdAt": "2021-04-05T00:44:51.681Z",
        "updatedAt": "2021-04-05T00:46:42.010Z"
    }
]
```
### Delete user
<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> delete </span> /api/admin/deleteUser/:username.
deletes a user account by username and returns the deleted user.

### example response
``` /api/admin/deleteUser/example ```

```
{
    "posts": [],
    "followers": [],
    "following": [
        "6070c93dcd0536a37266be6d"
    ],
    "privacy": "Private",
    "admin": false,
    "_id": "6070c93dcd0536a37266be6d",
    "name": "example",
    "username": "example",
    "password": "$2b$10$tX0/llOdUl36r1UOCBmkt.0xEujBmYXyVerJnjQy3H4VjVNMPeHoa",
    "email": "example@uoft.com",
    "createdAt": "2021-04-09T21:38:05.948Z",
    "updatedAt": "2021-04-09T21:38:06.097Z",
    "__v": 1
}
```
<br/>
<br/>
<br/>

## Feed

The routes required to do most of our news feed operations.

### Get Newsfeed

<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> post </span> /api/feed/newsfeed.
gets the news feed of the logged in user. starting from date and returns num
posts. If there isnt enough we will return as many as possible. it will also
return the date of the last post.

```
{
    "date": iso_date [optional] <default server time>
    "num": number [optional] <default 50>
}
```

## example

```
{
    "date": "2021-04-04T21:55:56.971Z",
    "num": 2
}
```

## possible example response

```
{
  "date": "2021-04-04T20:51:51.299Z",
  "posts": [
    {
      "attachedImage": {
        "id": "hr0so9gxiy0ij15vnj5s",
        "url": "http://res.cloudinary.com/dikl8liky/image/upload/v1617569511/hr0so9gxiy0ij15vnj5s.jpg"
      },
      "itemCategory": "misc",
      "price": 0,
      "likes": [
        "jacky123"
      ],
      "_id": "606a26e75c3b04060419ff85",
      "itemName": "aaaaaaaaaaa",
      "user": {
        "_id": "606a0d7c610aac22c0f634f1",
        "name": "ray penguin"
      },
      "createdAt": "2021-04-04T20:51:51.299Z",
      "updatedAt": "2021-04-09T19:41:43.884Z",
      "__v": 200,
      "comments": [
        {
          "_id": "606cdf9f14f3a733f856362d",
          "author": {
            "image": {
              "id": "m6smfhzlnshpkmlt3g3s",
              "url": "http://res.cloudinary.com/dikl8liky/image/upload/v1617994686/m6smfhzlnshpkmlt3g3s.jpg"
            },
            "_id": "60661b61f49d8226248d563c",
            "name": "jacky"
          },
          "comment": "sad"
        },
        {
          "_id": "606e414b2357f68d4c8dd3ff",
          "author": {
            "image": {
              "id": "m6smfhzlnshpkmlt3g3s",
              "url": "http://res.cloudinary.com/dikl8liky/image/upload/v1617994686/m6smfhzlnshpkmlt3g3s.jpg"
            },
            "_id": "60661b61f49d8226248d563c",
            "name": "jacky"
          },
          "comment": "asdf"
        }
      ]
    }
  ]
}
```

<br/>
<br/>
<br/>

## Posts

### Get User's Posts
<span style="
font-size: 20px;
color: #faa61a;
font-family: Menlo,Consolas,Monaco,monospace;
text-transform: uppercase;
margin-right: 10px;"> get </span> /api/posts/. 
Gets an array of all of the user's posts populated with data.

### Example response
```
[
    {
        "attachedImage": {
            "id": "exli3gs74838jqiyaiih",
            "url": "http://res.cloudinary.com/dikl8liky/image/upload/v1618010903/exli3gs74838jqiyaiih.jpg"
        },
        "itemCategory": "food",
        "price": 14.48,
        "likes": [],
        "_id": "6070e3183cadfb32cce397c8",
        "itemName": "Spaghetti",
        "itemLink": "https://www.amazon.com/Campbells-Spaghetti-Canned-Pasta-15-8/dp/B01KQ9F10S/ref=sr_1_4?dchild=1&keywords=spaghetti&qid=1618010785&rdc=1&sr=8-4",
        "description": "I love spaget",
        "user": "6070e26f3cadfb32cce397c5",
        "comments": [],
        "createdAt": "2021-04-09T23:28:24.458Z",
        "updatedAt": "2021-04-09T23:28:24.458Z",
        "__v": 0
    },
    {
        "attachedImage": {
            "id": "lc5k1oqwoew6vmxbp9va",
            "url": "http://res.cloudinary.com/dikl8liky/image/upload/v1618011020/lc5k1oqwoew6vmxbp9va.jpg"
        },
        "itemCategory": "misc",
        "price": 18.99,
        "likes": [],
        "_id": "6070e38d3cadfb32cce397ca",
        "itemName": "Blackpink poster",
        "itemLink": "https://www.amazon.com/IDOLPARK-K-POP-Poster-Sticker-Blackpink/dp/B08HTZF2Z7/ref=sr_1_2?dchild=1&keywords=blackpink+poster&qid=1618010995&sr=8-2",
        "description": "BP IN UR AREA",
        "user": "6070e26f3cadfb32cce397c5",
        "comments": [
            {
                "_id": "6070e3c43cadfb32cce397cc",
                "author": "6070e3af3cadfb32cce397cb",
                "comment": "DUDUDUDU"
            }
        ],
        "createdAt": "2021-04-09T23:30:21.510Z",
        "updatedAt": "2021-04-09T23:31:16.750Z",
        "__v": 1
    }
]
```

### Get Individual Post
<span style="
font-size: 20px;
color: #faa61a;
font-family: Menlo,Consolas,Monaco,monospace;
text-transform: uppercase;
margin-right: 10px;"> get </span> /api/posts/:id. 
Gets the post specified by req.params.id.

### Example Response
```
{
    "attachedImage": {
        "id": "exli3gs74838jqiyaiih",
        "url": "http://res.cloudinary.com/dikl8liky/image/upload/v1618010903/exli3gs74838jqiyaiih.jpg"
    },
    "itemCategory": "food",
    "price": 14.48,
    "likes": [],
    "_id": "6070e3183cadfb32cce397c8",
    "itemName": "Spaghetti",
    "itemLink": "https://www.amazon.com/Campbells-Spaghetti-Canned-Pasta-15-8/dp/B01KQ9F10S/ref=sr_1_4?dchild=1&keywords=spaghetti&qid=1618010785&rdc=1&sr=8-4",
    "description": "I love spaget",
    "user": "6070e26f3cadfb32cce397c5",
    "comments": [],
    "createdAt": "2021-04-09T23:28:24.458Z",
    "updatedAt": "2021-04-09T23:28:24.458Z",
    "__v": 0
}
```

### Delete Post
<span style="
font-size: 20px;
color: #faa61a;
font-family: Menlo,Consolas,Monaco,monospace;
text-transform: uppercase;
margin-right: 10px;"> delete </span> /api/posts/. 
Deletes the post specified in the body with the key post.
Returns the deleted post on success.

### Example Body
```
{
  "post": "6070edb809ac1a4ba41e8982"
}
```

### Example Response
```
{
    "itemCategory": "food",
    "price": 5.99,
    "likes": [
        "jacky123"
    ],
    "_id": "6070edb809ac1a4ba41e8982",
    "itemName": "Chocolate",
    "itemLink": "https://www.amazon.com/Fannie-May-Chocolate-Covered-Caramel/dp/B087HLTGJP/ref=sr_1_1_sspa?dchild=1&keywords=chocolate&qid=1618013608&rdc=1&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUE9VV1JNNEdKUlgmZW5jcnlwdGVkSWQ9QTA4MDExMDdCVUhZSlJIMTlPR1YmZW5jcnlwdGVkQWRJZD1BMDI2OTc4MjdXSjI0VjlKQk1OWiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
    "description": "yum",
    "user": "6070e26f3cadfb32cce397c5",
    "comments": [],
    "createdAt": "2021-04-10T00:13:44.140Z",
    "updatedAt": "2021-04-10T00:15:10.168Z",
    "__v": 5
}
```

### Create New Post

<span style="
font-size: 20px;
color: #faa61a;
font-family: Menlo,Consolas,Monaco,monospace;
text-transform: uppercase;
margin-right: 10px;"> post </span> /api/posts/.  
The routes creates a post for a user. Must make a request with form-data with the template below:
```
form-data({
    itemName: string,
    itemLink: string [optional],
    itemCategory: string [optional],
    attachedImage: file [optional],
    description: string [optional],
    price: int [optional],
    file: javascript image file Object, or just {path: "path/to/image.jpg"}
})
```

## example

```
form-data({
    itemName: "Poster",
    file (file-type): "path/to/image.jpg" (use select image in postman)
})
```

<br/>
<br/>
<br/>

## Users

The routes to preform user operations. 

### Get User's Data
<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> get </span> /api/users/.  
Get's the user's data with populated fields.

### Example response
```
{
    "posts": [
        {
            "attachedImage": {
                "id": "exli3gs74838jqiyaiih",
                "url": "http://res.cloudinary.com/dikl8liky/image/upload/v1618010903/exli3gs74838jqiyaiih.jpg"
            },
            "itemCategory": "food",
            "price": 14.48,
            "likes": [],
            "_id": "6070e3183cadfb32cce397c8",
            "itemName": "Spaghetti",
            "itemLink": "https://www.amazon.com/Campbells-Spaghetti-Canned-Pasta-15-8/dp/B01KQ9F10S/ref=sr_1_4?dchild=1&keywords=spaghetti&qid=1618010785&rdc=1&sr=8-4",
            "description": "I love spaget",
            "user": {
                "_id": "6070e26f3cadfb32cce397c5",
                "name": "Alex Shih",
                "username": "alex123"
            },
            "comments": [],
            "createdAt": "2021-04-09T23:28:24.458Z",
            "updatedAt": "2021-04-09T23:28:24.458Z",
            "__v": 0
        },
        {
            "attachedImage": {
                "id": "lc5k1oqwoew6vmxbp9va",
                "url": "http://res.cloudinary.com/dikl8liky/image/upload/v1618011020/lc5k1oqwoew6vmxbp9va.jpg"
            },
            "itemCategory": "misc",
            "price": 18.99,
            "likes": [],
            "_id": "6070e38d3cadfb32cce397ca",
            "itemName": "Blackpink poster",
            "itemLink": "https://www.amazon.com/IDOLPARK-K-POP-Poster-Sticker-Blackpink/dp/B08HTZF2Z7/ref=sr_1_2?dchild=1&keywords=blackpink+poster&qid=1618010995&sr=8-2",
            "description": "BP IN UR AREA",
            "user": {
                "_id": "6070e26f3cadfb32cce397c5",
                "name": "Alex Shih",
                "username": "alex123"
            },
            "comments": [
                {
                    "_id": "6070e3c43cadfb32cce397cc",
                    "author": "6070e3af3cadfb32cce397cb",
                    "comment": "DUDUDUDU"
                }
            ],
            "createdAt": "2021-04-09T23:30:21.510Z",
            "updatedAt": "2021-04-09T23:31:16.750Z",
            "__v": 1
        }
    ],
    "followers": [
        {
            "_id": "6070e27f3cadfb32cce397c7",
            "name": "jacky yang",
            "username": "jacky123"
        },
        {
            "_id": "6070e3af3cadfb32cce397cb",
            "name": "Test User",
            "username": "user"
        }
    ],
    "following": [
        {
            "_id": "6070e26f3cadfb32cce397c5",
            "name": "Alex Shih",
            "username": "alex123"
        }
    ],
    "privacy": "Public",
    "admin": false,
    "_id": "6070e26f3cadfb32cce397c5",
    "name": "Alex Shih",
    "username": "alex123",
    "password": "$2b$10$CahYDWguRoo1eWb3C7JEX.tNK1Utxj.HLnAKTN.YGxksZeP8w0lXC",
    "email": "alex@gmail.com",
    "createdAt": "2021-04-09T23:25:35.803Z",
    "updatedAt": "2021-04-09T23:31:06.514Z",
    "__v": 5
}
```

### Get If User Is Following
<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> get </span> /api/users/following/:username.  
Returns whether the current user is following the user in req.params.username.
 as a JSON body with the key "following".


### Example response
```
{
  "following": false
}
```

### Update User Data
<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> put </span> /api/users/update.  
Updates fields passed in by the body of update user data.
Optional fields include name, email, username, description.
Returns the updated user.

### Example body
{
  "name": "John Smith",
  "email": "johnsmith42@hotmail.com"
}

### Get User Profile
<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> get </span> /api/users/profile/:username.  
Returns the populated profile of the user given by req.params.username.

### Example response
```
{
    "posts": [],
    "followers": [
        {
            "_id": "6070e4013cadfb32cce397cd",
            "name": "Second User",
            "username": "user2"
        }
    ],
    "following": [
        {
            "_id": "6070e3af3cadfb32cce397cb",
            "name": "Test User",
            "username": "user"
        },
        {
            "_id": "6070e26f3cadfb32cce397c5",
            "name": "Alex Shih",
            "username": "alex123"
        }
    ],
    "privacy": "Friends Only",
    "admin": false,
    "_id": "6070e3af3cadfb32cce397cb",
    "name": "Test User",
    "username": "user",
    "password": "$2b$10$K5yr8L5pUqmfuSkr/ppxMO9Wpw8i4JVdUXPBFgyMn/tIRZcgyvyQa",
    "email": "testuser@gmail.com",
    "createdAt": "2021-04-09T23:30:55.392Z",
    "updatedAt": "2021-04-09T23:32:42.139Z",
    "__v": 3
}
```


### Follows User

<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> post </span> /api/users/unfollow.  
follows the user with user.\_id that matches the body.id field

### example

```
{
  "id": "606a173116d6922f1ec61317"
}
```

### Unfollows User

<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> post </span> /api/users/follow.  
unfollows the user with user.\_id that matches the body.id field

### example

```
{
  "id": "606a173116d6922f1ec61317"
}
```

### Search For User

<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> get </span> /api/users/news/findUser/{:searchQuery}.  
queries the database of users with username like searchQuery. ie the regex ".\*_{searchQuery}.\*_"
matches the username in the database and it will return an array of most 3 username results.

### possible sample response

```
[
  "a",
  "ag123",
  "asdfasdfadsf"
]
```
### Delete User
<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> delete </span> /api/users/deleteUser. 
deletes the current user account that calls this, and returns the user document that was deleted.

### Change Password
<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> patch </span> /api/users/changePassword. changes the current user account password and returns the user document that was changed.
    
### example request body

```
{
  "oldPass": "password",
  "password": "newpass",
  "confirmPass": "newpass",
  "passwordStrength: 5
}
```

### Upload Profile Photo
<span style="
font-size: 20px;
color: #faa61a;
font-family: Menlo,Consolas,Monaco,monospace;
text-transform: uppercase;
margin-right: 10px;"> post </span> /upload/profile_pic/.  
Set user.image (Profile Picture) for the logged-in user.
You must make a post request using form-data.

```
form-data({
    file: javascript image file Object, or just {path: "path/to/image.jpg"}
})
```
## example

```
form-data ({
    file: {
        path: 'path/to/file.jpg' (click Select Files on Postman and select an image)
    }
})
```
Alternatively, in javascript like so:
```
const form = new FormData();
form.append("file", yourImageObject);
await client.post(BASE_URL + '/api/users/upload/profile_pic', form);
```

<br/>
<br/>
<br/>
