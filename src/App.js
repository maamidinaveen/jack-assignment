import { BrowserRouter, Route, Switch } from "react-router-dom";

import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import DeleteUser from "./components/DeleteUser";
import EditUser from "./components/EditUser";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/users" component={UserList} />
      <Route path="/addUser" component={AddUser} />
      <Route path="/delete/:id" component={DeleteUser} />
      <Route path="/edit/:id" component={EditUser} />
      {/* Catch-all route for undefined paths */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
