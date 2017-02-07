module.exports = {
  extends: "airbnb",
  rules: {
    "max-len" : [2, 100],
    "import/no-extraneous-dependencies" : 0,
    "key-spacing"  : [2, {
      "singleLine" : {
        "beforeColon" : false,
        "afterColon"  : true,
      },
      "multiLine"  : {
        "beforeColon" : true,
        "afterColon"  : true,
        "align"       : "colon",
      },
    }],
  },
};
