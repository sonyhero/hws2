import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return (action.payload === 'up') ?
                [...state].sort((a, b) => {
                    return (a.name > b.name) ? -1 : 0
                }).reverse()
                : [...state].sort((a, b) => {
                    return (a.name > b.name) ? -1 : 0
                })
        }

        case 'check': {

            return state.filter(el => el.age > 18) // need to fix
        }
        default:
            return state
    }
}
