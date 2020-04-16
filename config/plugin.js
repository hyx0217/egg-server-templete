'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};
