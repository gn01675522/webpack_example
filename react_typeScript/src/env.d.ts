declare namespace NodeJS {
  interface ProcessEnv {
    readonly APP_API_URL: string;
    readonly APP_API_PATH: string;
    readonly NODE_ENV: "development" | "production";
  }
}
