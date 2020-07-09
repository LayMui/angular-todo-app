import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './../service/data/welcome-data.service';

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
  welcomeMessageFromService: string;

  // public SpringBootFirstWebApplication() //className
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  // void init()
  ngOnInit(): void {
    this.service.executeHelloWorldBeanService();
    this.name = this.route.snapshot.params.name;
    console.log(this.message);
  }

  getWelcomeMessage()
  {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error));
    console.log('Last line of getWelcomeMessage');
  }

  getWelcomeMessageWithParameter()
  {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error));
    console.log('Last line of getWelcomeMessage');
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    console.log('Response message: ' + response.message);
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;
  }

}
