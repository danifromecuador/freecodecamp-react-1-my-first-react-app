import './App.css';
import Testimonial from './components/Testimonial.js';
import shawn from './images/shawn.jpg'
import emma from './images/emma.png';
import sarah from './images/sarah.png';

function App() {
  const alumniData = {
    shawn: {
      image: shawn,
      name: "Shawn Wang",
      charge: "Software Engineer",
      company: "Amazon",
      quote: "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
    },
    sarah: {
      image: sarah,
      name: "Sarah Watson",
      charge: "Software Engineer",
      company: "ChatDesk",
      quote: "freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
    },
    emma: {
      image: emma,
      name: "Emma Bostian",
      charge: "Software Engineer",
      company: "Spotify",
      quote: "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
    }
  };
  return (
    <div className="App">
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
      <Testimonial alumniData={alumniData.shawn} />
      <Testimonial alumniData={alumniData.sarah} />
      <Testimonial alumniData={alumniData.emma} />
    </div>
  );
}

export default App;
