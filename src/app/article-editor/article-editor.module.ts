import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule as TinymceModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { ArticleEditorComponent } from './article-editor.component';

/**
 * Этот роут срабатывает после ленивой загрузки модуля по роуту /article
 * @see AppRoutingModule
 */
const routes: Routes = [
  {
    // страница для присоединения к классу и открытию конференции
    path: '',
    component: ArticleEditorComponent,
  },
];


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    TinymceModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ArticleEditorComponent,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
})
export class ArticleEditorModule { }
