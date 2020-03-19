import {AfterViewInit, Component, OnInit} from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit, AfterViewInit {

  private signaturePad;
  constructor() { }

  ngOnInit(): void {
    const canvas = document.getElementById('signature-pad')  as HTMLCanvasElement;
    this.signaturePad = new SignaturePad(canvas, {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      penColor: 'rgb(0, 0, 0)',
      maxWidth: 1
    });
  }

  ngAfterViewInit() {
    document.getElementById('clear').addEventListener('click', (event) => {
      this.signaturePad.clear();
    });

    function resizeCanvas() {
      const canvas = document.getElementById('signature-pad')  as HTMLCanvasElement;
      const ratio =  Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext('2d').scale(ratio, ratio);
      // if (this.signaturePad && typeof this.signaturePad !== undefined) {
      //   this.signaturePad.clear();
      // }// otherwise isEmpty() might return incorrect value
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
  }
}
