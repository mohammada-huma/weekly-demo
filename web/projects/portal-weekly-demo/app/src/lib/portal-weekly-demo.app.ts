import { StandaloneApp } from '@huma-engineering/app-kit';

/** WeeklyDemo's Main Application Class */
export class WeeklyDemoApp extends StandaloneApp {
  override readonly id = 'PORTAL_WEEKLY-DEMO';

  override readonly name = 'WeeklyDemo portal';

  override readonly description = 'Sample description';

  override readonly routingConfig = {
    prefix: 'portal-weekly-demo',
    routeLoader: () =>
      import('./portal-weekly-demo.routes').then((r) => r.PORTAL_ROUTES),
  };

  /** @inheritdoc */
  override hasAccess(): boolean {
    return true;
  }
}
