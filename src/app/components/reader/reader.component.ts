import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  pdfSrc = '../../../assets/LoremIpsumH101-2016.pdf';
  progressValue = 0;
  delay = 1000;
  constructor() { }

  ngOnInit() {
  }

  pdfLoaded($event) {
    this.progressValue = 100 / $event.pagesCount;
  }

  pagesLoaded($event) {
    this.progressValue = 100;
  }
}
