// Import style sheets
import './Styles/App.css';


// Import NPM packages
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

// Import images
import Microphone from './Images/microphone.svg';
import MicrophoneMuted from './Images/microphone-muted.svg';
import SpeakerMuted from './Images/speaker-muted.svg';
import Speaker from './Images/speaker.svg';



function App() {

  function speakContent() {
    document.getElementById("speaker").src = Speaker;
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.getElementById('textarea').textContent;
    window.speechSynthesis.speak(msg);

    msg.addEventListener("end", () => {
      document.getElementById("speaker").src = SpeakerMuted;
    });
  }

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const reset = () => {
    window.location.reload();
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (



    <div id='flex'>
      <div >
        <img src={listening ? Microphone : MicrophoneMuted} id='microphone' alt='microphone' className='flex-element' onClick={listening ? SpeechRecognition.stopListening : SpeechRecognition.startListening} />
        <img src={SpeakerMuted} onClick={speakContent} id='speaker' alt='speaker' className='flex-element' />
        <button onClick={reset} id='reset'>Reset</button>
      </div>
      <div id='flex-parent'>

        <div className='flex-element' id='center'>
          <div contentEditable id='textarea'>
            {transcript ? <p>{transcript}</p> : <p>Click the mike button and start speaking
              (or)
              Click on right speaker button to speak the contents in the box</p>}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
