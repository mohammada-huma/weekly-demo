import { createStandaloneAppProvider } from '@huma-engineering/app-kit';
import { WeeklyDemoApp } from './portal-weekly-demo.app';

/**
 * Provides the WeeklyDemo as a standalone application.
 */
export const includingWeeklyDemo = createStandaloneAppProvider(WeeklyDemoApp);
