import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage, EditImagePage } from './pages';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router basename="/content-creation-tool">
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/:imageId" exact>
            <EditImagePage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
