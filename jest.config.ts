import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.vue$": "@vue/vue3-jest",
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.ts?$": "ts-jest"
    },
    moduleFileExtensions: [
        "js",
        "vue",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
        ".history/"
    ],
    collectCoverage: true,
    testEnvironment: "jsdom",
};
export default config;