import EarlyAccess from "./components/EarlyAccess/EarlyAccess";
import Features from "./components/Features/Features";
import HeaderHome from "./components/Header/Header";
import StayProductive from "./components/StayProductive/StayProductive";
import Testimonials from "./components/Testimonials/Testimonials";

export default function HomePage() {

  return (
    <>
     <div className="fylo">
     <HeaderHome/>
    </div>
     
      <Features/>
      <StayProductive/>
      <Testimonials/>
      <EarlyAccess/>
      
    </>
  );
}
