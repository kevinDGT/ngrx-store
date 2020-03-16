import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-child',
  templateUrl: './random-child.component.html',
  styleUrls: ['./random-child.component.scss']
})
export class RandomChildComponent implements OnInit {

  pdfSrc = '../../../assets/LoremIpsumH101-2016.pdf';
  progressValue = 0;
  constructor() { }

  onProgress(progressData) {
    this.progressValue = progressData.loaded;
  }



  ngOnInit() {
  }
}
