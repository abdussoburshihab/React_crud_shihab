
import Navbar from './Components/Navbar';
import CodeForInterview from './Components/CodeForInterview';
import AllUsers from './Components/AllUsers';
import AddUsers from './Components/AddUsers';

import {BrowserRouter ,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
   
<Navbar />
<Switch>
<Route exact path="/" component={CodeForInterview} />
<Route exact path="/all" component={AllUsers} />

<Route exact path="/add" component={AddUsers} />


</Switch>
</BrowserRouter>

  );
}

export default App;
