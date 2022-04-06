import './Header.css';
import pic from "./dd.jpg"
import dik from "./gg.jpg"
function Header() {
  return (
    <div className="Header">
      <h2 className='tolchok'>Купи толчёк!</h2>
     <br></br>
     <h3 className='sell'>Только в течении этой недели скидки на всё до -983235%</h3>
     <img src={dik} width="720" height="250"/>
     <br></br>
     <h1 className='Fedy'>Федя ПИДОР</h1>
    <img src={pic} width="300" height="250"/>
    <div className='left'>
     hj
    </div>
    <div className='right'>
     hj
    </div>
    <div className='up'>
     hj
    </div>
    </div>
  );
}
export default Header;
//Fedy big pidorass
