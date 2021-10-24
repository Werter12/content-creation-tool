import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MainPage, EditImagePage } from './pages';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/:imageId" exact>
          <EditImagePage />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
