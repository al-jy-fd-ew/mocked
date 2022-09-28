import React, {useState, useEffect} from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';

// const sampleQuestions = [
//   'Given a sorted array, find a way to make a binary tree with minimal height.',
//   'Given a list of words, write a program to find the longest word made of other words in the list. Example: [\'dog\', \'cat\', \'walker\', \'dogwalker\'] -> \'dogwalker\'',
//   'You are given a sorted array and you want to find the number N. How do you do the search as quickly as possible?',
//   'Implement a stack using queues as the underlying data structure.',
//   'Given two words (beginWord and endWord), and a dictionary\'s word list, find the length of shortest transformation sequence from beginWord to endWord, such that: 1.Only one letter can be changed at a time. 2.Each intermediate word must exist in the word list.'
// ];

// function getRandomInt() {
//   return Math.floor(Math.random() * 5);
// }

const AlgoSection = ( {renderNext, getQuestion, goToNext }) => {

  const [allQuestionsDone, setAllQuestionsDone] = useState(false);
  const [questionId, setQuestionId] = useState(NaN);
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    getQuestion('algorithm', setAllQuestionsDone, setQuestionId, setPrompt);
  }, []);

  return (
    <div className='sections'>
      <h3>Question</h3>
      <p>{prompt}</p>
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
      <button className='next-button' onClick={() => (goToNext('algo', questionId, renderNext))}>Go to next section</button>
    </div>
  );
};

export default AlgoSection;