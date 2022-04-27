import React, { useEffect, useState} from 'react';
import Markdown from './components/Markdown/index';
import './App.scss';

function App() {
  const [markdown, setMarkdown] = useState(`
  # Header
  I like cats
  - meow meow
  - **meow** meow
    
  ## Hello here is some sample markdown
  - hello
  - i am jumping
    - jump
    
  1. some
  2. dot
  3. points
    
  \`\`\`
  ### heading
  \`\`\` 
    
  I just love **bold text**.
  
  > Dorothy followed her through many of the beautiful rooms in her castle.
  tooo easy lmao
    
  ![](https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png)`
  );

  return (
    <div className="App">
      <div className='text-container'>
        <textarea
          value={markdown}
          onChange={e => setMarkdown(e.target.value)}
          resize={false}
        ></textarea>
      </div>
      <Markdown markdown={markdown}/>
    </div>
  );
}

export default App;
