import { useState } from 'react';
import useScroll from '../../src/index';

function App() {

  const [count, setCount] = useState(0);

  // ------

  const { position, addScrollListener, removeScrollListener } = useScroll({
    onScroll: (...args) => {
      console.log('onScroll', args);
    },
    onScrollTop: () => {
      console.log('onScrollTop');
    },
    onScrollLeft: () => {
      console.log('onScrollLeft');
    },
    UNSAFE_onScrollRight: () => {
      console.log('UNSAFE_onScrollRight');
    },
    UNSAFE_onScrollBottom: () => {
      setCount(count + 1)
      console.log('UNSAFE_onScrollBottom');
    },
    target: () => document.getElementById('scroll-container')!
  });

  // ------

  return (
    <div className="App">
      <button onClick={() => addScrollListener()}>
        add Lietener
      </button>
      <button onClick={() => removeScrollListener()}>
        remove Lietener
      </button>
      <div>
        {JSON.stringify(position[0])}
        {JSON.stringify(position[1])}
      </div>
      <div>
        {count}
      </div>
      <div id='scroll-container' style={{ overflow: 'auto', height: '200px' }}>
        <div>111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  )
}

export default App
