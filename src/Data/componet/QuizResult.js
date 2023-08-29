import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        Correct Answer:{props.score}<br/>
        Total Quiz:{props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult
