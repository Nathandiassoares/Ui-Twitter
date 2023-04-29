import { Function, PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../componetes/Header";
import { Separator } from "../componetes/Separator";
import { Tweet } from "../componetes/Tweet";

import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')

  const [answer, setAnswer] = useState([
    'Depende...',
    'Olha faz sentido.',
    'Preciso estudar isso.'
  ])
  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswer([newAnswer, ...answer])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswer([newAnswer, ...answer])
      setNewAnswer('')
    }

  }

  return (
    <main className="Status">
      <Header title="Tweet" />

  <Tweet content={`"Quando você aprende Tailwind, você não aprende CSS e sim aprende o Tailwind"`} /> 

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/nathandiassoares.png" alt="Nathan" />
          <textarea id="tweet"
            placeholder="Tweet tour answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {
        answer.map(answer => {
          return <Tweet key={answer} content={answer} />
        })
      }

    </main>
  );
}