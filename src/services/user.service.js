import { storageService } from './storage.service'

export const userService = {
    getUser,
    signup,
    update,
    transferCoins
}

const KEY = 'user_DB'

function signup(name) {
    const loggedInUser = storageService.load(KEY)
    if (loggedInUser) return
    const user = {
        name,
        coins: 100,
        moves: [],
    }
    storageService.store(KEY, user)
    return user
}

function getUser() {
    const loggedInUser = storageService.load(KEY)
    if (loggedInUser) return loggedInUser
    return {
        name: 'Ochoa Hyde',
        coins: 100,
        moves: [],
    }
}

function createMove(contact, amount) {
    const newMove = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount,
    }
    return newMove
}

function transferCoins(amount, contact) {
    const loggedInUser = storageService.load(KEY)
    const newMove = createMove(contact, amount)
    loggedInUser.moves.unshift(newMove)
    loggedInUser.coins -= amount
    update(loggedInUser)
    return loggedInUser
}

function update(user) {
    storageService.store(KEY, user)
}
