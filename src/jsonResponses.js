const getSuccess = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });

  const message = { message: 'Successful response!' };

  response.write(JSON.stringify(message));
  response.end();
};
const getBadRequest = (request, response) => {
  const query = `${request.url.split('?', 2)[1]}`;

  if (query.includes('valid=true')) {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    const message = {
      message: 'Valid query parameters present',
    };

    response.write(JSON.stringify(message));
  } else {
    response.writeHead(400, { 'Content-Type': 'application/json' });

    const message = {
      id: 'Bad Request',
      message: 'Missing valid query parameters',
    };

    response.write(JSON.stringify(message));
  }

  response.end();
};
const getUnauthorized = (request, response) => {
  const query = `${request.url.split('?', 2)[1]}`;

  if (query.includes('loggedIn=yes')) {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    const message = {
      message: 'You are logged in',
    };

    response.write(JSON.stringify(message));
  } else {
    response.writeHead(400, { 'Content-Type': 'application/json' });

    const message = {
      id: 'Unauthorized',
      message: 'You must be logged in to view this content',
    };
    response.write(JSON.stringify(message));
  }
  response.end();
};
const getForbidden = (request, response) => {
  response.writeHead(403, { 'Content-Type': 'application/json' });

  const message = {
    id: 'Forbidden',
    message: 'You do not have access to this content',
  };

  response.write(JSON.stringify(message));
  response.end();
};
const getInternal = (request, response) => {
  response.writeHead(500, { 'Content-Type': 'application/json' });

  const message = {
    id: 'Internal Server Error',
    message: 'An error occured',
  };

  response.write(JSON.stringify(message));
  response.end();
};
const getNotImplemented = (request, response) => {
  response.writeHead(501, { 'Content-Type': 'application/json' });

  const message = {
    id: 'Not Implemented',
    message: 'This content has not been implemented yet',
  };

  response.write(JSON.stringify(message));
  response.end();
};
const getNotFound = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'application/json' });

  const message = {
    id: 'Not Found',
    message: 'Page does not exist',
  };

  response.write(JSON.stringify(message));
  response.end();
};

module.exports.getSuccess = getSuccess;
module.exports.getBadRequest = getBadRequest;
module.exports.getUnauthorized = getUnauthorized;
module.exports.getForbidden = getForbidden;
module.exports.getInternal = getInternal;
module.exports.getNotImplemented = getNotImplemented;
module.exports.getNotFound = getNotFound;
