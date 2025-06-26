module.exports = ({ env }) => {
  const config = {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
    logger: {
      level: 'debug',
      requests: true,
    },
  };

  console.log('✅ SERVER CONFIG:', config); // ✅ Log the full server config

  return config;
};
