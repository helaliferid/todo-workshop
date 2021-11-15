// the todo object is {id:number,label:string}

export class Todo{
    constructor(label){
        this.label=label;
    }
}

export class TodoList{
    todoList=[];

    addTodo(todo){
        this.TodoList.push(todo);
        this.addIndex();
    }

    removeTodo(todoId){
        this.todoList=this.todoList.filter(todo=>todo.id===todoId);
        this.addIndex();
    }

    sortTodo(field,direction="ASC"){
        this.todoList=this.todoList.sort((leftTodo,rightTodo)=>{
           switch (direction) {
               case 'ASC':
                   return leftTodo<rightTodo;
               case 'DSC':
                   return rightTodo>leftTodo;
               default:
                   break;
            }
        })
    }

    updateTodo(newTodo){
        this.todoList.forEach(todo => {
            if(todo.id===newTodo.id){
                todo.label=newTodo.label;
            }
        });
    }

    addIndex(){
        this.todoList=this.todoList.map((todo,index)=>todo.id=index);
    }
}