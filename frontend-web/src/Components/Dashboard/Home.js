import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "../../styles/home.css";
import ShareForm from "./ShareForm";
import {Container, Form, Row} from "react-bootstrap";
import "../../styles/home.css";
import Feed from "./Feed";
import { postData, userLinks } from "../../constants";
import { getUserInfo } from "../../axios/user";
import {apiPost} from "../../axios/posts";
import { useSelector, useDispatch } from 'react-redux';
import { getInitialFeed, createPost } from '../../reducers/postsReducer';

function Home(props) {
  // const [posts, setPosts] = useSelector(state => state.feedData.posts);
  // const [posts, setPosts] = useState(postData);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const user = useSelector(state => state.userData);
  // const feed = useSelector(state => state.postsData.feedPosts);
  // console.log('feed :>> ', feed);

  const posts = useSelector(state => state.postsData.feedPosts);

  const dispatch = useDispatch();


  useEffect(() => {  // Changed to non-async func, async gives React warning.
    // getUserInfo().then((data) => {
    //   console.log('data :>> ', data);
    //   setUser(data)
    //   setLoaded(true);
    // }).catch(err => {
    //   console.log("err: " + err)
    // });
    dispatch(getInitialFeed);
    setLoaded(true);
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
    } else if (type === "file") {
      console.log(e.target.files[0])
      setFile(e.target.files[0])
      console.log(file)
    }
  };

  const addPost = async (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Name can't be blank.");
      return;
    }

    // below is for hard-coded data phase 1 and can be deleted once we fully transition to API
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

    // Phase 2 api stuff
    const form = new FormData()
    form.append("file", file)
    form.append("itemName", name)
    form.append("itemLink", link)
    form.append("itemCategory", "misc") // placeholder
    form.append("description", desc)
    form.append("price", price)

    try{
      await dispatch(createPost(form));
      alert("Post created!");
    } catch (err) {
      console.log(err);
    }
  };
  if (!loaded) return (<div className="home"> <Navbar links={userLinks} /> </div>)

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
            <Feed postData={posts} user={user} />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
