// import { Component } from '@angular/core';
import {CdkTextareaAutosize, TextFieldModule} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule, MatInputModule } from '@angular/material';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, TextFieldModule],
})
export class AppComponent {
  name = 'Angular 5';
  dataList: Array<any> = [];
  // schedule: { branch: any } = { branch: '' };
  // schedule: {
  //   branch: any;
  //   keepForText: string;
  //   anotherBranch: any;
  //   anotherKeepForText: string;
  // } = {
  //   branch: '',
  //   keepForText: '',
  //   anotherBranch: '',
  //   anotherKeepForText: '',
  // };
  schedule: {
    branch: any;
    selectedOption: any;
    keepForText: string;
    keepForText2: string;
  } = {
    branch: '',
    selectedOption: '',
    keepForText: '',
    keepForText2: '',
  };
  constructor(private _ngZone: NgZone) {
    this.dataList = [
      { code: 1, name: 'Decline' },
      { code: 2, name: 'Answer' },
      { code: 3, name: 'Approve' },
    ];
  }
  
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
}
