import one from "../asset/one.jpg"
import two from "../asset/two.jpg"
import three from "../asset/three.jpg"
function Content(){
    return(
      <div className="products">
      <div className="box">
        <img src={one} alt="first" width={200} height={250}></img>
          <p>Lorem, ipsum dolor sit amet consectetur</p>
      </div>
  
      <div className="box">
          <img src={two}  alt="second" width={200} height={250}></img>
          <p>Lorem ipsum dolor sit amet consectetur </p>
      </div> 
      <div className="box">
          <img src={three}  alt="third" width={200} height={250}></img>
          <p>Lorem, ipsum dolor sit amet consectetur </p>
      </div>
          
  </div>
  
    )
  
  }
export default Content