import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Provider
import { Provider } from 'react-redux';

//Store
import {store} from './Redux'

//Apps
import Navigator from './Layouts/Navigator';

function App() {
  return (
    //Same as context, Provide used to Provide data to all components
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}

export default App;
