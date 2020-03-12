import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-child',
  templateUrl: './random-child.component.html',
  styleUrls: ['./random-child.component.scss']
})
export class RandomChildComponent implements OnInit {


  constructor() { }

  static getMagic() {
    return 'working string';
  }



  ngOnInit() {
  }
}
