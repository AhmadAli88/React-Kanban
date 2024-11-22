import {
    KanbanComponent,
    ColumnsDirective,
    ColumnDirective,
  } from '@syncfusion/ej2-react-kanban';
  
  function DragDropKanban() {
    const data = [
      {
        Id: 1,
        Status: 'To Do',
        Summary: 'Implement dark mode feature',
        Assignee: 'Sam Davis',
        Priority: 'High',
      },
      {
        Id: 2,
        Status: 'InProgress',
        Summary: 'Refactor payment module',
        Assignee: 'Laura White',
        Priority: 'Medium',
      },
    ];
  
    return (
      <div className='App'>
        <KanbanComponent
          id='kanban'
          keyField='Status'
          dataSource={data}
          cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
          allowDragAndDrop={true}
        >
          <ColumnsDirective>
            <ColumnDirective headerText='To Do' keyField='To Do' />
            <ColumnDirective headerText='In Progress' keyField='InProgress' />
            <ColumnDirective headerText='Done' keyField='Done' />
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    );
  }
  export default DragDropKanban;
  