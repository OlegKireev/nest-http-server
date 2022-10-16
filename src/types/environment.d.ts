export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      POSTGRES_HOST: string;
      POSTGRES_PORT: number;
      POSTGRES_DB: string;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
    }
  }
}
