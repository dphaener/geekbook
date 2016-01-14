var Koa  = require('koa')

// Create the app
var app = new Koa()

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
        <title>Hello React</title>
      </head>
      <body>
        <div id="react"></div>
        <script src="http://localhost:8881/app.js"></script>
      </body>
    </html>
  `
}
