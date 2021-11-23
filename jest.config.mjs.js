/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// jest.config.js
module.exports = {
    preset: "ts-jest/presets/default",
    extensionsToTreatAsEsm: [".ts"],
    globals: {
        "ts-jest": {
            // useESM: true,
            tsconfig: "tsconfig.mjs.json",
        },
    },
    cache: false,
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
