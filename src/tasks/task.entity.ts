 export enum Taskstatus{
    pending = "pending",
    in_progrees ="in_progrees",
    done = "done"
}

 export class Tasks{
    id:string
    title: string
    description: string
    status:Taskstatus
}
