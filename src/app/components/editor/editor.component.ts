import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
// import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import SimpleuploadPlugin from 'ckeditor5-simple-upload/src/simpleupload';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  public editor = ClassicEditor;
  public dataHtml  = '<p>Hello, world!</p>';
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    ClassicEditor.create(document.querySelector('#editor'), {
      // plugins: [Essentials, UploadAdapter, Autoformat, Bold, Italic, BlockQuote, Heading, Image, SimpleuploadPlugin]
    })
      .then(newEditor => this.editor = newEditor)
      .catch(error => console.error(error));
  }

  uploadData() {
    console.log(this.editor.getData());
  }

}
