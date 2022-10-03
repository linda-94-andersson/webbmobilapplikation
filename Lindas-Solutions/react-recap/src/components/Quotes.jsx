import React, { useState, useMemo} from "react";

function Quotes() {
  const quotes = [
    "An organization that treats its programmers as morons will soon have programmers that are willing and able to act like morons only.",
    "Design and programming are human activities; forget that and all is lost.",
    "Before software can be reusable it first has to be usable.",
    "Premature optimization is the root of all evil in programming.",
    "You cannot teach beginners top-down programming, because they don't know which end is up.",
    "Optimism is an occupational hazard of programming: feedback is the treatment.",
    "Simple things should be simple, complex things should be possible.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
  ];
  const [quote] = useState([...quotes]);
  const [index, setIndex] = useState(0);
  const [votes, setVotes] = useState(Array(quote.length).fill(0));

  function handleNext() {
    const i = index + 1;
    setIndex(i >= quote.length ? 0 : i);
  }

  function handleVote() {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  }

  const topVote = useMemo(() => {
    const maxVote = Math.max(...votes);
    return votes.findIndex((value) => value === maxVote);
}, [votes]);

  return (
    <div>
      <span>{quote[index]}</span>
      <br />
      <span>{`This quotes votes: ${votes[index]} `}</span>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next</button>
      <br/>
      <span>{`Top vote: ${quote[topVote]}`}</span>
    </div>
  );
}

export default Quotes;
