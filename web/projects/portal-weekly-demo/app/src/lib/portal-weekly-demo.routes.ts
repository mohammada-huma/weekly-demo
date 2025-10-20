import { Routes } from '@angular/router';
import { languageLoader } from '@huma-engineering/portal-weekly-demo/i18n';
import { provideTranslationScope } from '@huma-engineering/tool-kit/i18n';

export const PORTAL_ROUTES: Routes = [
  {
    path: 'main',
    providers: [provideTranslationScope('weekly-demo', languageLoader())],
    loadComponent: () =>
      import('./portal-weekly-demo.component').then((c) => c.WeeklyDemo),
    children: [],
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];
