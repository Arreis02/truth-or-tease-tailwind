import { Link } from 'react-router-dom';
import introImage from '../assets/intro.png'; // Adjust if PNG name differs

const Intro = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8">
      <img src={introImage} alt="Truth or Tease Intro" className="max-w-full h-auto mb-6 max-h-80" />
      <h1 className="text-4xl font-bold text-pink-500 drop-shadow-md mb-4">Truth or Tease</h1>
      <p className="text-lg italic text-gray-300 mb-6 text-center max-w-2xl">
        Dive into a naughty night of wild secrets and seduction with your partner!
      </p>
      <div className="space-y-3">
        <Link to="/game" className="w-48 bg-black text-pink-500 font-bold border border-pink-500 shadow-md inline-block text-center py-2 rounded-full hover:bg-pink-500 hover:text-black">
          Play Now
        </Link>
        <Link to="/rules" className="w-48 bg-black text-pink-500 font-bold border border-pink-500 shadow-md inline-block text-center py-2 rounded-full hover:bg-pink-500 hover:text-black">
          Rules
        </Link>
      </div>
    </div>
  );
};

export default Intro;
