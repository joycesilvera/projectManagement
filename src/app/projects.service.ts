import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  //since it is private the ref will be accessed in all the methods of the current service
  constructor(private httpClient : HttpClient) { } //here httpClient is ref to access obj of HttpClient service

  //ready to return an array of Project that is received from server as response
  getAllProjects() : Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/projects");
  }

    //ready to return an array of Project that is received from server as response
  insertProject(newProject: Project) : Observable<Project>
    {
      return this.httpClient.post<Project>("/api/projects", newProject);
    }
}
