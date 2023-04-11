window.addEventListener('load', function() {
    window.addEventListener('message', function(event) {
      if (event.data === 'Hello back from iframe1') {
        console.log('Received message from iframe1: ' + event.data);
      }
    });
  });
  
  console.log('iframe2.js window.name:'+window.name);