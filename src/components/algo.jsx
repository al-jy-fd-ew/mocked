import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';

const AlgoSection = () => (
  <div className='sections'>
    <h3>Question</h3>
    <p>Given an array of integers nums and an integer target, return indices of the two numbers such
      that they add up to target. You may assume that each input would have exactly one solution, and
      you may not use the same element twice. You can return the answer in any order.</p>
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
    <button>Go to next section</button>
  </div>
);

export default AlgoSection;