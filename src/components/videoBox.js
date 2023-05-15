import '../home.css'
import { useSelector } from 'react-redux';

function VideoBox() {
  const index=useSelector(state => state.index)
  function src () {
    return `video/${index}.mp4`
  }
  return (
    <video className="video-box" src={src()} autoPlay muted/>
  );
}

export default VideoBox;
