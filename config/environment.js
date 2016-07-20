/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'uwork-app-auth',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    contentSecurityPolicy : {
      'default-src': "'self' *",
      'script-src': "'self' * 'unsafe-inline' 'unsafe-eval' localhost:49152 0.0.0.0:49152",
      'font-src': "'self' * https://fonts.googleapis.com",
      'connect-src': "'self' * http://ornio.local",
      'img-src': "'self' *",
      'style-src': "'self' * 'unsafe-inline' 'unsafe-eval' localhost:49152 0.0.0.0:49152",
      'media-src': "'self' *"
    },

    APP: {
      API_HOST: 'http://ornio.local/uwork-api/public',
      API_NAMESPACE: 'api'
    }
  };

  // Ember Simple Auth configuration
  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token',
    crossOriginWhitelist: ['http://ornio.local'],
    authenticationRoute: 'user.login',
    //routeAfterAuthentication: 'protected',
    //routeIfAlreadyAuthenticated: 'protected',
    //baseURL: '/'
  };

  // Ember Simple Auth Token configuration
  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: 'http://ornio.local/uwork-api/public/api/users/authenticate',
    serverTokenRefreshEndpoint: 'http://ornio.local/uwork-api/public/api/users/refresh',
    identificationField: 'email',
    refreshAccessTokens: false,
    timeFactor: 1,
    refreshLeeway: 300
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
