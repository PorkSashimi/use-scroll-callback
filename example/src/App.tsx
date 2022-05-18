import useScroll from '../../src/index';

function App() {

  useScroll({
    onScroll: (...args) => {
      console.log('onScroll', args);
    },
    onScrollTop: (...args) => {
      console.log('onScrollTop', args);
    },
    onScrollLeft: (...args) => {
      console.log('onScrollLeft', args);
    },
    UNSAFE_onScrollRight: (...args) => {
      console.log('UNSAFE_onScrollRight', args);
    },
    UNSAFE_onScrollBottom: (...args) => {
      console.log('UNSAFE_onScrollBottom', args);
    },
    target: () => document.getElementById('root')!
  });

  // ------

  return (
    <div className="App">
      <div>
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
      </div>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </div>
  )
}

export default App
