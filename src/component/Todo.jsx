import React, { useReducer, useState } from 'react'


const reducerFunc = (state, action) => {
    switch (action.type) {
        case "setTodo":
            return { ...state, todo: action.payload }
        case "setList":
            return { ...state, list: [...state.list, action.payload] , isEdit : false}
        case "deleteList":
            return { ...state, list: state.list.filter(li => li !== action.payload) }
        case "editList":
            const editIndex = state.list.indexOf(action.payload)
            state.isEdit = true
            if (state.isEdit === true) {
                state.list[editIndex] =state.todo
                // state.list[editIndex] = state.todo
                return { ...state }
            }
    }
}

const Todo = () => {

    // const [todo,setTodo] = useState('')
    // const [list,setList ] = useState([])

    const changeHandler = (e) => {
        // setTodo(e.target.value)
        dispatch({ type: 'setTodo', payload: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({ type: 'setList', payload: state.todo })
        // console.log(state.list);
    }

    const deleteHandler = (delEle) => {
        console.log(delEle);
        dispatch({ type: 'deleteList', payload: delEle })
    }

    const editHandler = () => {
        console.log(state.todo , state.isEdit);
        dispatch({ type: 'editList', payload: state.todo })
    }

    const [state, dispatch] = useReducer(reducerFunc, { todo: "", list: [], isEdit: false })

    return (
        <div>
            <input type="text" value={state.todo} onChange={(e) => { changeHandler(e) }} />
            <button type='submit' onClick={(e) => { submitHandler(e) }}> submit </button>

            {
                state.list && state.list.length > 0 ? (
                    state.list.map(li => (
                        <div key={Math.random()}>
                            <p>{li}</p>
                            <button onClick={() => { editHandler() }}>Edit</button>
                            <button onClick={() => { deleteHandler(li) }}>delete</button>
                        </div>
                    ))
                ) : (
                    console.log('no list found')
                )
            }
        </div>
    )
}

export default Todo