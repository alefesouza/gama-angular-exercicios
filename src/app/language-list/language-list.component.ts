import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';
import { Language } from 'src/typings/Language';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {
  languages: Language[];

  constructor(private languagesService: LanguagesService) { }

  ngOnInit() {
    this.languagesService.getLanguages().subscribe(v => {
      console.log(v);
      this.languages = v;
    });
  }

}
