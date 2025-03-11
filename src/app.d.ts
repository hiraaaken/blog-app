// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    interface Platform {
      env?: {
        MICROCMS_SERVICE_DOMAIN: DurableObjectNamespace;
        MICROCMS_API_KEY: DurableObjectNamespace;
      };
    }
  }
}

export {};
