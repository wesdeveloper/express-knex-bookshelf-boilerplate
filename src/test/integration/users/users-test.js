describe('Users tests', () => {
  it('Should return all users /users GET', (done) => {
    request
      .get('/users')
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        done(err);
      });
  });
});
