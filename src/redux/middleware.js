import { CREATE_POST } from "./types"
import { showAlert } from "./actions"

const forbidden = ['php']

export const forbiddenWordsMiddleware = ({dispatch}) =>{
    return (next) => (action)=>{
        if(action.type === CREATE_POST){
            const found = forbidden.filter(w => action.payload.title.includes(w))
            if(found.length){
                return dispatch(showAlert('bad words!'))
            }
        }
        return next(action)
    }
}