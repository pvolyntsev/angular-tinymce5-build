import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public form: FormGroup;

  public editorConfig: any = {
	skin: "lingua",
	menubar: false,
	inline: true,
    plugins: [
      'autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount selectlist'
    ],
    toolbar:
      'undo redo | styleselect | hr | bold italic underline strikethrough | \
		table | backcolor forecolor | \
		align | bullist numlist selectlist',
		
	toolbar_groups: {
		align: {
		  icon: 'align-justify',
		  tooltip: 'Align',
		  items: 'alignleft aligncenter alignright alignjustify'
		}
	},

	extended_valid_elements : "gap-selectbox[*],gap-variant[*],marker[*]",

    content_css: [
      '/assets/base.css', // базовые стили
      '/assets/article.css', // общее оформление текста
      '/assets/plugins.css', // стили для плагинов
    ],
  };

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
        `<h1>Заголовок 1</h1>
	   <p><em>“Знаменитый монолог Гамлета из одноименной пьесы Шекспира начинается со слов «to be or not to be», что в переводе на русский язык означает «быть или не быть». Глагол «to be» - один из самых часто употребляемых глаголов в английском языке. Это глагол состояния, который не выражает никакой конкретной деятельности или действия, а вместо этого описывает существование. Также, он используется в качестве вспомогательного глагола, например, с настоящим длительным“</em></p>
	   <table style="border-collapse: collapse; width: 100%;" border="1" data-mce-style="border-collapse: collapse; width: 100%;">
		<tbody>
			<tr>
				<td style="width: 33.3333%;" data-mce-style="width: 33.3333%;">Заголовок</td>
				<td style="width: 33.3333%;" data-mce-style="width: 33.3333%;">Заголовок</td>
				<td style="width: 33.3333%;" data-mce-style="width: 33.3333%;">Заголовок</td>
			</tr>
		  	<tr>
				<td style="width: 33.3333%;" data-mce-style="width: 33.3333%;">Ячейка</td>
				<td style="width: 33.3333%;" data-mce-style="width: 33.3333%;">Ячейка</td>
				<td style="width: 33.3333%;" data-mce-style="width: 33.3333%;">Ячейка</td>
			</tr>
	  	</tbody>
	  </table>
	  <p>Next, use our Get Started <gap-selectbox><gap-variant selected="selected">docs</gap-variant><gap-variant>1</gap-variant><gap-variant>2</gap-variant></gap-selectbox>
		  to setup Tiny!
	  </p>`
      ],
    });
  }
}
