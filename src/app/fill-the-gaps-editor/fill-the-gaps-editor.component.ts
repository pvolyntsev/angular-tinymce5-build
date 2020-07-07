import {Component} from '@angular/core';
import {TinyMCEGapsConfig} from '../tinymce.config';
import {ArticleEditorComponent} from '../article-editor/article-editor.component';

@Component({
  selector: 'app-fill-the-gaps-editor',
  templateUrl: './fill-the-gaps-editor.component.html',
  styleUrls: ['./fill-the-gaps-editor.component.scss']
})
export class FillTheGapsEditorComponent extends ArticleEditorComponent {
  public editorConfig = TinyMCEGapsConfig;

  protected createForm() {
    this.form = this.fb.group({
      text: [
        "<h1><gap-inputbox>Заго</gap-inputbox> <gap-inputbox>ловок</gap-inputbox> <gap-selectbox><gap-variant selected=\"selected\">Заг</gap-variant></gap-selectbox> <gap-inputbox>оло</gap-inputbox> <gap-dropbox>вок</gap-dropbox> <gap-dropbox>Заго</gap-dropbox> <gap-inputbox>ловок</gap-inputbox> 1</h1>\n<h2>Заголовок 2</h2>\n<h3>Заголовок 3</h3>\n<h4>Заголовок 4</h4>\n<h5>Заголовок 5</h5>\n<p>Параграф</p>\n<pre>Форматированный код</pre>\n<p><gap-selectbox><gap-variant selected=\"selected\">Знаменитый</gap-variant></gap-selectbox> <gap-inputbox>монолог</gap-inputbox> <gap-dropbox>Гамлета</gap-dropbox> из одноименной пьесы Шекспира&nbsp;начинается со слов &laquo;<gap-selectbox><gap-variant selected=\"selected\">to</gap-variant></gap-selectbox> be <gap-inputbox>or not</gap-inputbox> to <gap-dropbox>be&raquo;, что</gap-dropbox> в переводе на русский язык означает &laquo;быть или не быть&raquo;. <gap-inputbox>Глагол</gap-inputbox> &laquo;to be&raquo; - <gap-inputbox>один</gap-inputbox> из <gap-inputbox>самых</gap-inputbox> часто употребляемых глаголов в английском языке. Это <gap-dropbox>глагол</gap-dropbox> состояния, <gap-dropbox>который</gap-dropbox> не выражает никакой конкретной деятельности или действия, а <gap-selectbox><gap-variant selected=\"selected\">вместо</gap-variant></gap-selectbox> этого <gap-selectbox><gap-variant selected=\"selected\">описывает</gap-variant></gap-selectbox> существование. Также, он используется в качестве вспомогательного глагола, например, с настоящим длительным.</p>\n<p>&nbsp;</p>\n<p>Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается со слов &laquo;to be or not to be&raquo;, что <marker class=\"marker-yellow\">в переводе на русский язык</marker> означает &laquo;<span class=\"span-red\">быть или не быть</span>&raquo;. Глагол &laquo;to be&raquo; - один из самых часто употребляемых глаголов в английском языке. Это глагол состояния, который не выражает никакой конкретной деятельности или действия, а вместо этого описывает существование. Также, он используется в качестве вспомогательного глагола, например, с настоящим длительным.</p>\n<p>&nbsp;</p>\n<p><em>Быть или не быть</em></p>\n<div class=\"columns\">\n<div class=\"column\">\n<p>Быть</p>\n</div>\n<div class=\"column\">\n<p>Не быть</p>\n</div>\n</div>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>"
      ],
    });
  }
}
