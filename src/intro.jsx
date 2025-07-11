import logo from './logo.png';



const Intro = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
      <img src={gamecoverImage} alt="Truth or Tease Intro" className="max-w-full h-auto max-h-[80vh] mb-6" />
      <h1 className="text-4xl font-bold text-pink-500 drop-shadow-md text-center">Truth or Tease</h1>
    </div>
    <img src={logo} alt="My Logo" />

  );
};

export default Intro;
