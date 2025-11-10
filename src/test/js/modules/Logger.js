import { CONFIG } from '../config.js';

const Logger = {
    info: (...args) => {
        if (CONFIG.DEBUG) {
            console.log('[INFO]', ...args);
        }
    },
    
    debug: (...args) => {
        if (CONFIG.DEBUG) {
            console.debug('[DEBUG]', ...args);
        }
    },

    warn: (...args) => {
        if (CONFIG.DEBUG) {
            console.warn('[WARN]', ...args);
        }
    },

    error: (...args) => {
        if (CONFIG.DEBUG) {
            console.error('[ERROR]', ...args);
        }
    },

    // Specific log for asset loading
    assetLoad: (message, ...args) => {
        if (CONFIG.DEBUG) {
            console.log(`[ASSET_LOAD] ${message}`, ...args);
        }
    },

    // Specific log for collision events
    collision: (message, ...args) => {
        if (CONFIG.DEBUG) {
            console.log(`[COLLISION] ${message}`, ...args);
        }
    }
};

export { Logger };
