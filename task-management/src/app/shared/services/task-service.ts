import { Injectable, signal } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  list = signal<Task[]>([]);

  public addTask(task:Task):void{
    console.log("service :"+task.libelle);
    this.list.update(current => [...current,task]);
    console.log("service :",this.list());
  }

  public getTasks():Task[]{
    return this.list();
  }
}
