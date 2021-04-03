function censor(input) {
  escinput = input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    a = escinput.replace(/fuck/g, "f-ck");
    b = a.replace(/shit/g, "sh-t");
      document.write(\<h1\>b\<h1/\>);
