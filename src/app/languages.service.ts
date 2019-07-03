import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from 'src/typings/Language';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private httpClient: HttpClient) { }

  getLanguages(): Observable<Language[]> {
    return this.httpClient.get<Language[]>('https://alefesouza.dev/gama/languages.php');
  }
}
