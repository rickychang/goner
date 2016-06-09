# goner

A barebones Node.js app using [Express 4](http://expressjs.com/) that returns 410 status codes for all requests (except robots.txt).

Why I did build this? Well, if you accidentally allow google to index a site (or subdomain) the only way to signal them that they should remove it from the index is to return 410s. They will continue to try to reindex pages that 404 for a long time it seems.
