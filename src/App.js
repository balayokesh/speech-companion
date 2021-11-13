import './Styles/App.css'; 

import MicrophoneMuted from './Images/microphone-muted.svg';
import SpeakerMuted from './Images/speaker-muted.svg';

function App() {

  const speakContent = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.getElementById('textarea').innerHTML;
    document.getElementById('speaker').src = './images/speaker.svg';
    window.speechSynthesis.speak(msg);
  }

  return (
    <div id='flex-parent'>
        <img src={MicrophoneMuted} id='microphone' alt='microphone' className='flex-element'/>
        <div contentEditable id='textarea' className='flex-element'>
          Click the mike button and start speaking
          (or)
          Click on right speaker button to speak the contents in the box
        </div>
        <img src={SpeakerMuted} onClick={speakContent} id='speaker' alt='speaker' className='flex-element'/>
    </div>
  );
}

export default App;
