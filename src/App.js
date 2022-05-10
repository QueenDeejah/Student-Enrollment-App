import Home from './Home'
import Menu from './Menu'

function App(){
   return(
     <div >
     <Menu/>
     <div className='home'>
       <Home/>
     </div>
     </div>
   )
}
export default App;