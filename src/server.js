const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const cssHandler = require('./cssResponses.js');
const jsonHandler = require('./jsonResponses.js');
const xmlHandler = require('./xmlResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
//   console.log(`${request.url}   ${request.headers["content-type"]}`);
  const type = request.headers['content-type'];
  switch (request.url.split('?')[0]) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/style.css':
      cssHandler.getIndex(request, response);
      break;
    case '/success':
      if (type === 'text/xml') {
        xmlHandler.getSuccess(request, response);
      } else {
        jsonHandler.getSuccess(request, response);
      }
      break;
    case '/badRequest':
      if (type === 'text/xml') {
        xmlHandler.getBadRequest(request, response);
      } else {
        jsonHandler.getBadRequest(request, response);
      }
      break;
    case '/unauthorized':
      if (type === 'text/xml') {
        xmlHandler.getUnauthorized(request, response);
      } else {
        jsonHandler.getUnauthorized(request, response);
      }
      break;
    case '/forbidden':
      if (type === 'text/xml') {
        xmlHandler.getForbidden(request, response);
      } else {
        jsonHandler.getForbidden(request, response);
      }
      break;
    case '/internal':
      if (type === 'text/xml') {
        xmlHandler.getInternal(request, response);
      } else {
        jsonHandler.getInternal(request, response);
      }
      break;
    case '/notimplemented':
      if (type === 'text/xml') {
        xmlHandler.getNotImplemented(request, response);
      } else {
        jsonHandler.getNotImplemented(request, response);
      }
      break;
    default:
      if (type === 'text/xml') {
        xmlHandler.getNotFound(request, response);
      } else {
        jsonHandler.getNotFound(request, response);
      }
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1:${port}`);
