import './App.css';
import './components/tab bar/TabBar.jsx'
import TabBar from './components/tab bar/TabBar.jsx';

function App() {
  return (
    <div className="App">
      <div className='tabBar container'>
      <TabBar />
      </div>

     <div className='top'>
        <h1 className='start'>Welcome To My Project</h1>
     </div>

     <div className='bottom'>
        <div className='left'> 
       {/* Put all the content that you want in the left box here*/}
        </div>
      <div className='right'>
        {/* Put all the content that you want in the right box here*/}
      </div>
     </div>

    </div>
  );
}

export default App;
