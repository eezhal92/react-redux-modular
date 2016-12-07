const server = require('../server');

module.exports = {
  'User can see book form': (client) => {
    client
      .url('http://localhost:9000')
      .pause(1000);

    client.expect.element('body').to.be.present.before(1000);
    // client.expect.element('#authorName').to.have.value.equal('');
    client.end(() => {
      server.close();
    });
  },
};
