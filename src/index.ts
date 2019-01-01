import Pretender from 'pretender';

const server = new Pretender(function() {
  this.get('/photos/:id', request => {
    const id = request.params.id;
    const data = {
      url: `https://cdn.foobar.io/photos/${id}`,
    };
    return [200, {'Content-Type': 'application/json'}, JSON.stringify(data)];
  });
});

server.handledRequest = function(verb, path, request) {
  console.log(`[Pretender] A request was responded to: ${verb} ${path} ${JSON.stringify(request.params)}`);
}

window.fetch('/photos/33');

export default server;

