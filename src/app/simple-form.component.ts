import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-overview-example',
  styleUrls: ['simple-form.component.css'],
  templateUrl: 'simple-form.component.html',
})
export class InputOverviewExample {

    constructor( private http: HttpClient){
      
    }

message="";
messages = [];
userName='';

async ngOnInit(){
  this.messages= await (this.http.get("http://localhost:3000/api/message").toPromise()) as any;
   
}


post(){
    this.http.post("http://localhost:3000/api/message",{Message:this.message,User:this.userName}).toPromise();
    console.log("Post",this.message);
}

}