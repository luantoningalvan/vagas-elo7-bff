export const loadEnv = () => ({
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost/api',
});

export type Env = ReturnType<typeof loadEnv>;
