Solution for Static Content Challenge
=====================================

The challenge here is to create a node.js application that displays HTML pages at URLs that match the names of the folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content.

# Getting Started 

Note: Assumes you have Node.js installed (to install follow steps here: https://nodejs.org/en/)

Step 1: Download files and save in directory

Step 2: Need to install dependencies from package.json. 

    $ npm install 

# Dependencies 

(all included in package.json file)

- Express (https://expressjs.com/)
- Mustache-Express (https://www.npmjs.com/package/mustache-express)
- Jasmine (https://jasmine.github.io/)
- Request (https://www.npmjs.com/package/request)
- Marked (https://www.npmjs.com/package/marked)

# Run 

    $ node server.js

Note: Listens on port 5000

# Testing 

To run tests: 

    $ npm test

There are 9 tests 

- 3 for each of the valid URL ('/about-page', '/jobs', '/valves') which tests the status code is 200
- 3 for each of the value URLs which tests they are displaying the correct index.md content
- 2 to test the 'test/index.md' data which confirms the HTML served matches a pre-checked HTML literal string.  This tests that the server is making use of the 'marked' library correctly.
- 1 test for invalid pages which tests the status code is 404.

# Note

- Added an additional `{}` to `{{content}}` inside the template.html file.  This is to avoid mustache's escaping of HTML.

