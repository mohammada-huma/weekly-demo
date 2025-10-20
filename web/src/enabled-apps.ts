import {
  bootstrapStandaloneApps,
  type ProvidableApp,
  withShellEnvironment,
} from '@huma-engineering/app-kit';
import { includingWeeklyDemo } from '@huma-engineering/portal-weekly-demo/app';
import { environment } from './environments/environment.development';

const apps: ProvidableApp[] = [includingWeeklyDemo()];

export const standaloneApps = bootstrapStandaloneApps(
  withShellEnvironment({
    hostUrl: environment.HOST_URL,
  }),
  ...apps,
);
