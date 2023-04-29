import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../componetes/Header";
import { Separator } from "../componetes/Separator";
import { Tweet } from "../componetes/Tweet";

import './Timeline.css';



export function Timeline() {
  const [newTweet, setNewTweet] = useState('')

  const [Tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "teste",
    "Deu certo!"
  ])
  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...Tweets])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent){
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([newTweet, ...Tweets])
      setNewTweet('')
    }
    
  }

  return (
    <main className="timeline">

      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/nathandiassoares.png" alt="Diego" />
          <textarea
            id="tweet"
            placeholder="What's happpening"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          />

        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {
        Tweets.map(Tweets => {
          return <Tweet key={Tweets} content={Tweets} />
        })
      }

    </main>
  );
}