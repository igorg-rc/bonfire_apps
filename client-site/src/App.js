import './App.css';

import Navigation from './components/Navigation/Navigation';
import Technologies from './components/Technologies/Technologies';
import Industries from './components/Industries/Industries';
import ContactUs from './components/ContactUs/ContactUs';
import Styled from './components/Styled/Styled';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';

// import ScrollButton from './components/UIutils/ScrollButton/ScrollButton';
// import Whoweare from './components/Whoweare/Whoweare';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Styled />
      <Technologies />
      <Industries />
      <Map />
      <ContactUs />
      <Footer />
      {/* <ScrollButton /> */}
      {/* <Whoweare /> */}
      
      
    </div>
  );
}

export default App;
