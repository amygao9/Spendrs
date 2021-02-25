import '../../styles/WelcomePage.css';
import blob from '../../assets/blob.svg';
import threeCharacters from '../../assets/3characters.svg'

function WelcomePage() {
  return (
    <div id={"background"}>
      <div id={"leftSide"}>
        <div id={"welcomeText"}>
          <h1 className="welcomeTitle">
            Welcome&nbsp;to<br/>Spendr
          </h1>
          <h3 className="welcomeSubTitle">
            Track your spendings <br/>
            Share your cops
          </h3>
        </div>
      </div>

      <div>
        <img src={blob} id={'blob'}/>
        <img src={threeCharacters} id={'threeCharacters'}/>
      </div>

      <div id={'rightSide'}>
        <div id={'loginCard'}>
          <form>
            <input type="text" name="username" placeholder={"Username"}></input>
            <input type="password" name="password" placeholder={"Password"}></input>
            <input type={"submit"} id={"loginBtn"} value={"Log In"}/>
          </form>
          <button id={"createAccBtn"}>Create New Account</button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
