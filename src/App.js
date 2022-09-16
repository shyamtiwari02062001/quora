import "./App.css";
import Feed from "./components/feed/feed";
import SideContentText from './constants/sideContentText';
function App() {
  return (
    <div className="App">
      <div className="blank">
        {SideContentText}
      </div>
      <div className="blank1">
      {SideContentText}
      </div>
      <div className="space"></div>
      <div className="content">
        <Feed />
      </div>
      <div className="space"></div>
    </div>
  );
}

export default App;
