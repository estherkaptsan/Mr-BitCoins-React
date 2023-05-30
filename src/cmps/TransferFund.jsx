import React, { Component } from 'react'
import { useState } from 'react'

export default function TransferFund({ contact, maxCoins, onTransferCoins }) {
    const [amount, setAmount] = useState(0)

    function onSetAmount({ target }) {
        setAmount(target.value)
    }

    return (
        <div className='trunsfer-fund'>
            <h1>Trunsfer coins to {contact.name}:</h1>
            <div className='trunsfer-container'>
                <h4>Amount:</h4>
                <input onChange={onSetAmount} type="number" name="amount" id="amount" />
                <button type="submit" onClick={() => onTransferCoins(amount, contact)}>
                    Transfer
                </button>
            </div>
        </div>
    )
}