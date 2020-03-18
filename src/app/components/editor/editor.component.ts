import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic/';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  constructor() {
  }

  public Editor = ClassicEditor;
  public dataHtml = '<p>Hello, world!</p>';
  public editorConfig = {};

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

  onReady(e) {
    e.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new Adapter(loader);
    };
  }

  uploadData() {
    console.log(this.dataHtml);
  }

}

class Adapter {
  private reader: any;
  private loader: any;

  constructor( loader ) {
    this.loader = loader;
  }

  upload() {
    return new Promise( ( resolve, reject ) => {
      const reader = this.reader = new window.FileReader();

      reader.addEventListener( 'load', () => {
        resolve( { default: reader.result } );
      } );

      reader.addEventListener( 'error', err => {
        reject( err );
      } );

      reader.addEventListener( 'abort', () => {
        reject();
      } );

      this.loader.file.then( file => {
        reader.readAsDataURL( file );
      } );
    } );
  }

  abort() {
    this.reader.abort();
  }
}
