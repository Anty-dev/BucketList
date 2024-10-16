import './App.css';
import './components/tab bar/TabBar.jsx'
import TabBar from './components/tab bar/TabBar.jsx';
import exampleimage from './components/images/Example.png';

function App() {
  return (
    <div className="App">
      <div className='tabBar container'>
      <TabBar />
      </div>

     <div className='top'>
        <h1 className='start'>Welcome To My Project</h1>
        <h2 className='Tleft'>Example Bucket List</h2>
        <h2 className='Tright'>About</h2>
     </div>

     <div className='bottom'>
        <div className='left'> 
       {/* Put all the content for the left box in here*/}
       <img src={exampleimage} alt="example" className="example1"/>

        </div>
      <div className='right'>
        {/* Put all the content for the right box in here*/}
        <p>
          The idea behind this project was to make a application that the user could type in and it would store the user's input in a list.
          The theme and format of this list represents a bucket list that users can create and manage. The user can check the box if the item is done and it will automatically sort
          that item to the bottom of the list. There is also a delete button that gets rid of that specifc item from the list. The idea for having these two seperate
          features instead of having it deleted when its checked is to have the checked items as a progress bar and seeing what you have accomplished. The goal of this project was to 
          learn basic CSS, user experience (UX design), and learn how to use the react framework. In this project I gained hands-on experience and learned how to manage state, fundamental CSS and HTML 
          concepts, React router for multi-page applications, and how to design components to fit the specifc requirements.
        </p>

      </div>
     </div>

    </div>
  );
}

export default App;
