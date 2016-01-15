var Koa  = require('koa')
var favicon = require('koa-favicon')
var convert = require('koa-convert')

// Create the app
var app = new Koa()

app.use(convert(favicon(__dirname + '/app/assets/images/favicon.ico')))

app.use(ctx => {
  ctx.res.writeHead(200, {'Content-Type': 'text/html'})
  ctx.res.end(renderPage())
})

// Listen!
app.listen(3333)

function renderPage() {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Geekbook</title>
        <link rel="shortcut icon" type="image/png" href="/app/assets/images/favicon.ico">
      </head>
      <body>
        <div id="react"></div>
        <script src="http://localhost:8881/app.js"></script>
      </body>
    </html>
  `
}
