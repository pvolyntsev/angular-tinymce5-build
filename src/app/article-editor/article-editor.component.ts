import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TinyMCEConfig} from '../tinymce.config';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent implements OnInit {
  public form: FormGroup;

  public editorConfig = TinyMCEConfig;

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
        "<h1>Заголовок 1</h1>\n<h2>Заголовок 2</h2>\n<h3>Заголовок 3</h3>\n<h4>Заголовок 4</h4>\n<h5>Заголовок 5</h5>\n<p>Параграф</p>\n<pre>Форматированный код</pre>\n<p><em>Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается со слов &laquo;to be or not to be&raquo;, что в переводе на русский язык означает &laquo;быть или не быть&raquo;. Глагол &laquo;to be&raquo; - один из самых часто употребляемых глаголов в английском языке. Это глагол состояния, который не выражает никакой конкретной деятельности или действия, а вместо этого описывает существование. Также, он используется в качестве вспомогательного глагола, например, с настоящим длительным.</em></p>\n<blockquote class=\"blockquote-yellow\">\n<p>Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается со слов &laquo;to be or not to be&raquo;, что в переводе на русский язык означает &laquo;быть или не быть&raquo;. Глагол &laquo;to be&raquo; - один из самых часто употребляемых глаголов в английском языке. Это глагол состояния, который не выражает никакой конкретной деятельности или действия, а вместо этого описывает существование. Также, он используется в качестве вспомогательного глагола, например, с настоящим длительным.</p>\n</blockquote>\n<p><em>Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается со слов &laquo;to be or not to be&raquo;, что <marker class=\"marker-yellow\">в переводе на русский язык</marker> означает &laquo;<span class=\"span-red\">быть или не быть</span>&raquo;. Глагол &laquo;to be&raquo; - один из самых часто употребляемых глаголов в английском языке. Это глагол состояния, который не выражает никакой конкретной деятельности или действия, а вместо этого описывает существование. Также, он используется в качестве вспомогательного глагола, например, с настоящим длительным.</em></p>\n<p>&nbsp;</p>\n<p><em>Быть или не быть</em></p>\n<div class=\"columns\">\n<div class=\"column\">\n<p>Быть</p>\n</div>\n<div class=\"column\">\n<p>Не быть</p>\n</div>\n</div>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>"
      ],
    });
  }
}
