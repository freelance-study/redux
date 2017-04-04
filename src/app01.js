'use strict';
import { createStore } from "redux";

/**
 * Reducer を作成し、それを元に Store を作成しています。
 * Redux においては Dispatcher は存在せず、Reducer が Action を元に、Store の状態の変更を担います。
 * createStore の第二引数は、state の初期値になります。
 * ToDoリストなので、各個別のToDo を入れるために todo プロパティに空配列を設定しておきます。
 */

function reducer (state, action) {
    return state;
}

const store = createStore(reducer, {todo: []});

console.log(store.getState());