import resources from '../src/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: typeof resources;
    returnNull: false;
  }
}
