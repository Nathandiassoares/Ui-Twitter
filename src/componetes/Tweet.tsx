import './Tweet.css';
import { ChatCircle, ArrowClockwise, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';

interface TweetsProps {
  content: string
}

export function Tweet(props: TweetsProps) {
  return (
    <Link to="/Status" className="tweet">
      <img src="https://github.com/nathandiassoares.png" alt="Diego" />

      <div className="tweet-content">

        <div className="tweet-content-header">
          <strong>Nathan</strong>
          <span>@Nathandias</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>

        </div>
      </div>
    </Link >
  )
}