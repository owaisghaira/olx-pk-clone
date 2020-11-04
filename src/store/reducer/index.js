const INTITIAL_STATE = {
    pagedata: [],
    adDetail: [],
    adData: [],
    current_user: []
}


export default (state = INTITIAL_STATE, action) => {
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                pagedata: [action.data]
            })
        case "ADDATA":
            return ({
                ...state,
                adData: action.payload
            })
        case "ADDETAIL":
            return ({
                ...state,
                adDetail: action.payload
            })
        case "USERADD":
            return ({
                ...state,
                current_user: action.payload
            })
        default:
    }
    return state;
}