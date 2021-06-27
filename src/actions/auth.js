import firebase from '../firebase'

export const register = (data) => {
    return async (dispatch, getState) => {
        try {
            if (firebase) {
                const userinfo = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(data.email, data.password);

                const user = {
                    email : userinfo.user.email,
                    token : userinfo.user.uid,
                    refreshToken : userinfo.user.refreshToken
                }

                dispatch({
                    type: 'GET_USER',
                    payload : user
                })

                localStorage.setItem("token", user.token)

                const store = getState()
                console.log("store:", store)
            }
        } catch (error) {
            console.log("error", error);
            alert(error.message);
        }
    }
}

export const login = (data) => {
    return async (dispatch, getState) => {
        try {
            if (firebase) {
                const userinfo = await firebase
                    .auth()
                    .signInWithEmailAndPassword(data.email, data.password);

                const user = {
                    email : userinfo.user.email,
                    token : userinfo.user.uid,
                    refreshToken : userinfo.user.refreshToken
                }

                dispatch({
                    type: 'GET_USER',
                    payload : user
                })
                
                localStorage.setItem("token", user.token)

                const store = getState()
                console.log("store:", store)
            }
        } catch (error) {
            console.log("error", error);
            alert(error.message);
        }
    }
}

export const logout = () => {
    return dispatch => {
        // ** Remove token from localStorage
        localStorage.removeItem('token')
    }
}