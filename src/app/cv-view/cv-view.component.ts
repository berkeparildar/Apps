import {Component} from '@angular/core';
@Component({
  selector: 'app-cv-view',
  templateUrl: './cv-view.component.html',
  styleUrls: ['./cv-view.component.css']
})
export class CvViewComponent {
  cvPdfUrl: string = 'src/assets/cv.pdf';
  constructor() {}

}
