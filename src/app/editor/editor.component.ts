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
    height: 500,
	menubar: false,
	inline: true,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount selectlist'
    ],
    toolbar:
      'undo redo | styleselect | hr | bold italic underline strikethrough | \
		subscript superscript | table | backcolor forecolor | image | \
		alignleft aligncenter alignright alignjustify | bullist numlist selectlist',

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
        `<p>Next, use our Get Started
<gap-selectbox><gap-variant selected="selected">docs</gap-variant><gap-variant>1</gap-variant><gap-variant>2</gap-variant></gap-selectbox>
 to setup Tiny!</p>`
      ],
    });
  }
}
