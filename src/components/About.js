import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"


const About = () => {
  const [show, setShow] = useState(true)
  const location = useLocation()
  useEffect(() => {
    if (location.pathname === "/") {
      setShow(false)
    }
  }, [location.pathname])
  //console.log(show, location)
  return <>


  <div className="text-secondary my-3">
    <div className="row"> 
      <div className="container"> 
        
      </div>
    </div>
  </div>

    {show && <div className="container">
      <div className="text-center ">
        <img src="profile.jpg" className="rounded-circle" style={{ width: "50vh" }} alt="Profile" />
        <h3 className="text-center my-5 fs-1">About Myself</h3>
        <p className="fs-4">What do you remember Elon Musk for? Is it his baby’s wacky name? (Let’s be honest,
           “X Æ A-12 Musk” is too out there, even for a celebrity!)
            Or maybe you know him primarily for his contributions to technology. But if you’re not familiar with him at all, 
          let’s go over a quick recap</p>
        
        <p className="fs-4"> Elon Musk is a South African-born American entrepreneur and businessman.
           He is primarily known for his success and innovations in the fields of business and technology.
        </p>

          <p className="fs-4">Along with Peter Thiel, he co-founded X.com in 1999 (which later became PayPal), SpaceX in 2002 and Tesla Motors in 2003. Musk became a multimillionaire in his late 20s when he sold his start-up company, Zip2, to a division of Compaq Computers. And over the course of this summary,
             we’ll learn more about what makes Elon Musk so special.</p>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
      </div>
    </div>}
  </>
}
export default About