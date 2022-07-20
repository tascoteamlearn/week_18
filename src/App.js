import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Provider
import { Provider } from 'react-redux';

//Store
import {store} from './Redux'

//Apps
import Navigator from './Layouts/Navigator';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    console.log("see here")
  },[])

  return (
    //Same as context, Provide used to Provide data to all components
    <Provider store={store}>
      <Navigator/>
    </Provider>
    // <div>
    //   sad;nals
    //   {/* <Navigator/> */}
    // </div>
  );
}

export default App;
