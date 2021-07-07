
import Navbar from './Components/Navbar';
import CodeForInterview from './Components/CodeForInterview';
import AllUsers from './Components/AllUsers';
import AddUsers from './Components/AddUsers';
import NotFound from './Components/NotFound';
import EditUser from './Components/EditUser';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
   
<Navbar />
<Switch>
<Route exact path="/" component={CodeForInterview} />
<Route exact path="/all" component={AllUsers} />

<Route exact path="/add" component={AddUsers} />
<Route exact path="/edit/:id" component={EditUser} />
<Route component={NotFound} />

</Switch>
</BrowserRouter>

  );
}

export default App;
