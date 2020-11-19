import './App.css';
import Header from './components/header';
import FeedContents from './containers/feed-contents';
import Footer from './containers/footer';

function App() {
  return (
    <div class='viewport'>
      <header className='header-container'>
        <Header />
      </header>
      <div className='body'>
        <FeedContents />
      </div>
    </div>
  );
}

export default App;
