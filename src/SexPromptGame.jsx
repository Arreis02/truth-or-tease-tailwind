import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const promptData = [
  {
    topic: "The sexiest thing I…",
    prompts: ["Did", "Wore", "Saw", "Experienced"],
    mode: "wild"
  },
  {
    topic: "My first passionate kiss was…",
    prompts: ["Awkward", "Tonsil hockey", "Steamy", "Place"],
    mode: "wild"
  },
  {
    topic: "When I lost my virginity…",
    prompts: ["Screamed", "Age", "Enjoyed", "Regret"],
    mode: "wild"
  },
  {
    topic: "I think I've kissed…",
    prompts: ["Amount of people", "A friend's partner", "Same sex", "Stranger"],
    mode: "wild"
  },
  {
    topic: "I've masturbated over…",
    prompts: ["A friend", "A boss", "Old fling", "Fantasy"],
    mode: "wild"
  },
  {
    topic: "I was so embarrassed when…",
    prompts: ["Premature", "Too small", "Fell asleep", "Weird noise"],
    mode: "wild"
  },
  {
    topic: "An inappropriate crush…",
    prompts: ["You slept with", "Rejected", "Found irresistible", "Forbidden"],
    mode: "wild"
  },
  {
    topic: "I gave/received a handjob…",
    prompts: ["Strangest place", "While driving", "Random person", "Teenage years"],
    mode: "wild"
  },
  {
    topic: "This one time in a cinema…",
    prompts: ["Fingered", "Popcorn trick", "Made out", "Caught"],
    mode: "wild"
  },
  {
    topic: "The shower…",
    prompts: ["Exciting", "Best experience", "Slippery mishap", "Golden moment"],
    mode: "wild"
  },
  {
    topic: "Flashing in public…",
    prompts: ["How many times", "Where", "Who saw", "Funniest reaction"],
    mode: "wild"
  },
  {
    topic: "A threesome…",
    prompts: ["Experienced", "Fantasized", "Want to try", "MMF or FFM"],
    mode: "wild"
  },
  {
    topic: "An orgasm I…",
    prompts: ["Screamed", "Can't forget", "Squirted", "Massive load"],
    mode: "wild"
  },
  {
    topic: "A porno I…",
    prompts: ["Created", "Watched with someone", "Copied", "Favourite category"],
    mode: "wild"
  },
  {
    topic: "The worst sex was…",
    prompts: ["Boring", "Too rough", "No chemistry", "Never came"],
    mode: "wild"
  },
  {
    topic: "There was one friend I…",
    prompts: ["Had a close call", "Fell for", "Slept with once", "Still think about"],
    mode: "wild"
  },
  {
    topic: "I didn’t tell you about…",
    prompts: ["A sexual experience", "A fantasy", "A kink", "Someone I met"],
    mode: "wild"
  },
  {
    topic: "This one time in bed…",
    prompts: ["Funny", "Scary", "Awkward", "Weird"],
    mode: "wild"
  },
  {
    topic: "The dirtiest thing in bed was…",
    prompts: ["A request", "A phrase", "A position", "A toy"],
    mode: "wild"
  },
  {
    topic: "I got so turned on when…",
    prompts: ["They said something", "An old memory", "The position", "Porn fantasy came true"],
    mode: "wild"
  },
  {
    topic: "Same-sex experience…",
    prompts: ["Most adventurous", "Fantasized", "Tried once", "Want to try"],
    mode: "wild"
  },
  {
    topic: "The first blowjob I…",
    prompts: ["Gave", "Received", "Expected", "Felt"],
    mode: "wild"
  },
  {
    topic: "Sexting…",
    prompts: ["Made me cum", "To how many?", "Turned on the most", "Regretted"],
    mode: "wild"
  },
  {
    topic: "I’ve tried imitating…",
    prompts: ["A porn", "A book", "A memory", "A partner"],
    mode: "wild"
  },
  {
    topic: "In a car I…",
    prompts: ["Wildest position", "Oral happened", "Strangest time", "More than once"],
    mode: "wild"
  },
  {
    topic: "A story about tits…",
    prompts: ["Pearl necklace", "Biggest turn on", "Strangest place", "Felt jealous"],
    mode: "wild"
  },
  {
    topic: "The wildest position…",
    prompts: ["Tried", "Requested", "Made up", "Regretted"],
    mode: "wild"
  },
  {
    topic: "Rough sex…",
    prompts: ["Memorable", "Turn on", "Slap or choke", "Caught me off guard"],
    mode: "wild"
  },
  {
    topic: "No one has ever known…",
    prompts: ["One night stand", "A fantasy", "A fetish", "A kink"],
    mode: "wild"
  },
  {
    topic: "Used a household item to…",
    prompts: ["Masturbate", "During sex", "Satisfy someone", "Feel curious"],
    mode: "wild"
  },
  {
    topic: "The morning after pill…",
    prompts: ["How many times", "Specific event", "Scared me", "Not used when should have"],
    mode: "wild"
  },
  {
    topic: "Up the ass…",
    prompts: ["Enjoyed", "Finger only", "Toy", "How many times"],
    mode: "wild"
  },
  {
    topic: "I secretly like…",
    prompts: ["Fetish", "Person", "Position", "Toy"],
    mode: "wild"
  },
  {
    topic: "A kink that I…",
    prompts: ["Participated in", "Want to try", "Loved", "Was surprised by"],
    mode: "wild"
  },
  {
    topic: "I was caught…",
    prompts: ["By parents", "Having sex", "Masturbating", "In public"],
    mode: "wild"
  },
  {
    topic: "Age is just a number…",
    prompts: ["Youngest", "Oldest", "Regret", "Made nervous"],
    mode: "wild"
  },
  {
    topic: "I was dared to…",
    prompts: ["Flash", "Touch someone", "Kiss someone", "Get naked"],
    mode: "wild"
  },
  {
    topic: "A perfect stranger…",
    prompts: ["Had sex with", "Was attracted to", "Gave head", "Met online"],
    mode: "wild"
  },
  {
    topic: "The most terrible…",
    prompts: ["Sex", "Position", "Partner", "Oral experience"],
    mode: "wild"
  },
  {
    topic: "The first person to ever…",
    prompts: ["Give me oral", "Make me squirt", "Use toys", "Try anal"],
    mode: "wild"
  },
  {
    topic: "I told a lie…",
    prompts: ["In bed", "About an orgasm", "To a lover", "To protect someone"],
    mode: "wild"
  },
  {
    topic: "Flashing in public…",
    prompts: ["How many times", "Where", "Who saw", "Funniest reaction"],
    mode: "wild"
  },
  {
    topic: "A threesome…",
    prompts: ["Experienced", "Fantasized", "Want to try", "MMF or FFM"],
    mode: "wild"
  },
  {
    topic: "An orgasm I…",
    prompts: ["Screamed", "Can't forget", "Squirted", "Massive load"],
    mode: "wild"
  },
  {
    topic: "A porno I…",
    prompts: ["Created", "Watched with someone", "Copied", "Favourite category"],
    mode: "wild"
  },
  {
    topic: "The worst sex was…",
    prompts: ["Boring", "Too rough", "No chemistry", "Never came"],
    mode: "wild"
  },
  {
    topic: "There was one friend I…",
    prompts: ["Had a close call", "Fell for", "Slept with once", "Still think about"],
    mode: "wild"
  },
  {
    topic: "I didn’t tell you about…",
    prompts: ["A sexual experience", "A fantasy", "A kink", "Someone I met"],
    mode: "wild"
  },
  {
    topic: "This one time in bed…",
    prompts: ["Funny", "Scary", "Awkward", "Weird"],
    mode: "wild"
  },
  {
    topic: "The dirtiest thing in bed was…",
    prompts: ["A request", "A phrase", "A position", "A toy"],
    mode: "wild"
  },
  {
    topic: "I got so turned on when…",
    prompts: ["They said something", "An old memory", "The position", "Porn fantasy came true"],
    mode: "wild"
  },
  {
    topic: "Same-sex experience…",
    prompts: ["Most adventurous", "Fantasized", "Tried once", "Want to try"],
    mode: "wild"
  },
  {
    topic: "The first blowjob I…",
    prompts: ["Gave", "Received", "Expected", "Felt"],
    mode: "wild"
  },
  {
    topic: "Sexting…",
    prompts: ["Made me cum", "To how many?", "Turned on the most", "Regretted"],
    mode: "wild"
  },
  {
    topic: "I’ve tried imitating…",
    prompts: ["A porn", "A book", "A memory", "A partner"],
    mode: "wild"
  },
  {
    topic: "In a car I…",
    prompts: ["Wildest position", "Oral happened", "Strangest time", "More than once"],
    mode: "wild"
  },
  {
    topic: "A story about tits…",
    prompts: ["Pearl necklace", "Biggest turn on", "Strangest place", "Felt jealous"],
    mode: "wild"
  },
  {
    topic: "The wildest position…",
    prompts: ["Tried", "Requested", "Made up", "Regretted"],
    mode: "wild"
  },
  {
    topic: "Rough sex…",
    prompts: ["Memorable", "Turn on", "Slap or choke", "Caught me off guard"],
    mode: "wild"
  },
  {
    topic: "No one has ever known…",
    prompts: ["One night stand", "A fantasy", "A fetish", "A kink"],
    mode: "wild"
  },
  {
    topic: "Used a household item to…",
    prompts: ["Masturbate", "During sex", "Satisfy someone", "Feel curious"],
    mode: "wild"
  },
  {
    topic: "The morning after pill…",
    prompts: ["How many times", "Specific event", "Scared me", "Not used when should have"],
    mode: "wild"
  },
  {
    topic: "Up the ass…",
    prompts: ["Enjoyed", "Finger only", "Toy", "How many times"],
    mode: "wild"
  },
  {
    topic: "I secretly like…",
    prompts: ["Fetish", "Person", "Position", "Toy"],
    mode: "wild"
  },
  {
    topic: "A kink that I…",
    prompts: ["Participated in", "Want to try", "Loved", "Was surprised by"],
    mode: "wild"
  },
  {
    topic: "I was caught…",
    prompts: ["By parents", "Having sex", "Masturbating", "In public"],
    mode: "wild"
  },
  {
    topic: "Age is just a number…",
    prompts: ["Youngest", "Oldest", "Regret", "Made nervous"],
    mode: "wild"
  },
  {
    topic: "I was dared to…",
    prompts: ["Flash", "Touch someone", "Kiss someone", "Get naked"],
    mode: "wild"
  },
  {
    topic: "A perfect stranger…",
    prompts: ["Had sex with", "Was attracted to", "Gave head", "Met online"],
    mode: "wild"
  },
  {
    topic: "The most terrible…",
    prompts: ["Sex", "Position", "Partner", "Oral experience"],
    mode: "wild"
  },
  {
    topic: "The first person to ever…",
    prompts: ["Give me oral", "Make me squirt", "Use toys", "Try anal"],
    mode: "wild"
  },
  {
    topic: "I told a lie…",
    prompts: ["In bed", "About an orgasm", "To a lover", "To protect someone"],
    mode: "wild"
  },
  {
    topic: "Flashing in public…",
    prompts: ["How many times", "Where", "Who saw", "Funniest reaction"],
    mode: "wild"
  },
  {
    topic: "A threesome…",
    prompts: ["Experienced", "Fantasized", "Want to try", "MMF or FFM"],
    mode: "wild"
  },
  {
    topic: "An orgasm I…",
    prompts: ["Screamed", "Can't forget", "Squirted", "Massive load"],
    mode: "wild"
  },
  {
    topic: "A porno I…",
    prompts: ["Created", "Watched with someone", "Copied", "Favourite category"],
    mode: "wild"
  },
  {
    topic: "The worst sex was…",
    prompts: ["Boring", "Too rough", "No chemistry", "Never came"],
    mode: "wild"
  },
  {
    topic: "There was one friend I…",
    prompts: ["Had a close call", "Fell for", "Slept with once", "Still think about"],
    mode: "wild"
  },
  {
    topic: "I didn’t tell you about…",
    prompts: ["A sexual experience", "A fantasy", "A kink", "Someone I met"],
    mode: "wild"
  },
  {
    topic: "This one time in bed…",
    prompts: ["Funny", "Scary", "Awkward", "Weird"],
    mode: "wild"
  },
  {
    topic: "The dirtiest thing in bed was…",
    prompts: ["A request", "A phrase", "A position", "A toy"],
    mode: "wild"
  },
  {
    topic: "I got so turned on when…",
    prompts: ["They said something", "An old memory", "The position", "Porn fantasy came true"],
    mode: "wild"
  },
  {
    topic: "Same-sex experience…",
    prompts: ["Most adventurous", "Fantasized", "Tried once", "Want to try"],
    mode: "wild"
  },
  {
    topic: "The first blowjob I…",
    prompts: ["Gave", "Received", "Expected", "Felt"],
    mode: "wild"
  },
  {
    topic: "Sexting…",
    prompts: ["Made me cum", "To how many?", "Turned on the most", "Regretted"],
    mode: "wild"
  },
  {
    topic: "I’ve tried imitating…",
    prompts: ["A porn", "A book", "A memory", "A partner"],
    mode: "wild"
  },
  {
    topic: "In a car I…",
    prompts: ["Wildest position", "Oral happened", "Strangest time", "More than once"],
    mode: "wild"
  },
  {
    topic: "A story about tits…",
    prompts: ["Pearl necklace", "Biggest turn on", "Strangest place", "Felt jealous"],
    mode: "wild"
  },
  {
    topic: "The wildest position…",
    prompts: ["Tried", "Requested", "Made up", "Regretted"],
    mode: "wild"
  },
  {
    topic: "Rough sex…",
    prompts: ["Memorable", "Turn on", "Slap or choke", "Caught me off guard"],
    mode: "wild"
  },
  {
    topic: "No one has ever known…",
    prompts: ["One night stand", "A fantasy", "A fetish", "A kink"],
    mode: "wild"
  },
  {
    topic: "Used a household item to…",
    prompts: ["Masturbate", "During sex", "Satisfy someone", "Feel curious"],
    mode: "wild"
  },
  {
    topic: "The morning after pill…",
    prompts: ["How many times", "Specific event", "Scared me", "Not used when should have"],
    mode: "wild"
  },
  {
    topic: "Up the ass…",
    prompts: ["Enjoyed", "Finger only", "Toy", "How many times"],
    mode: "wild"
  },
  {
    topic: "I secretly like…",
    prompts: ["Fetish", "Person", "Position", "Toy"],
    mode: "wild"
  },
  {
    topic: "A kink that I…",
    prompts: ["Participated in", "Want to try", "Loved", "Was surprised by"],
    mode: "wild"
  },
  {
    topic: "I was caught…",
    prompts: ["By parents", "Having sex", "Masturbating", "In public"],
    mode: "wild"
  },
  {
    topic: "Age is just a number…",
    prompts: ["Youngest", "Oldest", "Regret", "Made nervous"],
    mode: "wild"
  },
  {
    topic: "I was dared to…",
    prompts: ["Flash", "Touch someone", "Kiss someone", "Get naked"],
    mode: "wild"
  },
  {
    topic: "A perfect stranger…",
    prompts: ["Had sex with", "Was attracted to", "Gave head", "Met online"],
    mode: "wild"
  }
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
