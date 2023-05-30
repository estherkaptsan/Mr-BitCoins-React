import React from 'react'

export default function MovesList({ title, moves }) {
  return (
    <>
      {console.log(moves)}
      <section className='moves-list'>
        <h2>{title}</h2>
        <hr />
        {moves.map((move, idx) => {
          return (
            <div key={idx} className='move'>
              <h3>To:  {move.to} </h3>
              <h3>At: {new Date(move.at).toLocaleString()}</h3>
              <h3>Amount:  {move.amount}$</h3>
              <hr/>
            </div>
          )
        })}
      </section>
    </>
  )
}