'use strict';

const mock = require('egg-mock');

describe('test/view-vuessr.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/view-vuessr-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, viewVuessr')
      .expect(200);
  });
});
