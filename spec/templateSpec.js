var request = require("request");
var server = require("../server.js");
var fs = require('fs');
var marked = require('marked');
var base_url = "http://localhost:5000/";

describe("Verify valid urls and content", function() {

  describe("GET /about-page", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + 'about-page', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it("contains correct index.md information", function(done) {
      request.get(base_url + 'about-page', function(error, response, body) {
        fs.readFile('content/about-page/index.md', 'utf8', (err, mdText) => {
          if (err) {
            throw err;
          }
          let html = marked(mdText);
          expect(body).toContain(html);
          done();
        });
      });
    });
  });

  describe("GET /jobs", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + 'jobs', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it("contains correct index.md information", function(done) {
      request.get(base_url + 'jobs', function(error, response, body) {
        fs.readFile('content/jobs/index.md', 'utf8', (err, mdText) => {
          if (err) {
            throw err;
          }
          let html = marked(mdText);
          expect(body).toContain(html);
          done();
        });
      });
    });
  });

  describe("GET /valves", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + 'valves', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it("contains correct index.md information", function(done) {
      request.get(base_url + 'valves', function(error, response, body) {
        fs.readFile('content/valves/index.md', 'utf8', (err, mdText) => {
          if (err) {
            throw err;
          }
          let html = marked(mdText);
          expect(body).toContain(html);
          done();
        });
      });
    });
  });

  // This test verifies that the 'marked' function is performing correctly, by checking against a literal string of html
  describe("GET /test", function() {
    it("returns status code 200", function(done) {
      request.get(base_url + 'test', function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it("contains correct index.md information", function(done) {
      request.get(base_url + 'test', function(error, response, body) {
        let html = '<h1 id="this-is-a-test-heading">This is a test heading</h1> <p>First paragraph.</p> <p>Second paragraph.</p>';
        let bodyRemoveSpace = body.replace(/\s+/g, " ");
        expect(bodyRemoveSpace).toContain(html);
        done(); 
      });
    });
  });

  // Testing for 404 status code for invalid urls
  describe("GET invalid url", function() {
    it("returns status code 404", function(done) {
      request.get(base_url || base_url + 'some-invalid-path', function(error, response, body) {
        expect(response.statusCode).toBe(404);
        done();
      });
    });
  });

});