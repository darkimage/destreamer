const process = require('process');

/**
 * Are we being executed from a pkg??
 */
export default Boolean(process.pkg);