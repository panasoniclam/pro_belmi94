import Header from './components/Header';
import Footer from  './components/Footer'
import Notfound from  './components/Notfound';
import RouteTem from  './components/RouteTem';

import {
  BrowserRouter as Router,
  NavLink,
  Route,Switch
} from "react-router-dom";
const customRoute =  route =>{
   if(route.length>0){
     return route.map((value,index)=>{  
       return(
       <Route
        path={value.path}
        exact={value.exact }
        component={value.main}
        key={index}
       />     
       )})
   }
  return null
}
function App() {
  return (
    <div>
      <Router>
       <Header></Header>
       <Switch>
           {customRoute(RouteTem)}
           <Route component={Notfound}/>
       </Switch>
       <Footer></Footer>
      </Router>
    </div>
  );
}
export default App;
