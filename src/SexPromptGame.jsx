import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const promptData = [
  { topic: "The sexiest thing I…", prompts: ["Did", "Wore", "Saw", "Experienced"], mode: "playful" },
  { topic: "My first passionate kiss was…", prompts: ["Awkward", "Tonsil hockey", "Steamy", "Place"], mode: "playful" },
  { topic: "When I lost my virginity…", prompts: ["Screamed", "Age", "Enjoyed", "Regret"], mode: "playful" },
  { topic: "I think I've kissed…", prompts: ["Amount of people", "A friend's partner", "Same sex", "Stranger"], mode: "playful" },
  { topic: "I've masturbated over…", prompts: ["A friend", "A boss", "Old fling", "Fantasy"], mode: "wild" },
  { topic: "I was so embarrassed when…", prompts: ["Premature", "Too small", "Fell asleep", "Weird noise"], mode: "playful" },
  { topic: "An inappropriate crush…", prompts: ["You slept with", "Rejected", "Found irresistible", "Forbidden"], mode: "wild" },
  { topic: "I gave/received a handjob…", prompts: ["Strangest place", "While driving", "Random person", "Teenage years"], mode: "wild" },
  { topic: "This one time in a cinema…", prompts: ["Fingered", "Popcorn trick", "Made out", "Caught"], mode: "wild" },
  { topic: "The shower…", prompts: ["Exciting", "Best experience", "Slippery mishap", "Golden moment"], mode: "playful" },
  { topic: "The dirtiest dream I had…", prompts: ["With a friend", "With a stranger", "Multiple people", "While asleep next to partner"], mode: "wild" },
  { topic: "In the pool I…", prompts: ["Had sex", "Gave oral", "Touched myself", "Got caught"], mode: "wild" },
  { topic: "Dirty talk I…", prompts: ["Said", "Heard", "Loved", "Regretted"], mode: "wild" },
  { topic: "Naughtiest pic I sent…", prompts: ["Fully nude", "With a toy", "Anonymous", "Caught attention"], mode: "wild" },
  { topic: "Strangest porn I've watched…", prompts: ["Object fetish", "Old couple", "Public place", "Too rough"], mode: "wild" },
  { topic: "Something I faked…", prompts: ["An orgasm", "Enjoyment", "Being a virgin", "Being drunk"], mode: "wild" },
  { topic: "Caught cheating or cheating with…", prompts: ["Partner's friend", "Ex", "Colleague", "Random person"], mode: "wild" },
  { topic: "Sex at work…", prompts: ["In the bathroom", "With a boss", "During break", "Almost got fired"], mode: "wild" },
  { topic: "A sex toy I…", prompts: ["Loved", "Hated", "Used on someone", "Got as a gift"], mode: "wild" },
  { topic: "A position I regret trying…", prompts: ["Too painful", "Too public", "Too weird", "Too revealing"], mode: "wild" },
  { topic: "An orgasm I…", prompts: ["Screamed", "Can't forget", "Squirted", "Massive load"], mode: "wild" },
  { topic: "A porno I…", prompts: ["Created", "Watched with someone", "Copied", "Favourite category"], mode: "wild" },
  { topic: "The worst sex was…", prompts: ["Boring", "Too rough", "No chemistry", "Never came"], mode: "playful" },
  { topic: "There was one friend I…", prompts: ["Had a close call", "Fell for", "Slept with once", "Still think about"], mode: "wild" },
  { topic: "I didn’t tell you about…", prompts: ["A sexual experience", "A fantasy", "A kink", "Someone I met"], mode: "wild" },
  { topic: "This one time in bed…", prompts: ["Funny", "Scary", "Awkward", "Weird"], mode: "playful" },
  { topic: "The dirtiest thing in bed was…", prompts: ["A request", "A phrase", "A position", "A toy"], mode: "wild" },
  { topic: "I got so turned on when…", prompts: ["They said something", "An old memory", "The position", "Porn fantasy came true"], mode: "wild" },
  { topic: "Same-sex experience…", prompts: ["Most adventurous", "Fantasized", "Tried once", "Want to try"], mode: "wild" },
  { topic: "The first blowjob I…", prompts: ["Gave", "Received", "Expected", "Felt"], mode: "playful" },
];

function Timer({ resetTrigger }) {
  const [secondsLeft, setSecondsLeft] = useState(120);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setSecondsLeft(120);
    setFlash(false);
    document.body.classList.remove("flash-screen");
  }, [resetTrigger]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev > 0 ? prev - 1 : 0;
        if (next === 0) {
          setFlash(true);
          document.body.classList.add("flash-screen");
          setTimeout(() => document.body.classList.remove("flash-screen"), 500);
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <span className={`transition-all duration-300 ${flash ? 'bg-white text-black rounded-full px-2' : ''}`}>
      {minutes}:{seconds.toString().padStart(2, '0')}
    </span>
  );
}

export default function SexPromptGame() {
  const [screen, setScreen] = useState("menu");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const currentPrompt = promptData[currentIndex % promptData.length];

  return (
    screen === "menu" ? (
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white bg-black">
        <div className="z-10 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-pink-500 drop-shadow-md mb-2">Truth or Tease</h1>
          <p className="italic text-white text-lg mb-4">A Game of Seduction, Subversion, and Secrets</p>
          <div className="space-y-3">
            <button className="w-48 bg-black text-pink-500 font-bold border border-pink-500 shadow-md" onClick={() => setScreen('game')}>Playful</button>
            <button className="w-48 bg-black text-pink-500 font-bold border border-pink-500 shadow-md" onClick={() => setScreen('game')}>Wild</button>
            <button className="w-48 bg-black text-pink-500 font-bold border border-pink-500 shadow-md" onClick={() => setScreen('game')}>Mixed</button>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 text-center relative">
        <h2 className="text-3xl font-bold text-pink-400 mb-4 animate-pulse">{currentPrompt.topic}</h2>
        <motion.div className="space-y-2 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {currentPrompt.prompts.map((p, i) => (
            <div key={i} className="text-lg font-semibold">{p}</div>
          ))}
        </motion.div>
        <div className="flex space-x-6 mb-6">
          <button className="text-lg font-bold px-6 py-3 bg-black text-white border-white border rounded-full hover:bg-white hover:text-black">Truth</button>
          <button className="text-lg font-bold px-6 py-3 bg-black text-white border-white border rounded-full hover:bg-white hover:text-black">Lie</button>
        </div>
        <div className="flex space-x-4 mb-8">
          <button onClick={() => {
            setCurrentIndex((currentIndex - 1 + promptData.length) % promptData.length);
            setResetKey(prev => prev + 1);
          }} className="px-4 py-2 text-white border border-white rounded-full">Back</button>
          <button onClick={() => {
            setCurrentIndex((currentIndex + 1) % promptData.length);
            setResetKey(prev => prev + 1);
          }} className="px-4 py-2 text-white border border-white rounded-full">Next</button>
        </div>
        <div className="absolute top-6 right-6 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center text-lg font-bold">
          <Timer resetTrigger={resetKey} />
        </div>
      </div>
    )
  );
}
