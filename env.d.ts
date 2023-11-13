declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
    NEXT_PUBLIC_GTAG: string;
    PERSONAL_ACCESS_TOKEN: string;
    SENDGRID_API_KEY: string;
    SENDGRID_TO: string;
    SENDGRID_FROM: string;
  }
}
