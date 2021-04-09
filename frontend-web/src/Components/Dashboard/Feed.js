import React from "react";
import LazyLoad from "react-lazyload";
import "../../styles/home.css";
import Post from "./Post";
import Comments from "./Comments";
import TimeAgo from "../utils/TimeAgo";
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch } from "react-redux";
import { loadFeedContent } from "../../reducers/postsReducer";

export default function Feed({ postData, user, finishedLoading }) {
  const dispatch = useDispatch();

  const loadFunc = () => {
    dispatch(loadFeedContent);
  }

  const getFeedPosts = () => {
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={!finishedLoading}
        loader={<h3 className="loader" key={0}>Loading ...</h3>}
      >
        {
          postData.map((post, index) => {
            return (
              <LazyLoad height={200} style={{ marginBottom: "30px" }} key={index}>
                <TimeAgo timestamp={post.createdAt}/>
                <div className={"feedItemContainer spendrCard shadowMedium"}>
                  <Post post={post} />
                  <Comments post={post} user={user} key={post.id} />
                </div>
              </LazyLoad>
            );
          })
        }
      </InfiniteScroll>
    )
  };

  return (
    <div>
      <h1>Your Feed</h1>
      { postData.length === 0 ? <h2>No posts. Go follow someone to see their posts!</h2> : getFeedPosts()}
    </div>
  );
}
