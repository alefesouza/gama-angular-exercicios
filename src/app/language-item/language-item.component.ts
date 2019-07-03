import { Component, OnInit, Input } from '@angular/core';
import { Language } from 'src/typings/Language';

@Component({
  selector: 'app-language-item',
  templateUrl: './language-item.component.html',
  styleUrls: ['./language-item.component.css']
})
export class LanguageItemComponent implements OnInit {
  @Input() language: Language;

  constructor() { }

  ngOnInit() {
  }

}
