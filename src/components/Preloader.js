import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/arabicStyle.css';
import preloader from '../assets/leaf.webp';

const Preloader = () => (
  <div className="preloader">
    <div className="spinner">
      <img rel="preload" as="image" src={preloader} alt="logo" />
    </div>
  </div>
);

export default Preloader;