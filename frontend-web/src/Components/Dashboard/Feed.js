import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import '../../styles/home.css';
import Post from "./Post";

const postData = [
  {
    id: 0,
    timestamp: "11:50PM",
    userName: "Ray Peng",
    price: 13.99,
    itemName: "Gaming Mouse Pad",
    link: "https://www.ebay.ca/itm/Lenovo-GXH0W29068-Legion-Gaming-Xl-Cloth-Mouse-Pad/393084761638?hash=item5b85ad7626:g:HZIAAOSwt-heQfK1",
    image: "https://i.ebayimg.com/images/g/UN4AAOSwOmFfkH3l/s-l1600.jpg",
    caption: "I basically stole it ;)",
    likes: [
      "ashih2018", "yackyyang2000", "AMYGAOOOOOO"
    ],
    comments: [
      {
        "userName": "Alex Shih",
        "comment": "what happened to the one i bought u for christmas >:("
      }
    ]
  },
  {
    id: 1,
    timestamp: "11:59PM",
    userName: "Jacky Yang",
    price: 269.99,
    itemName: "Sailor Moon Body Pillow",
    link: "https://www.ebay.ca/itm/59-Anime-Sailor-Moon-Sailor-Venus-Minako-Aino-Dakimakura-Body-Pillow-Case-AY4/282760679842?hash=item41d5d991a2:g:WP4AAOSw-LtfKNY7",
    image: "https://i.ebayimg.com/images/g/WP4AAOSw-LtfKNY7/s-l400.jpg",
    caption: "Please don't tell Yulin I bought this",
    likes: [
      "yuxinzhou", "raypeng2000", "AMYGAOOOOOO"
    ],
    comments: [
      {
        "userName": "Yuxin Zhou",
        "comment": "wtf"
      }
    ]
  }
]

export default function Feed() {
  const getFeedPosts = () => {
    return postData.map(post => {
      console.log('post :>> ', post);
      return <Post key={post.id} post={post} />
    })
  }

  return (
    <div>
      <h1>Your Feed</h1>
      {getFeedPosts()}
    </div>
  );
}
