const getSuccess = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/xml' });

  const message = '<response>'
                 + '<message>Successful response!</message>'
                 + '</response>';

  response.write(message);
  response.end();
};
const getBadRequest = (request, response) => {
  const query = `${request.url.split('?', 2)[1]}`;

  if (query.includes('valid=true')) {
    response.writeHead(200, { 'Content-Type': 'text/xml' });

    const message = '<response>'
      + '<message>Valid query parameters present</message>'
      + '</response>';

    response.write(message);
  } else {
    response.writeHead(400, { 'Content-Type': 'text/xml' });

    const message = '<response>'
      + '<message>Missing valid query parameters</message>'
   + '<id>Bad Request</id>'
      + '</response>';

    response.write(message);
  }

  response.end();
};
const getUnauthorized = (request, response) => {
  const query = `${request.url.split('?', 2)[1]}`;

  if (query.includes('loggedIn=yes')) {
    response.writeHead(200, { 'Content-Type': 'text/xml' });

    const message = '<response>'
      + '<message>You are logged in</message>'
      + '</response>';

    response.write(message);
  } else {
    response.writeHead(400, { 'Content-Type': 'text/xml' });

    const message = '<response>'
      + '<message>You must be logged in to view this content</message>'
   + '<id>Unauthorized</id>'
      + '</response>';

    response.write(message);
  }

  response.end();
};
const getForbidden = (request, response) => {
  response.writeHead(403, { 'Content-Type': 'text/xml' });

  const message = '<response>'
                 + '<message>You do not have access to this content</message>'
             + '<id>Forbidden</id>'
                 + '</response>';

  response.write(message);
  response.end();
};
const getInternal = (request, response) => {
  response.writeHead(500, { 'Content-Type': 'text/xml' });

  const message = '<response>'
                 + '<message>An error occured</message>'
             + '<id>Internal Server Error</id>'
                 + '</response>';

  response.write(message);
  response.end();
};
const getNotImplemented = (request, response) => {
  response.writeHead(501, { 'Content-Type': 'text/xml' });

  const message = '<response>'
                 + '<message>This content has not been implemented yet</message>'
             + '<id>Not Implemented</id>'
                 + '</response>';

  response.write(message);
  response.end();
};
const getNotFound = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/xml' });

  const message = '<response>'
                 + '<message>Page does not exist</message>'
             + '<id>Not Found</id>'
                 + '</response>';

  response.write(message);
  response.end();
};

module.exports.getSuccess = getSuccess;
module.exports.getBadRequest = getBadRequest;
module.exports.getUnauthorized = getUnauthorized;
module.exports.getForbidden = getForbidden;
module.exports.getInternal = getInternal;
module.exports.getNotImplemented = getNotImplemented;
module.exports.getNotFound = getNotFound;
