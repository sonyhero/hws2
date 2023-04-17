import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return (action.payload === 'up') ?
                state.map(el => ({...el})).sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                    else return 0
                })
                : state.map(el => ({...el})).sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                    else return 0
                }).reverse()
        }

        case 'check': {

            return state.filter(el => el.age > 18) // need to fix
        }
        default:
            return state
    }
}
