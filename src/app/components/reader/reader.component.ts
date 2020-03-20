import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  // pdfSrc = '../../../assets/LoremIpsumH101.pdf';
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  progressValue = 0;
  delay = 1000;
  constructor() {
  }

  ngOnInit() {
  }

  pdfLoaded($event) {
    this.progressValue = 100 / $event.pagesCount;
  }

  pagesLoaded($event) {
    this.progressValue = 100;
  }

  onProgress($event) {
    this.progressValue = $event.loaded;
  }

  callBackFn($event) {
    console.log($event);
  }

  onError($event: any) {
    console.log($event);
  }
}
