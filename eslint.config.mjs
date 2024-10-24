export default [{
    ignores: [
        "lib/ace/mode/css/*",
        "lib/ace/mode/coffee/*",
        "lib/ace/mode/html/*",
        "lib/ace/mode/javascript/*",
        "lib/ace/mode/json/*",
        "lib/ace/mode/lua/*",
        "lib/ace/mode/php/*",
        "lib/ace/mode/xml/*",
        "lib/ace/mode/xquery/*",
        "lib/ace/mode/xquery.js",
        "lib/ace/mode/yaml/*",
        "src/lib/default_english_messages.js",
        "**/test/asyncjs/*",
        "**/es5-shim.js",
        "**/vim*.js",
        "**/experiments/",
        "**/tool/",
        "**/doc/",
        "**/build/",
        "**/demo/",
        "**/api/",
        "**/* *",
        "**/node_modules",
        "**/0*",
    ],
}, {
    languageOptions: {
        globals: {
            define: true,
            require: true,
            exports: true,
            module: true,
            __dirname: true,
            __filename: true,
            process: true,
            global: true,
            importScripts: true,
            document: true,
            window: true,
            location: true,
            navigator: true,
            console: true,
            Worker: true,
            postMessage: true,
            setTimeout: true,
            clearTimeout: true,
            setInterval: true,
            clearInterval: true,
            Blob: true,
            cvox: true,
            alert: true,
            prompt: true,
            XMLHttpRequest: true,
            localStorage: true,
            KeyboardEvent: true,
            CustomEvent: true,
        },

        ecmaVersion: 2015,
        sourceType: "script",
    },

    rules: {
        curly: 0,
        eqeqeq: 0,
        "comma-dangle": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-empty": 0,
        "no-ex-assign": 2,
        "no-extra-parens": 0,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-sparse-arrays": 2,
        "no-unexpected-multiline": 2,
        "use-isnan": 2,
        "valid-typeof": 2,
        "accessor-pairs": 2,
        complexity: 0,
        "dot-location": [2, "property"],
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-empty-pattern": 2,
        "no-extra-bind": 2,
        "no-implied-eval": 2,
        "no-lone-blocks": 2,
        "no-native-reassign": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal-escape": 2,
        "no-octal": 2,
        "no-return-assign": 0,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-useless-call": 2,
        yoda: 2,
        "no-undef": 2,
        "no-redeclare": 0,

        "no-unused-vars": [1, {
            args: "none",
            vars: "all",
        }],

        "no-debugger": 2,
        "no-alert": 2,
        "no-extra-semi": 2,
        "computed-property-spacing": 2,
        "linebreak-style": 2,
        "no-array-constructor": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-new-object": 2,
        "no-restricted-syntax": 2,
        "no-spaced-func": 2,

        semi: [2, "always", {
            omitLastInOneLineBlock: false,
        }],
    },
}];