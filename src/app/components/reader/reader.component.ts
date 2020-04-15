import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  // pdfSrc = '../../../assets/LoremIpsumH101.pdf';
  // src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  // tslint:disable:max-line-length
  // http://vm-web2016/Visitatori/visitatorifileshareclosed/privacy-e-imprese.pdf
  public url: string;

  validUrl = false;

  progressValue = 0;
  delay = 1000;

  pdf: ArrayBuffer;
  pdfSrc: string;

  constructor(private http: HttpClient) {


  }

  ngOnInit() {
    this.url = 'http://vm-web2016/Visitatori/visitatorifileshareclosed/privacy-e-imprese.pdf';
    // debugger
    // this.http.get(
    //   this.url,
    //   {responseType: 'arraybuffer' as 'json'}
    // ).subscribe(result => {
    //   console.log(result);
    //   return result;
    // });
    //   .pipe(map(source => {
    //   console.log(source);
    //   debugger
    //   // this.pdf = this.base64ToArrayBuffer(this.url);
    // }));
  }

  base64ToArrayBuffer(base64) {
    // tslint:disable:variable-name
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
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

  loadPdf($event) {
    console.log(this.url);
    this.validUrl = true;
  }

  updateUrl($event) {
    this.url = $event.target.value;
  }
}
