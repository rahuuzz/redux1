
const addUser = user => {
    return{
        type: "ADD_NEW_USER",
        user:user
    }
}

const clearUser = () => {
    return {
        type: "CLEAR_REG_FORM",
        
        
    }
}
export const userActions ={
    addUser,
    clearUser

}