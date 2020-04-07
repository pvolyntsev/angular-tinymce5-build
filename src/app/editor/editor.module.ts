import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule as TinymceModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { EditorComponent } from './editor.component';

/**
 * Этот роут срабатывает после ленивой загрузки модуля по роуту /editor
 * @see AppRoutingModule
 */
const routes: Routes = [
  {
    // страница для присоединения к классу и открытию конференции
    path: '',
    component: EditorComponent,
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
    EditorComponent,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
})
export class EditorModule { }
