import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {Task} from "../model/Task";
import {TestData} from "../data/TestData";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
  }

  getCategories(): Category[] {
    return TestData.categories;
  }

  getTasks(): Task[] {
    return TestData.tasks;
  }

  fillTasks() {
    this.tasksSubject.next((TestData.tasks));
  }

  fillCategories() {
    this.categoriesSubject.next(TestData.categories);
  }

  /* getTasksByCategory(category: Category): Task[] {
    const tasks = TestData.tasks
      .filter(task => task.category === category);
    console.log(tasks);
    return tasks;
  } */

  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks
      .filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }
}
