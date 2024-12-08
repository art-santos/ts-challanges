import here from "./index.html" with { type: "text" };

const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    const file = require("./index.html") 
    console.log("here", here)

    
    if (path === "/") {
      const html = "<html><body><h1>Welcome to Bun!</h1></body></html>";
      return new Response(html, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }
    
    // 404s
    return new Response("Page not found", { status: 404 });
  }
});

console.log(`Listening on ${server.url}`);