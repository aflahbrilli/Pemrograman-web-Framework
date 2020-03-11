import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function AuthExample(){
  return(
    <Router>
      <div>
        <AuthButton/>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>
        <switch>
          <Route path='/public'>
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <PrivateRoute path="/private">
            <ProtectPage/>
          </PrivateRoute>
        </switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticated(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton(){
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button 
      onClick={() =>{
        fakeAuth.signout(() => history.push("/"));
      }}
      >
        Sign out
      </button>
    </p>
  ):(
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest}){
  return(
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
    ):(
        <Redirect
          to={{
            pathname:"/login",
            state: {from: location}
            }}
          />
        )
      }
    />
  )
}

function PublicPage(){
  return <h3>Public</h3>;
}

function ProtectPage(){
  return <h3>Private</h3>;
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from : { pathname: "/"}};
  let login = () => {
    fakeAuth.authenticated(()=> {
      history.replace(from);
    });
  };
  return(
    <div>
      <p>You must log in to view the page at{from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}
// function Topics(){

//   let { path, url } = useRouteMatch();
//   return(
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata Alam, Musem`}>Travelling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic/>
//         </Route>
//       </Switch>
//     </div>
//   )
// }

// function Topic(){
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }
// function Child(){
//   let {id}=useParams();

//   return(
//     <div>
//       <h2>ID:{id}</h2>
//     </div>
//   );
// }

// function Home(){
//   return(
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About(){
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard(){
//   return(
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
