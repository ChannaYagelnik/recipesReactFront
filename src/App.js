import './App.css';
import './bootstrap.min.css'
import { Provider } from "react-redux"
import { store } from "./redux/store"
import { Routing } from './component/routing'
import { MyProvider } from './context';
import { useState } from 'react';

function App() {
  const [listuser,setlistuser] = useState([])
  const maneger = 111
  const [codeuserobj,setcodeuserobj] = useState({})
  const [ismaneger, setismaneger] = useState(true)
  const [isuser, setisuser] = useState(true)
  const coderecepuy= ""

  const tranfer = {
    listuser: listuser,
    maneger: maneger,
    ismaneger: ismaneger,
    isuser: isuser,
    setisuser: setisuser,
    setismaneger: setismaneger,
    setcodeuserobj:setcodeuserobj,
    setlistuser:setlistuser,
    codeuserobj: codeuserobj,
    coderecepuy:coderecepuy

  }

  return (<MyProvider value={tranfer}>
    <Provider store={store}>
      <Routing></Routing>
    </Provider></MyProvider>
  );
}
export default App;
