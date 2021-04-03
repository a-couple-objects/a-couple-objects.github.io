function censor(input) {
  escinput = input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    a = escinput.replace(/fuck/g, "f-ck");
    b = a.replace(/shit/g, "sh-t");
    c = b.replace(/bitch/g, "b-tch");
    d = c.replace(/ass/g, "a--");
    e = d.replace(/cunt/g, "c--t");
    f = e.replace(/fire/g, "burny stuff");
    g = f.replace(/drugs/g, "dr-gs");'
    h = g.replace(/drunk/g, "dr-nk");
    i = h.replace(/blood/g, "cherry kool-aid");
    j = i.replace(/hate/g, "h-te");'
    k = j.replace(/school/g, "brain house");
};
    function copy() {
      copyText=document.getElementById("censortext");copyText.select();copyText.setSelectionRange(0,99999);document.execCommand("copy");
    }
