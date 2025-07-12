import React, { useState, useEffect } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaMedium,
} from "react-icons/fa";

const Home = () => {
    const [text, setText] = useState("");
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(null);

    useEffect(() => {
        const synth = window.speechSynthesis;

        const loadVoices = () => {
            const availableVoices = synth.getVoices();
            setVoices(availableVoices);
            setSelectedVoice(availableVoices[0]);
        };

        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = loadVoices;
        }

        loadVoices();
    }, []);

    const speak = () => {
        if (text.trim() === "") return;
        const utterance = new SpeechSynthesisUtterance(text);
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

            {/* 🔗 Social Links Top Center */}
            <div className="flex justify-center items-center gap-6 p-4 text-white text-4xl">
                <a
                    href="https://github.com/FullStackDeveloperShubham"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/shubham-gaikwad-62499329a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://x.com/ItsDevShubham"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition"
                >
                    <FaTwitter />
                </a>
                <a
                    href="https://www.instagram.com/developer_shubham_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://medium.com/@s35919223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition"
                >
                    <FaMedium />
                </a>
            </div>

            {/* Developer Credit */}
            <div className="text-center text-black underline underline-offset-4 text-md pb-4">
                Developed by <span className="font-semibold">Shubham Gaikwad</span>
            </div>

            {/* 🌟 Centered Main Content */}
            <main className="flex-grow flex items-center justify-center px-6 py-4">
                <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
                    {/* GIF Side */}
                    <div className="md:w-1/2 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center p-4">
                        <img
                            src="https://media.giphy.com/media/3o7qE1YN7aBOFPRw8E/giphy.gif"
                            alt="Speaking"
                            className="rounded-lg shadow-lg w-72 h-72 object-cover"
                        />
                    </div>

                    {/* TTS Form Side */}
                    <div className="md:w-1/2 p-8 bg-white">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">🗣️ Text to Speech</h1>
                        <textarea
                            className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 resize-none"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Type something to speak..."
                        ></textarea>

                        <select
                            className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onChange={(e) => setSelectedVoice(voices[e.target.value])}
                        >
                            {voices.map((voice, index) => (
                                <option key={index} value={index}>
                                    {voice.name} ({voice.lang})
                                </option>
                            ))}
                        </select>

                        <button
                            onClick={speak}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                        >
                            Speak 🔊
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
