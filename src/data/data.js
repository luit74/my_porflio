import todoOne from '../../public/todo1.png'
import todoTwo from '../../public/todo2.png'
import todoThree from '../../public/todo3.png'


export const projectData = [
  {
    title: "World Atlas",
    description:" persist across page reloads. On page load, the showTask() function retrieves and displays the saved tasks. User interactions are handled via an event listener on the task container, making the app lightweight and fully functional without external libraries.This JavaScript code implements a basic to-do list app where users can add, complete (by toggling a class), and delete tasks. Each task is represented as an <li> element with a delete button (×) appended as a <span>.",
    image: ['../../public/atlasOne.png' , '../../public/atlasTwo.png' , '../../public/atlasThree.png'],
    netlifyLink: 'world-atlas000.netlify.app'
  },
  {
    title: "To-Do App",
    description:"This JavaScript code implements a basic to-do list app where users can add, complete (by toggling a class), and delete tasks. Each task is represented as an <li> element with a delete button (×) appended as a <span>. The list is saved to the browser's localStorage using the saveData() function, ensuring that tasks persist across page reloads. On page load, the showTask() function retrieves and displays the saved tasks. User interactions are handled via an event listener on the task container, making the app lightweight and fully functional without external libraries.This JavaScript code implements a basic to-do ",
    image: [todoOne , todoTwo , todoThree],
    netlifyLink: 'todo-list-0690.netlify.app'
  },

];
