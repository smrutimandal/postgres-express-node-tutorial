//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let Todo = require('../server/models').Todo;

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Todo', () => {
  before((done) => {
    Todo
      .destroy({where: {}})
      .then(result => {return done()})
      .catch(err => {return done(err)});
  });
  /*
    * Test the /POST route
    */
    describe('todo APIs', () => {
      it('it should ADD a Todo', (done) => {
        chai.request(server)
          .post('/api/todos')
          .send({"title" : "test-todo"})
          .end((err, res) => {
            if(err) {
              return done(err);
            }
            res.should.have.status(201);  
            return done();
          });
      });

      it('it should GET all the Todos', (done) => {
        chai.request(server)
          .get('/api/todos')
          .then((res) => {
            res.should.have.status(200);
            res.body.should.be.an('array');
            return done();
          })
          .catch((err) => {
            return done(process.exit(1));
          });
      });
  });
});
