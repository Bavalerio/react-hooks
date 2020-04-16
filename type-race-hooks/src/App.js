import React ,{ useState, useEffect } from 'react';
import './App.css';

const App = () => {
 const SNIPPETS = [
    'Bears, beets, battlestar galatica',
    "What's Forrest Gump's password? 1Forest1",
    'Where do programers like to hangout? The Foo Bar'
  ]; 
  
  const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null };
  const [snippet, setSnippet] = useState('');
  const [userText, setUserText] = useState('');
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const updateUserText = event => {
    setUserText(event.target.value);

    if (event.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime
      });
    }
  }
  
  const chooseSnippet = snippetIndex => () => {
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({ ...gameState, startTime: new Date().getTime() });
  };

  useEffect(() => {
    if (gameState.victory) document.title = 'Victory!';
  });

  return (
    <div>
      <h2 className='h1-header'>Type Race</h2>
      <hr />
      <h3 className='h1-header'>Snippet</h3>

      <hr />
      {snippet}
      <h4>{gameState.victory ? `Done! 🎉 Time: ${gameState.endTime}ms` : null}</h4>
      <input className='input-container' value={userText} onChange={updateUserText}  />
      <hr />
      {
        SNIPPETS.map((SNIPPET, index) => (
          <button className='button-container' onClick={chooseSnippet(index)} key={index} >
            {SNIPPET.substring(0, 10)}...
          </button>
        ))
      }
    </div>
  );
}

export default App;
