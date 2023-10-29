import {Body, Controller,Delete,Get,Post,Param,Patch } from '@nestjs/common';
import{TasksService }from'./tasks.service';
import{createTaskDto, updateTaskDto}from'./dto/task.dto'


@Controller('tasks')
export class TasksController {
    constructor( private tasksService: TasksService){}
    @Get()
    gettallTasks(){
return  this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body()newTask: createTaskDto){
        console.log(newTask)
        return 'guardando'
     return  this.tasksService.CreateTask(newTask.title,newTask.description);
    }
    @Delete(':id')
    deleteTask(@Param('id')id: string){
      this.tasksService.deleteTask(id)
    }
    @Patch(":id")
    updateTask(@Param('id')id: string,@Body() updateFields:updateTaskDto){ 
   return     this.tasksService.updateTask(id,updateFields)
    }
}
