
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-kanban/styles/material.css';
import Basic from './components/KanbanBoardDemo';
import DynamicKanban from './components/DynamicKanban';
import DragDropKanban from './components/DragDropKanban';
function App() {
 

  return (
   <div >
    <Basic/>
    <DynamicKanban/>
    <DragDropKanban/>
   </div>
  )
}

export default App
