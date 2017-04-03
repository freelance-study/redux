'use strict';
import { createStore } from "redux";

// ToDo を一意に特定できる ID
let nextTodoId = 0;

// ToDo の追加
function addToDo (text) {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: text,
    };
}
// ToDo の完了／未完了
function toggleToDo (id) {
    return {
        type: 'TOGGLE_TODO',
        id: id,
    };
}

function reducer (state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todo: state.todo.concat({
                    id: action.id,
                    text: action.text,
                    completed: false
                })
            };
        case 'TOGGLE_TODO':
            return {
                todo: state.todo.map(t => {
                    if (t.id !== action.id) {
                        return t;
                    }

                    return Object.assign({}, t, {completed: !t.completed});
                })
            };
        default:
            return state;
    }
}
const store = createStore(reducer, {todo: []});

// Store に変更があれば、state を console に出力する
store.subscribe(() => console.log(store.getState()));

console.log("買い物を追加");
store.dispatch(addToDo("買い物に行く"));

console.log("銀行を追加");
store.dispatch(addToDo("銀行に行く"));

console.log("銀行に行くのをDone");
store.dispatch(toggleToDo(1));