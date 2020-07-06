import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';

// Pass an object to the @Component decorator
// @ComponentScan(value = "xxxx")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
// public class SpringBootFirstWebApplication
// If you want to use WelcomeComponent class outside of this module
// you need to export it
export class WelcomeComponent implements OnInit {


  // String message = "Some message";
  message: string;
  name = '';

  // public SpringBootFirstWebApplication() //className
  constructor(private route: ActivatedRoute) { }

  // void init()
  ngOnInit(): void {
    this.message = 'some more message';
    this.name = this.route.snapshot.params.name;
    console.log(this.message);
  }

  getWelcomeMessage()
  {
    console.log('Get Welcome Message');
  }

}
