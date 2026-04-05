// prisma.config.js
import 'dotenv/config';

export default {
  datasource: {
    url: process.env.DATABASE_URL,       // pooled Neon connection
    // directUrl: process.env.DIRECT_URL,   // direct Neon URL for prisma CLI
  },
};