const initialState = {
    fname:'',
    lname:'',
    username:'',
    password:''
}

function addUser (state = initialState, action){
    switch(action.type){
        case "ADD_NEW_USER":
            return action.user
        case "CLEAR_REG_FORM":
            return {...initialState}
        default:
            return state
    }
}

export default addUser