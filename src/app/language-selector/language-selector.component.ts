import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {
  @Input() languageOne: string = 'GEO';
  @Input() languageTwo: string = 'ENG';
  @Output() change = new EventEmitter();
  selectedLanguage: string = '';

  ngOnInit(): void {
    this.selectedLanguage = this.languageOne;
  }
  onLanguageOne() {
    this.selectedLanguage = this.languageOne;
    this.change.emit(this.selectedLanguage);
  }
  onLanguageTwo() {
    this.selectedLanguage = this.languageTwo;
    this.change.emit(this.selectedLanguage);
  }
}
