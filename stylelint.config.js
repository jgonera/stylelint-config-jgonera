/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-html"],
  plugins: ["stylelint-order"],
  rules: {
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": true,
  },
}
