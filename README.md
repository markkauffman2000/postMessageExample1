Five files demonstrating communication between iFrames via postMessage.

index.html : The setup, message driver, and relay of postMessage between iframes. Sends 'Hello back from iframe 1' to iframe2 after it gets a 'Hello from iframe1' message from iframe1.

iframe1.html hosts the iframe1.js script that kicks off the messaging with 'Hello from iframe1'. This is the first message to be posted.

iframe2.html hosts the iframe2.js script that registers an event listener that listens for a 'Hello back from iframe1' message and does a console.log when it gets that.


