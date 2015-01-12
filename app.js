var page = require('webpage').create();

page.open('invoice.html', function() {
  page.render('invoice.pdf');
  phantom.exit();
});

