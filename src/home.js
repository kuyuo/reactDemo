import './home.css'
import Header from './components/header'
import Bottom from './components/bottom'
import VideoBox from './components/videoBox';
import { Provider } from 'react-redux';
import store from './store';
function Home() {

  return (
    <Provider store={store}>
    <div className="home">
      <Header/>
      <VideoBox/>
      <Bottom/>
    </div>
    </Provider>
  );
}

export default Home;