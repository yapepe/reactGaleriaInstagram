import './assets/App.css'
import GaleriaInstagram from './components/GaleriaInstagram/GaleriaInstagram'
import imagen1 from '../../assets/1.png'
import imagen2 from '../../assets/2.jpg'
import imagen3 from '../../assets/3.jpg'
import imagen4 from '../../assets/4.jpg'
import imagen5 from '../../assets/5.png'
import imagen6 from '../../assets/6.png'
import imagen7 from '../../assets/7.png'

function App() {
  return (
    <div className="app">
      <GaleriaInstagram
      lista = {[
        <div> <img src={imagen1}></img></div>,
        <div> <img src={imagen2}></img></div>,
        <div> <img src={imagen3}></img></div>,
        <div> <img src={imagen4}></img></div>,
        <div> <img src={imagen5}></img></div>,
        <div> <img src={imagen6}></img></div>,
        <div> <img src={imagen7}></img></div>
      ]}/>
    </div>
  )
}

export default App
