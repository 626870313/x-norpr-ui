module.exports={
  "env":{
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends":{
    "eslint:recommonded", //默认es5规范
    "plugin:vue/vue3-recommended", //支持vue3
    "plugin:@typescript-eslint/recommended", //插件识别ts
    "@vue/typescript/recommended" //识别vue中得ts
  },
  "parserOptions":{
    "ecmaVersion": "latest",
    "parser":"@typescript-eslint/parser",
    "sourceType":"module"
  },
  "rules":{
    "vue/html-self-closing":"off",
    "vue/max-attributes-per-line":"off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multi-word-component-names": "off",
  },
  "globals":{
    "defineProps":"readonly"
    }
}
