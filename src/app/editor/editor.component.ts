import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TinyMCEGapsConfig} from './tinymce.config';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public form: FormGroup;

  public editorConfig = TinyMCEGapsConfig;

  constructor(
    protected fb: FormBuilder,
  ){
  }

  ngOnInit() {
    this.createForm();
  }

  protected createForm() {
    this.form = this.fb.group({
      text: [
        "<h1>Заголовок 1</h1>\n<h2>Заголовок 2</h2>\n<h3>Заголовок 3</h3>\n<p><em><img style=\"float: left;\" src=\"https://picsum.photos/200/300\" alt=\"\" width=\"200\" height=\"300\" />&ldquo;Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается со слов &laquo;to be or not to be&raquo;, что в переводе на русский язык означает &laquo;быть или не быть&raquo;. Глагол &laquo;to be&raquo; - один из самых часто употребляемых глаголов в английском языке. Это глагол состояния, который не выражает никакой конкретной деятельности или действия, а вместо этого описывает существование. Также, он используется в качестве вспомогательного глагола, например, с настоящим длительным&ldquo;</em></p>\n<p>&nbsp;</p>\n<p><em><img style=\"float: right;\" src=\"https://picsum.photos/200/300\" alt=\"\" width=\"200\" height=\"300\" />&ldquo;Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается со слов &laquo;to be or not to be&raquo;, что в переводе на русский язык означает &laquo;быть или не быть&raquo;. Глагол &laquo;to be&raquo; - один из самых часто употребляемых глаголов в английском языке. Это глагол состояния, который не выражает никакой конкретной деятельности или действия, а вместо этого описывает существование. Также, он используется в качестве вспомогательного глагола, например, с настоящим длительным&ldquo;</em></p>\n<p>&nbsp;</p>\n<p><em>&ldquo;Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается со слов &laquo;to be or not to be&raquo;, что в переводе на русский язык означает &laquo;быть или не быть&raquo;. Глагол &laquo;to be&raquo; - один из самых часто употребляемых глаголов в английском языке. Это глагол состояния, который не выражает никакой конкретной деятельности или действия, а вместо этого описывает существование. Также, он используется в качестве вспомогательного глагола, например, с настоящим длительным&ldquo;</em></p>\n<p>&nbsp;</p>\n<p><em><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://picsum.photos/200/300\" alt=\"\" width=\"200\" height=\"300\" /></em></p>\n<p>&nbsp;</p>\n<p><em>&ldquo;Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается со слов &laquo;to be or not to be&raquo;, что в переводе на русский язык означает &laquo;быть или не быть&raquo;. Глагол &laquo;to be&raquo; - один из самых часто употребляемых глаголов в английском языке. Это глагол состояния, который не выражает никакой конкретной деятельности или действия, а вместо этого описывает существование. Также, он используется в качестве вспомогательного глагола, например, с настоящим длительным&ldquo;</em></p>\n<hr />\n<ul>\n<li><em>Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается </em></li>\n<li><em>Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается </em></li>\n<li><em>Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается </em></li>\n<li><em>Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается</em></li>\n</ul>\n<hr />\n<ol>\n<li><em>Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается </em></li>\n<li><em>Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается </em></li>\n<li><em>Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается </em></li>\n<li><em>Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается</em></li>\n</ol>\n<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>5</mn></mrow></math></p>\n<p>&nbsp;</p>\n<table style=\"border-collapse: collapse; width: 100%;\" border=\"1\">\n<tbody>\n<tr>\n<td style=\"width: 33.3333%;\">Заголовок</td>\n<td style=\"width: 33.3333%;\">Заголовок</td>\n<td style=\"width: 33.3333%;\">Заголовок</td>\n</tr>\n<tr>\n<td style=\"width: 33.3333%;\">Ячейка</td>\n<td style=\"width: 33.3333%;\">Ячейка</td>\n<td style=\"width: 33.3333%;\">Ячейка</td>\n</tr>\n</tbody>\n</table>\n<p>Next, use our Get Started <gap-selectbox><gap-variant selected=\"selected\">docs</gap-variant><gap-variant>1</gap-variant><gap-variant>2</gap-variant></gap-selectbox> to setup Tiny!</p>"
      ],
    });
  }
}
