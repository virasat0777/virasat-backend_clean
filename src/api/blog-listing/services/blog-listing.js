'use strict';

/**
 * blog-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-listing.blog-listing');
