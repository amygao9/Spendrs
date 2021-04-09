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
<br/>
<br/>
<br/>

# Protected API Routes

the following apis require you to set the header as following

| FIELD         | TYPE   | DESCRIPTION                        |
| ------------- | ------ | ---------------------------------- |
| authorization | String | The token recieved when logging in |

example: (note: this is not an actual token)

| FIELD         | value                                       |
| ------------- | ------------------------------------------- |
| authorization | bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 |

<br/>
<br/>
<br/>

## Admin

The admin routes used to do admin activity.

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

The routes to generate and create posts.

<br/>
<br/>
<br/>

## Users

The routes to preform user operations.

### Follows User

<span style="
    font-size: 20px;
    color: #faa61a;
    font-family: Menlo,Consolas,Monaco,monospace;
    text-transform: uppercase;
    margin-right: 10px;"> post </span> /api/users/unfollow.  
follows the user with user.\_id that matches the body.id field

## example

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

## example

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

## possible sample response

```
[
  "a",
  "ag123",
  "asdfasdfadsf"
]
```

<br/>
<br/>
<br/>
