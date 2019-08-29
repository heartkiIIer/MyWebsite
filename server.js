const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
      sendFile( response, 'style.css' )
      break
    case '/font-awesome.min.css':
      sendFile( response, 'font-awesome.min.css' )
      break
    case '/bootstrap.min.css':
      sendFile( response, 'bootstrap.min.css' )
      break
    case '/app.js':
      sendFile( response, 'app.js' )
      break
    case '/custom.js':
      sendFile( response, 'custom.js' )
      break
    case '/effect.js':
      sendFile( response, 'effect.js' )
      break
    case '/jquery.js':
      sendFile( response, 'jquery.js' )
      break
    case '/bootstrap.min.js':
      sendFile( response, 'bootstrap.min.js' )
      break
    case '/particles.min.js':
      sendFile( response, 'particles.min.js' )
      break
    case '/jquery.parallax.js':
      sendFile( response, 'jquery.parallax.js' )
      break
    case '/assets/FontAwesome.otf':
      sendFile( response, 'assets/FontAwesome.otf' )
      break
    case '/assets/fontawesome-webfont.eot':
      sendFile( response, 'assets/ontawesome-webfont.eot' )
      break
    case '/assets/fontawesome-webfont.svg':
      sendFile( response, 'assets/fontawesome-webfont.svg' )
      break
    case '/assets/fontawesome-webfont.ttf':
      sendFile( response, 'assets/fontawesome-webfont.ttf' )
      break
    case 'fontawesome-webfont.woff':
      sendFile( response, 'assets/fontawesome-webfont.woff' )
      break
    case 'fontawesome-webfont.woff2':
      sendFile( response, 'https://cdn.glitch.com/c430d19e-e8ff-4c75-8fa6-7eb8f1506bc2%2Ffontawesome-webfont.woff2?v=1567056436974' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     filename = content
     response.end( content, 'utf-8' )
   })
}
