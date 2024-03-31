'use strict';

/**
 * consulting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::consulting.consulting');
