import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const port = 3001

const mimeTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.ico', 'image/x-icon'],
])

const server = http.createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url, `http://${req.headers.host}`)
    let pathname = decodeURIComponent(requestUrl.pathname)

    if (pathname === '/') pathname = '/index.html'

    const filePath = path.normalize(path.join(root, pathname))
    if (!filePath.startsWith(root)) {
      res.writeHead(403)
      res.end('Forbidden')
      return
    }

    const data = await fs.readFile(filePath)
    const ext = path.extname(filePath).toLowerCase()
    res.writeHead(200, {
      'Content-Type': mimeTypes.get(ext) || 'application/octet-stream',
      'Cache-Control': 'no-store',
    })
    res.end(data)
  } catch {
    try {
      const fallback = await fs.readFile(path.join(root, 'index.html'))
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
      })
      res.end(fallback)
    } catch {
      res.writeHead(404)
      res.end('Not found')
    }
  }
})

server.listen(port, () => {
  console.log(`Bright Beginning is running at http://localhost:${port}`)
})
