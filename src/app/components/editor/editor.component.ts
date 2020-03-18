import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  constructor() { }
  public Editor = ClassicEditor;
  public dataHtml  = '<p>Hello, world!</p>';
  public editorConfig = {
    plugins: [ Essentials, Paragraph, Bold, Italic, Base64UploadAdapter ],
    toolbar: {
      items: [
        'bold',
        'italic'
      ]
    },
    // image: {
    //   toolbar: [
    //     'imageStyle:full',
    //     'imageStyle:side',
    //     '|',
    //     'imageTextAlternative'
    //   ]
    // },
    language: 'en',
    data: this.dataHtml
  };

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    ClassicEditor.create(document.querySelector('#editor'), this.editorConfig)
      .then(newEditor => this.Editor = newEditor)
      .catch( error => {
        console.error( error );
      });
  }

  onReady(e) {
    console.log(e);
  }

  uploadData() {
    console.log(this.Editor.getData());
  }

}
