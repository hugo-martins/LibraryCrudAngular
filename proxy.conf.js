const PROXY_CONFIG = [
  {

    context:['/book-microservice-service'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  },{
    context:['/client-microservice-service'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  },{
    context:['/sale-microservice-service'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  }

];

module.exports =  PROXY_CONFIG;
