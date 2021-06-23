import firebase from '../firebase'

export const getTodo = (docID) => {
    return async (dispatch, getState) => {
        await firebase
        .firestore()
        .collection("spaceboy")
        .onSnapshot(snapshot => {
            snapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                if(doc.id === docID) {
                    dispatch({
                        type: 'GET_TODO',
                        payload : doc.data()
                    })
                }
            })
        })
    }
}

export const getTodos = () => {
    return async (dispatch, getState) => {
        await firebase
        .firestore()
        .collection("spaceboy")
        .onSnapshot(snapshot => {
            const todos = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            dispatch({
                type: 'GET_TODOS',
                payload : todos
            })
        })
    }
}

export const addTodo = (document) => {
    return dispatch => {
        firebase
        .firestore()
        .collection("spaceboy")
        .add(document)
        .then(ref => {
        console.log("Added document with ID: ", ref)
        })
        dispatch(getTodos())
    }
}

export const deleteTodo = (id) => {
    return dispatch => {
        firebase
        .firestore()
        .collection("spaceboy")
        .doc(id)
        .delete()
        dispatch(getTodos())
    }
}

export const updateTodo = (id, data) => {
    return dispatch => {
        firebase
        .firestore()
        .collection("spaceboy")
        .doc(id)
        .update(data)
        dispatch(getTodos())
    }
}