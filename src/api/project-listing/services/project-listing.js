'use strict';

/**
 * project-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-listing.project-listing');
