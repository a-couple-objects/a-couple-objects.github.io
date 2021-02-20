function mRequest(ctype, rtype, location, body) {
              var eeyy = new XMLHttpRequest();
	              eeyy.open(rtype, location);
           eeyy.setRequestHeader('Content-type', ctype);
	eeyy.send(JSON.stringify(body););
	console.log(body);
  };
