import { Injectable } from '@nestjs/common';
import { Tasks, Taskstatus } from './task.entity';
import{v4}from'uuid'
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

 private   tasks: Tasks[]=[{
        id:'1',
        title:'first task',
        description:"some tasks",
        status: Taskstatus.pending,
    }
]
    getAllTasks(){ 
    return  this.tasks;
}

    CreateTask(title : string, description : string){
        const task={
            id: v4(),
            title,
            description,
            status: Taskstatus.pending
        }
        this.tasks.push(task);
        return task;
    }

   
    deleteTask(id:string){
        this.tasks= this.tasks.filter(task =>task.id !== id)
    }

    getTaskByid(id: string): Tasks{
     return this.tasks.find(task => task.id === id)
    }
    updateTask(id: string,updatedfields:updateTaskDto): Tasks{
     const task =   this.getTaskByid(id)
     const newTask = Object.assign(task,updatedfields)
     this.tasks = this. tasks.map(task => task.id === id? newTask : task)
     return newTask

    }
}
