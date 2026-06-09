import { Client } from "basic-ftp";

async function listSubdomainFolder() {
  const host = "50.116.87.149";
  const user = "vessel.pixel@versselpixel.com";
  const password = process.env.FTP_PASSWORD;

  const client = new Client();
  try {
    await client.access({ host, user, password, secure: false });
    console.log("Connected as vessel.pixel!");

    const list = await client.list("public_html/versselpixel.com");
    console.log("Files inside public_html/versselpixel.com:");
    for (const f of list) {
      console.log(`- ${f.type === 2 ? '📁' : '📄'} ${f.name} (${f.size} bytes)`);
    }

  } catch (err) {
    console.size = 0;
    console.error("FTP failed:", err.message);
  } finally {
    client.close();
  }
}

listSubdomainFolder();
