import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { splitVendorChunkPlugin } from 'vite';


/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const displayTodos =  () =>{
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        console.log( todos );
        
    }

    // Cuando la funcion APP() se llama
    (() => {
        const app = document.createElement('div');
        // app.innerHTML = '<h1>Hola Mundo</h1>';
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
    })();



}