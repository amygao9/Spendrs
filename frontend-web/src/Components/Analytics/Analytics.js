import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import '../../styles/home.css';
import { userLinks } from "../../constants";
import SpendingPieGraph from "./PieChart";
import TimeSeriesGraph from "./TimeSeries";
import Summary from "./Summary";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

function Analytics(props) {
  const [monthTimeSeries, setmonthTimeSeries] = useState([])
  const [categories, setcategories] = useState([])
  const [monthSpending, setmonthSpending] = useState(0)
  const [loaded, setLoaded] = useState(false)
  let date = new Date();
  let currentMonth = (date.getMonth() + 1).toString().padStart(2,0);
  const user = props.user;

  useEffect( () => {
    if (!user || Object.keys(user).length === 0) {
      return;
    }
    
    let purchases = [[user.createdAt.slice(0,10), 0]]
    let cat = {}
    let month_spent = 0
    for (var post in user.posts) {
      purchases.push([user.posts[post].updatedAt.slice(0,10), user.posts[post].price])
      if (user.posts[post].itemCategory === "") {
        user.posts[post].itemCategory = "misc"
      }
      if (cat[user.posts[post].itemCategory]) {
        cat[user.posts[post].itemCategory] += user.posts[post].price
      }
      else {
        cat[user.posts[post].itemCategory] = user.posts[post].price
      }
      
      if (user.posts[post].updatedAt.slice(5,7) === currentMonth) {
        month_spent += user.posts[post].price
      }
        
    }
    setmonthSpending(month_spent)
    setmonthTimeSeries(purchases)
    setcategories(cat)
    setLoaded(true);
      
  }, [user, currentMonth])

  if (!loaded) {
    return (<div className='home'> <Navbar links={userLinks} /> </div>)
  }
  return (
    <div className='home'>
      <Navbar links={userLinks} />
      <Container>
        <div className={"flexContainer"}>  {/*this class will allow mobile responsiveness*/}
          <div className={"flexCol"}>
            <Summary stats={monthSpending} />
            <TimeSeriesGraph stats={monthTimeSeries} />
          </div>
          <div className={"flexCol"}>
            <SpendingPieGraph stats={categories} />
          </div>
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('state.userData :>> ', state.userData);
  return { 
    user: state.userData
   };
}

export default connect(mapStateToProps)(Analytics);