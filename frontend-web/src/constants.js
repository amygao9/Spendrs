export const userLinks = {
  dashboard: "Feed",
  analytics: "Analytics",
  profile: "Profile",
  settings: "Settings",
};

export const adminLinks = {
  admin: "Admin",
};

export const postData = [
  {
    id: 0,
    timestamp: Date.now() - 500000,
    userName: "Ray Peng",
    price: 13.99,
    itemName: "Gaming Mouse Pad",
    link:
      "https://www.ebay.ca/itm/Lenovo-GXH0W29068-Legion-Gaming-Xl-Cloth-Mouse-Pad/393084761638?hash=item5b85ad7626:g:HZIAAOSwt-heQfK1",
    image: "https://i.ebayimg.com/images/g/UN4AAOSwOmFfkH3l/s-l1600.jpg",
    caption: "I basically stole it ;)",
    likes: ["ashih2018", "yackyyang2000", "AMYGAOOOOOO"],
    shares: ["yuxinzhou", "raypeng2000"],
    comments: [
      {
        profilePicture:
          "https://www.allkpop.com/upload/2020/04/content/091439/1586457559-9490h64e069pk776ou0b.jpg",
        userName: "Alex Shih",
        comment: "what happened to the one i bought u for christmas >:(",
      },
    ],
  },
  {
    id: 1,
    timestamp: 1615357148258,
    userName: "Jacky Yang",
    price: 269.99,
    itemName: "Sailor Moon Body Pillow",
    link:
      "https://www.ebay.ca/itm/59-Anime-Sailor-Moon-Sailor-Venus-Minako-Aino-Dakimakura-Body-Pillow-Case-AY4/282760679842?hash=item41d5d991a2:g:WP4AAOSw-LtfKNY7",
    image: "https://i.ebayimg.com/images/g/WP4AAOSw-LtfKNY7/s-l400.jpg",
    caption: "Please don't tell Yulin I bought this",
    likes: ["yuxinzhou", "raypeng2000", "AMYGAOOOOOO"],
    shares: ["yuxinzhou", "raypeng2000"],
    comments: [
      {
        profilePicture: "https://cdn.frankerfacez.com/emoticon/336471/4",
        userName: "Yuxin Zhou",
        comment: "wtf",
      },
    ],
  },
  {
    id: 2,
    timestamp: 1615352148258,
    userName: "Amy Gao",
    price: 98.99,
    itemName: "LULU Lemon Pants Blue",
    link:
      "https://shop.lululemon.com/p/womens-leggings/Wunder-Train-HR-Crop-21/_/prod9750277?color=46717",
    image:
      "https://images.lululemon.com/is/image/lululemon/LW6BF7S_046717_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    caption: "yay!!",
    likes: ["yuxinzhou", "raypeng2000", "ashih2018"],
    shares: [],
    comments: [
      {
        profilePicture:
          "https://www.allkpop.com/upload/2020/04/content/091439/1586457559-9490h64e069pk776ou0b.jpg",
        userName: "alexshih",
        comment: "is this what girls buy i wouldnt know",
      },
    ],
  },
  {
    id: 3,
    timestamp: 1615332148258,
    userName: "Amy Gao",
    price: 129.99,
    itemName: "LULU Lemon Pants Black",
    link:
      "https://shop.lululemon.com/p/womens-leggings/Invigorate-HR-31-Tight/_/prod10440025?color=31382",
    image:
      "https://images.lululemon.com/is/image/lululemon/LW5DJ8T_031382_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    caption: "bought another one!!",
    likes: ["yuxinzhou", "raypeng2000", "ashih2018"],
    shares: [],
    comments: [],
  },
  {
    id: 4,
    timestamp: 1615322148258,
    userName: "Alex Shih",
    price: 54.99,
    itemName: "IU Poster",
    link:
      "https://www.ebay.com/itm/007-IU-Lee-Ji-eun-Korean-Idol-Singer-Girl-Hot-Kpop-Star-36-x24-Poster/352976137251?hash=item522f046c23:g:4l4AAOSwkkxeTMB7",
    image: "https://i.ebayimg.com/images/g/4l4AAOSwkkxeTMB7/s-l400.jpg",
    caption: "can someone please get this for me",
    likes: ["yuxinzhou", "raypeng2000", "ashih2018"],
    shares: [],
    comments: [],
  },
  {
    id: 5,
    timestamp: 1615252148258,
    userName: "Yulin Zhou",
    price: 10200.5,
    itemName: "",
    link:
      "https://www.ebay.com/itm/Fashion-Women-White-Topaz-Amethyst-Wedding-Rings-Party-Jewelry-Anniversary-Gift/265067964732?_trkparms=ispr%3D1&hash=item3db748293c:g:IeQAAOSwl29gOIc3&amdata=enc%3AAQAFAAACcBaobrjLl8XobRIiIML1V4Imu%252Fn%252BzU5L90Z278x5ickkXKoKcbeZcOrOku%252BoOBl%252BS5aCix1EfqdYwGyuhgWHrQ9m8os1t9rpSU6CwR0enGYuVJgYdIWLc3RIHr%252FDKD7CYPpS7jFVzmuZlnUhNOvgwGK7xb4L23azJ4%252BlPCa%252FTTITJPljOqjiD4mxgikbtT%252F5WrqPGDt0JeKNvD3FKgqCUo%252Bm5%252FigYtVTegFwoQPwCUTN1PX%252B%252BSyCzUdPMnofxK4xWxjJeCUR%252B7ZbHd16DiDvp%252F1MkEY6UURl%252Fw%252BSSfaWCIcZzfJzK5CfJhWbTghmcEKWr9tUQOGDngzx5dIjr5j6CHxMo1%252BM38IdcRmXWMXZj9SpBvZSAU1mR0MHCD3WQc76FiAyVxImMsGBvfKHHTJ4U%252Fd81H1QUlMliLipQLNjqZU2LJmkUNnl1aJ5PL4FNeE6HS0FnRPDMw4%252B9M0iWaFQgJ000zQu8wG5egwvd7sl2v7yO8RWQVHNybeAvKf7qNg0d7NYa6gmN%252FIiVZ9%252FmiFJhth6y7KJGMUYWJnmAHxxulK%252B3w%252BZgkSrwutHOjPOwwx1nNfWSrPlIr%252FDZZTaOUKzgR%252FbZ%252F9DN3BPmUlmjzxBCIMyCeQH6OnJ%252FAGW0uVdZy%252Bo70kyeCDyCBSEU8fW1m7IJPJe7cw%252FA1IsI0U9s%252F%252BMyxD40R9ww8fsIjio4S3ss5I6tKlfPBKtHRDBXe4DZoY797BN7txzNqF3wGy2N1Ar4GGci2TVzteEVOrnumIZMAJ%252FeG1nl%252BBq7gzR9aO31psnDo%252Fkn9VieRwVQiUKCLVOUTFr9mSCRu7cIied3DXVY6%252BGSQ%253D%253D%7Ccksum%3A265067964732f182e33a2e0e46d1b626c432064bd750%7Campid%3APL_CLK%7Cclp%3A2334524",
    image: "https://i.ebayimg.com/images/g/IeQAAOSwl29gOIc3/s-l1600.jpg",
    caption: "B U Y  M E  J E W L E R Y !",
    likes: ["jackyyang", "windsorsaurus", "ashih2018"],
    shares: [],
    comments: [],
  },
];

