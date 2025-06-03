import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { wildPromptData } from "./prompts.jsx";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [currentPrompts, setCurrentPrompts] = useState(wildPromptData);

  useEffect(() => {
    console.log(`Total Wild prompts: ${currentPrompts.length}`);
  }, [currentPrompts]);

  const currentPrompt = currentPrompts[currentIndex % currentPrompts.length] || { topic: "", prompts: [] };

  return (
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
          setCurrentIndex((currentIndex - 1 + currentPrompts.length) % currentPrompts.length);
          setResetTrigger(prev => prev + 1);
        }} className="px-4 py-2 text-white border border-white rounded-full">Back</button>
        <button onClick={() => {
          setCurrentIndex((currentIndex + 1) % currentPrompts.length);
          setResetTrigger(prev => prev + 1);
        }} className="px-4 py-2 text-white border border-white rounded-full">Next</button>
      </div>
      <Link to="/" className="px-4 py-2 text-pink-500 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-black">Back to Intro</Link>
      <div className="absolute top-6 right-6 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center text-lg font-bold">
        <Timer resetTrigger={resetTrigger} />
      </div>
    </div>
  );
}
