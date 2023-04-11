window.addEventListener('load', function() {
    window.parent.postMessage('Hello from iframe1', '*');
  });
  
  console.log('iframe1.js window.name:'+window.name);