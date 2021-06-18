export const increment = () => {
    return{
        type: "INCREMENT"
    }
}

export const removeAll = () => {
    return{
        type: 'REMOVEALL'
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}

export const MinFilter = (min) => {
    return {
        type: 'MINFILTER',
        payload: min
    }
}

export const MaxFilter = (min) => {
    return {
        type: 'MAXFILTER',
        payload: min
    }
}