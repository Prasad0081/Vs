import { useState } from 'react'
import './App.css'

function App() {
  const [showQuestion, setShowQuestion] = useState(false)
  const [answered, setAnswered] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 })
  const [noClickCount, setNoClickCount] = useState(0)

  const noMessages = [
    'No 😒',
    'Wait… are you sure?🤗',
    'Really?🤔',
    'Try again!😲',
    'You sure? 🥰',
    'Haha nice try!😊',
    'No escape! Nice try 😏',
    'You can\'t escape love💓',
    'Still no? Really? 😂',
    'You are testing my patience ☺️',
    'Nope, not happening 💕'
  ]

  const handleStart = () => {
    setShowQuestion(true)
  }

  const handleYes = () => {
    setAnswered(true)
  }

  const handleNoHover = () => {
    const randomTop = Math.random() * 80 + 10
    const randomLeft = Math.random() * 80 + 10
    setNoButtonPosition({ top: randomTop, left: randomLeft })
    setNoClickCount(prev => Math.min(prev + 1, noMessages.length - 1))
  }

  const createHeart = (e) => {
    const heart = document.createElement('div')
    heart.className = 'floating-heart'
    heart.innerHTML = '❤️'
    heart.style.left = e.clientX + 'px'
    heart.style.top = e.clientY + 'px'
    document.body.appendChild(heart)
    setTimeout(() => heart.remove(), 2000)
  }

  if (answered) {
    return (
      <div className="container celebration" onClick={createHeart}>
        <div className="celebration-content">
          <img src={`${import.meta.env.BASE_URL}cuddle-cats.gif`} alt="Cuddling Cats" className="cuddle-gif" />
          <h1 className="celebration-title">Yay! 🎉</h1>
          <p className="celebration-text">
            I'm so happy! You've made me the luckiest person in the world! 💖
          </p>
          <p className="celebration-subtext">
            Can't wait to celebrate this special day with you!🌹
          </p>
          <p className="celebration-hearts">
            💓💓💓
          </p>
          <div className="hearts-rain">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="heart-rain" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}>
                {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!showQuestion) {
    return (
      <div className="container intro">
        <div className="intro-content">
          <div className="heart-pulse">💝</div>
          <h1 className="intro-title">Hey Cutiepie! 💕</h1>
          <p className="intro-text">I have something special to ask you...</p>
          <button className="start-button" onClick={handleStart}>
            Click Here 💖
          </button>
        </div>
        <div className="background-hearts">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="bg-heart" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${20 + Math.random() * 30}px`
            }}>
              {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container question">
      <div className="question-content">
        <div className="heart-bounce">💖</div>
        <p className="name-title">💖Anushka💖</p>
        <h1 className="question-title">Will You Be My Valentine?</h1>
        <p className="question-subtitle"> Choose wisely.... 💕</p>
        <div className="buttons-container">
          <button 
            className="yes-button" 
            onClick={handleYes}
          >
            Yes! 💕
          </button>
          <button 
            className="no-button" 
            onClick={handleNoHover}
            style={{ 
              position: noButtonPosition.top ? 'fixed' : 'relative',
              top: noButtonPosition.top ? `${noButtonPosition.top}vh` : 'auto',
              left: noButtonPosition.left ? `${noButtonPosition.left}vw` : 'auto',
              transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: 100
            }}
          >
            {noMessages[noClickCount]}
          </button>
        </div>
        <p className="hint-text">Hint: The "No" button is shy 😉</p>
      </div>
      <div className="background-hearts">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bg-heart" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            fontSize: `${20 + Math.random() * 30}px`
          }}>
            {['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
