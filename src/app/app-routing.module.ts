import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/article',
  },
  {
    /** @see ArticleEditorModule */
    path: 'article',
    loadChildren: './article-editor/article-editor.module#ArticleEditorModule',
  },
  {
    /** @see FillTheGapsEditorModule */
    path: 'fill-the-gaps',
    loadChildren: './fill-the-gaps-editor/fill-the-gaps-editor.module#FillTheGapsEditorModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
