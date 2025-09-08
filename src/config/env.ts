const env = {
  API_TOKEN: process.env.API_TOKEN,
  API_URL: process.env.API_URL,
};

if (!env.API_URL || !env.API_TOKEN) {
  throw new Error("Env variables are missing!");
}

export default env;
