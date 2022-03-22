import logo from './logo.svg';
import 'antd/dist/antd.css'
import './App.css';
import Wrapper from './components/Wrapper';
import Counter1 from './components/CounterA';
import Counter2 from './components/CounterB';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import { DatePicker} from 'antd';
import Antdformdemo from './components/Antdformdemo';
function App() {

  const dateval=(d)=>{

    console.log(d)
  }
  
  return (
    <div className="App">
    
          <Wrapper render={(count,increment)=>{
            return <Counter1 count={count} increment={increment}/>                                         
          }}/>

          <Wrapper render={(count,increment)=>{
            return <Counter2 count={count} increment={increment}/>                                         
          }}/>

            <ClickCounter/>
            <HoverCounter/>  

            <DatePicker onChange={dateval}/>
            <Antdformdemo/>
    </div>
  );
}

export default App;
