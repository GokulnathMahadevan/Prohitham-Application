import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig = {
  providers: [
    provideRouter(appRoutes), provideAnimationsAsync(),
    // any other providers (e.g., HttpClient)
  ],
};
