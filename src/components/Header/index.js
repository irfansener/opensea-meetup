import logo from '../../assets/opensea.svg';
import profile from '../../assets/profile.png';
import wallet from '../../assets/wallet.png';
import search from '../../assets/search.png';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='divider'>
          <img src={logo} className="App-logo" alt="logo" />
          <span className='logoText'> OpenSea </span>
        </div>
        <div className='inputContainer'>
          <img src={search} className="searchIcon" />
          <input type="search" className='searchInput' placeholder="Search items, collections, and accounts" />
        </div>

        <div className='divider menu'>
          <a href="#" className='item'> Explore </a>
          <a href="#" className='item'> Stats </a>
          <a href="#" className='item'> Resources </a>
          <a href="#" className='item'> Create </a>

          <img src={profile} className="smallLogo" />
          <img src={wallet} className="smallLogo" />
        </div>

      </header>
    </div>
  );
}

export default App;
