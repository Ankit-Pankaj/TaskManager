import './App.css';
import Todo from './Todo';

function App() {
  var today= new Date();
  var options= {
  weekday: "long",
  day: "numeric",
  month: "long"
};
var day=today.toLocaleDateString("en-US", options);
  return (
    <div className="App">
      <header className="App-header">
     <div class="welcome">Hii Aki♥<br/> {" "+day}</div> 
     
       <Todo/>
      </header>
    </div>
  );
}

export default App;
