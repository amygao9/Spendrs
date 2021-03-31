import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "../../styles/home.css";
import ShareForm from "./ShareForm";
import { Container, Row } from "react-bootstrap";
import "../../styles/home.css";
import Feed from "./Feed";
import { postData, userLinks, users } from "../../constants";
import { getUserInfo } from "../../axios/user";

function Home(props) {
  const [posts, setPosts] = useState(postData);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(async () => {
    const data = await getUserInfo();
    console.log('data :>> ', data);
  }, [])

  const updateData = (e, type) => {
    if (type === "name") {
      setName(e.target.value);
    } else if (type === "link") {
      setLink(e.target.value);
    } else if (type === "price") {
      setPrice(e.target.value);
    } else if (type === "desc") {
      setDesc(e.target.value);
    }
  };

  const addPost = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Name can't be blank.");
      return;
    }

    const newPost = {
      id: Math.floor(Math.random() * 100000000000),
      timestamp: new Date(),
      userName: "alexshih2018",
      price: price,
      itemName: name,
      link: link,
      image: "",
      caption: desc,
      likes: [],
      shares: [],
      comments: [],
    };

    setName("");
    setLink("");
    setPrice(0);
    setDesc("");
    setPosts([newPost, ...posts]);

    alert("Post created!");
  };

  return (
    <div className="home">
      <Navbar links={userLinks} />
      <Container className="homeContainer">
        <Row>
          <div id="shareContainer">
            <ShareForm
              addPost={(e) => addPost(e)}
              updateData={(e, type) => updateData(e, type)}
              name={name}
              link={link}
              price={price}
              desc={desc}
            />
          </div>
          <div id="feedContainer">
            {/* we need to feed in the user we are logged in as */}
            <Feed postData={posts} user={users["alexshih2018"]} />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
