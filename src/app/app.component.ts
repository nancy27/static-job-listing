import { Component } from '@angular/core';
import  *  as  data  from  './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'static-job-listing';
 listOfJobs: any = (data as any).default;
  
}
