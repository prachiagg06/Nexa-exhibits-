// import "../styles/Home.css";

// function Home() {
//   return (
//     <div className="home">
//       <section className="hero">
//         <div className="hero-background"></div>
//         <div className="hero-content">
//           <div className="hero-text">
//             <h1 className="hero-title">
//               <span className="title-line">We Create</span>
//               <span className="title-highlight">Stunning Exhibitions</span>
//               <span className="title-line">& Events</span>
//             </h1>
//             <p className="hero-subtitle">
//               Delivering innovation, creativity, and unforgettable experiences that captivate and inspire.
//             </p>
//             <button className="cta-button">
//               <span className="button-text">Explore Our Work</span>
//               <div className="button-glow"></div>
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;



import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">We Create</span>
              <span className="title-highlight">Stunning Exhibitions</span>
              <span className="title-line">& Events</span>
            </h1>
            <p className="hero-subtitle">
              Delivering innovation, creativity, and unforgettable experiences that captivate and inspire.
            </p>
            <button className="cta-button" onClick={goToPortfolio}>
              <span className="button-text">Explore Our Work</span>
              <div className="button-glow"></div>
            </button>
          </div>
        </div>
        <div className="floating-elements">
          <div className="float-element float-1"></div>
          <div className="float-element float-2"></div>
          <div className="float-element float-3"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
