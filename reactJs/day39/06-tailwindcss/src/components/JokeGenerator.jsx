import React, { useState, useEffect, useCallback } from "react";

const JokeGenerator = () => {
  const [joke, setJoke] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchJoke = useCallback(() => {
    setIsLoading(true);
    setError(false);

    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        setJoke({ setup: data.setup, punchline: data.punchline });
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">
            Joke Generator
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Fresh jokes, one tap away
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 min-h-[140px] flex items-center justify-center">
          {isLoading && (
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-bounce" />
            </div>
          )}

          {!isLoading && error && (
            <p className="text-sm text-rose-500 text-center">
              Couldn't fetch a joke. Try again.
            </p>
          )}

          {!isLoading && !error && joke && (
            <div className="text-center">
              <p className="text-slate-800 font-medium leading-relaxed">
                {joke.setup}
              </p>
              <p className="text-teal-600 font-medium mt-2 leading-relaxed">
                {joke.punchline}
              </p>
            </div>
          )}
        </div>

        <button
          onClick={fetchJoke}
          disabled={isLoading}
          className="mt-6 w-full bg-teal-600 hover:bg-teal-700 active:bg-teal-800 disabled:bg-teal-300
           text-white font-medium py-3 rounded-xl transition-colors duration-150"
        >
          {isLoading ? "Fetching..." : "Get new joke"}
        </button>
      </div>
    </div>
  );
};

export default JokeGenerator;
