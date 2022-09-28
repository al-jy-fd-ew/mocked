import React, {useState, useEffect} from 'react';
import AceEditor from 'react-ace';
import SkipSection from './skip-section.jsx';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';

const AlgoSection = ( { renderNext, getQuestion, goToNext, resetCounter }) => {

  const [allQuestionsDone, setAllQuestionsDone] = useState(false);
  const [questionId, setQuestionId] = useState(NaN);
  const [prompt, setPrompt] = useState('');

  // get new question to render for user
  // will trigger on first load and when user resets progress
  useEffect(() => {
    getQuestion('algorithm', setAllQuestionsDone, setQuestionId, setPrompt);
  }, [allQuestionsDone]);

  const resetProgress = () => {
    setAllQuestionsDone(false);
  };

  return (
    <div className='sections'>
      <h3>Algorithm Question</h3>
      <p>{prompt}</p>
      {
        allQuestionsDone ?
          <SkipSection section={'algorithm'} resetProgress={resetProgress} renderNext={renderNext} resetCounter={resetCounter} />
          :
          <React.Fragment>
            <AceEditor
              style={{
                height: '50vh',
                width: '80%',
              }}
              // placeholder='Start Coding'
              mode='javascript'
              theme='github'
              name='basic-code-editor'
              // onChange={currentCode => setCode(currentCode)}
              fontSize={14}
              showPrintMargin={false}
              showGutter={true}
              highlightActiveLine={true}
              // value={code}
              setOptions={{
                // enableBasicAutocompletion: true,
                // enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 4,
              }} />
            <button className='next-button' onClick={() => (goToNext('algorithm', questionId))}>Go to next section</button>
          </React.Fragment>
      }
    </div>
  );
};

export default AlgoSection;