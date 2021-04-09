import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "../../styles/home.css";
import ShareForm from "./ShareForm";
import {Container, Row} from "react-bootstrap";
import "../../styles/home.css";
import Feed from "./Feed";
import { userLinks } from "../../constants";
import { useDispatch, connect } from 'react-redux';
import { getInitialFeed, createPost } from '../../reducers/postsReducer';
import { URLRegex } from "../utils/utils";
import { useAlert } from 'react-alert'
import {compressPostPicture} from "../../util/imageCompression";

function Home(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("misc");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const user = props.user;
  const posts = props.posts;
  const finishedLoading = props.finishedLoading;
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    dispatch(getInitialFeed);
    setLoaded(true);
  }, [dispatch])

  // Pass this into form component. Used to update our states.
  const updateData = (e, type) => {
    if (type === "name") {
      setName(e.target.value);
    } else if (type === "link") {
      setLink(e.target.value);
    } else if (type === "price") {
      setPrice(e.target.value);
    } else if (type === "desc") {
      setDesc(e.target.value);
    } else if (type === "category") {
      setCategory(e.target.value);
    } else if (type === "file") {
      setFile(e.target.files[0])
    }
  };

  const addPost = async (e) => {
    e.preventDefault();

    if (name === "") {
      alert.error("Name can't be blank.");
      return;
    }

    if (price < 0) {
      alert.error("Price cannot be less than 0.");
      return;
    }

    if (link.length !== 0) {
      if (!link.match(URLRegex)) {
        alert.error("Not a valid website URL.");
        return;
      }
    }

    // Phase 2 api stuff
    const form = new FormData()
    const compressedImage = await compressPostPicture(file);
    form.append("file", compressedImage)
    form.append("itemName", name)
    form.append("itemLink", link)
    form.append("itemCategory", category)
    form.append("description", desc)
    form.append("price", price)

    try{
      await dispatch(createPost(form));
      alert.success("Post created!");
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
              category={category}
              desc={desc}
            />
          </div>
          <div id="feedContainer">
            {/* we need to feed in the user we are logged in as */}
            <Feed postData={posts} user={user} finishedLoading={finishedLoading} />
          </div>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { 
    user: state.userData,
    posts: state.postsData.feedPosts,
    finishedLoading: state.postsData.finishedLoading
   };
}

export default connect(mapStateToProps)(Home);
