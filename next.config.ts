import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  env: {
    API_PREFIX: process.env.API_PREFIX,
    API_URL: process.env.API_URL,
  }
};


const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

