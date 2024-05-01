import './App.css';
import { ShopItemFunc } from './ShopItemFunc';
import items from './items';


function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc values={items}/>
      </div>
    </div>
  )
}

export default App;
