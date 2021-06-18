import data from '../../SaleData'

const initailState = {
    data
}


const SaleReducer = (state = initailState, {type,payload}) => {
    switch(type){
        case "DELETE":
            const deletItem = state.data.filter(data => data.id != payload)
            return{
                ...state,
                data: deletItem
            }
        default:
            return state;
    }
}

export default SaleReducer
