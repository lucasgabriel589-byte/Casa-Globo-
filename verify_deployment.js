async function verifyDeployment() {
  // Let's wait a small bit for HostGator Passenger to register the restart.txt and reboot.
  console.log("Waiting 3.5 seconds for remote server restart...");
  await new Promise(r => setTimeout(r, 3500));

  const urls = [
    "https://versselpixel.com/",
    "https://versselpixel.com/assets/index-D9YJOVDn.css",
    "https://versselpixel.com/index.html"
  ];

  for (const url of urls) {
    try {
      const res = await fetch(`${url}?cb=${Date.now()}`, {
        headers: { "Cache-Control": "no-cache", "Pragma": "no-cache" }
      });
      console.log(`URL: ${url}`);
      console.log(`  Status: ${res.status}`);
      console.log(`  Content-Type: ${res.headers.get("content-type")}`);
      const text = await res.text();
      console.log(`  Length: ${text.length}`);
      console.log(`  Body start: "${text.substring(0, 200).trim().replace(/\n/g, " ")}"`);
    } catch (e) {
      console.log(`URL: ${url} Error: ${e.message}`);
    }
  }
}

verifyDeployment();
