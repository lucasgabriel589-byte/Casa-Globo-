async function probeDeployUrls() {
  const urls = [
    "https://versselpixel.com/deploy",
    "https://versselpixel.com/deploy/",
    "https://versselpixel.com/deploy/index.html",
    "https://versselpixel.com/deploy/deploy_success.txt",
    "https://vesselpixel.com/deploy",
    "https://vesselpixel.com/deploy/",
    "https://vesselpixel.com/deploy/index.html",
    "https://vesselpixel.com/deploy/deploy_success.txt"
  ];

  for (const url of urls) {
    try {
      const res = await fetch(`${url}?cb=${Date.now()}`, {
        headers: { "Cache-Control": "no-cache", "Pragma": "no-cache" }
      });
      console.log(`URL: ${url}`);
      console.log(`  Status: ${res.status}`);
      const text = await res.text();
      console.log(`  Body length: ${text.length}`);
      console.log(`  Body start: "${text.substring(0, 150).trim().replace(/\n/g, " ")}"`);
    } catch (e) {
      console.log(`URL: ${url} Error: ${e.message}`);
    }
  }
}

probeDeployUrls();
