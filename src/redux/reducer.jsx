import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET} from "./action"


const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function Reducer (state = initialState, action){

    switch(action.type){

        case ADD_FAV:

        return{
            ...state, 
            myFavorites: [...state.allCharacters, action.payload],
            allCharacters: [...state.allCharacters, action.payload]
        }

        case REMOVE_FAV:

        const newsFiltro = state.myFavorites.filter(p => p.id !== action.payload)

        return{
            
           ...state,
           myFavorites: newsFiltro,
           allCharacters: newsFiltro

        }

        case FILTER:

        const newsCopia = state.allCharacters.filter(p => p.gender === action.payload)

        return{

            ...state, myFavorites: newsCopia
        }

        case RESET:

        return{

            ...state, myFavorites: state.allCharacters
        }


        case ORDER:

        const newsOrder = state.allCharacters.sort((a,b) => {

            if(a.id > b.id){

                return 'Ascendente' === action.payload ? 1 : -1

            }

            if(a.id < b.id){

                return 'Descendente' === action.payload ? 1 : -1

            }

            return 0
        });

        return{

            ...state, myFavorites: newsOrder
             
        }

        default:

            return state
    }

}




