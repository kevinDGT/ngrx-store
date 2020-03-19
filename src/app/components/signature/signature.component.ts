import {AfterViewInit, Component, OnInit} from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit, AfterViewInit {

  private signaturePad;

  constructor() {
  }

  ngOnInit(): void {
    const canvas = document.getElementById('signature-pad') as HTMLCanvasElement;
    this.signaturePad = new SignaturePad(canvas, {
      backgroundColor: 'rgb(255, 255, 255)',
      penColor: 'rgb(0, 0, 0)',
      maxWidth: 1
    });
  }

  ngAfterViewInit() {
    document.getElementById('clear').addEventListener('click', (event) => {
      this.signaturePad.clear();
    });

    document.getElementById('save').addEventListener('click', (event) => {
      const fullQuality = this.signaturePad.toDataURL('image/jpeg', 1.0);
    });

    window.addEventListener('resize', this.resizeCanvas);
    this.resizeCanvas();
  }

  resizeCanvas() {
    const canvas = document.getElementById('signature-pad')  as HTMLCanvasElement;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext('2d').scale(ratio, ratio);
    this.signaturePad.clear();
  }
}