export const users = {
  alexshih2018: {
    id: 1,
    profilePicture:
      "https://www.allkpop.com/upload/2020/04/content/091439/1586457559-9490h64e069pk776ou0b.jpg",
    username: "alexshih2018",
    name: "Alex Shih",
    description:
      "Hi! My name is Alex and I am a third year computer science specialist. I like playing volleyball and board games! :)",
    followers: ["kungpaoamygao", "yackyyang69"],
    following: ["kungpaoamygao", "rayisnotlame"],
    posts: 2,
    email: "alexshih@gmail.com",
    register_date: "2021/03/05",
  },
  kungpaoamygao: {
    id: 2,
    profilePicture:
      "https://rasamalaysia.com/wp-content/uploads/2019/03/kung-pao-chicken-thumb.jpg",
    username: "kungpaoamygao",
    name: "Amy Gao",
    description: "Yoyoyoyo! I am Amy Gao and I love Kung Pao chicken!",
    followers: ["alexshih2018", "yackyyang69"],
    following: ["alexshih2018", "rayisnotlame"],
    posts: 19,
    email: "gao@gmail.com",
    register_date: "2021/03/05",
  },
  yackyyang69: {
    id: 3,
    profilePicture:
      "https://i.pinimg.com/474x/bc/bb/07/bcbb0771218094c32809d1e6e22a6444.jpg",
    username: "yackyyang69",
    name: "Jacky Yang",
    description:
      "My name is Yacky Yang and I love my girlfriend Yuxin :^) no cap",
    followers: ["alexshih2018"],
    following: ["kungpaoamygao", "rayisnotlame"],
    posts: 3,
    email: "yackyyang@gmail.com",
    register_date: "2021/03/05",
  },
  rayisnotlame: {
    id: 4,
    profilePicture:
      "https://www.morrishospital.org/wp-content/uploads/2018/12/penguin2_2.jpg",
    username: "rayisnotlame",
    name: "Ray Peng",
    description:
      "I am Ray and I have super high self esteem because I go to Harvard of the North! I am not lame!",
    followers: ["kungpaoamygao", "yackyyang69"],
    following: ["kungpaoamygao", "alexshih2018", "yackyyang69"],
    posts: 1,
    email: "raypenguin@gmail.com",
    register_date: "2021/03/05",
  },
};
