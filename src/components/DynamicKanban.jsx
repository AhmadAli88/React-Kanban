import {
    KanbanComponent,
    ColumnsDirective,
    ColumnDirective,
  } from '@syncfusion/ej2-react-kanban';
  
  function DynamicKanban() {
    let data = [
      {
        Id: 1,
        Status: 'To Do',
        Summary: 'Complete user login feature',
        Assignee: 'Jane Doe',
        Deadline: '2024-12-01',
        Progress: 20,
      },
      {
        Id: 2,
        Status: 'InProgress',
        Summary: 'Fix bugs in registration form',
        Assignee: 'John Smith',
        Deadline: '2024-11-30',
        Progress: 60,
      },
      {
        Id: 3,
        Status: 'Done',
        Summary: 'Finalize user interface design',
        Assignee: 'Alice Brown',
        Deadline: '2024-11-25',
        Progress: 100,
      },
    ];
  
    return (
      <div className='App'>
        <KanbanComponent
          id='kanban'
          keyField='Status'
          dataSource={data}
          cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
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
  export default DynamicKanban;
  