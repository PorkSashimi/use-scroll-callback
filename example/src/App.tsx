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
    target: () => document.getElementById('scroll-container')!
  });

  // ------

  return (
    <div className="App">
      <div id='scroll-container'>
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
        <div>1</div>
      </div>
    </div>
  )
}

export default App
