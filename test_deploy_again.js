import { Client } from "basic-ftp";
import dotenv from "dotenv";
dotenv.config();

async function run() {
  const host = process.env.FTP_SERVER || "50.116.87.149";
  const user = process.env.FTP_USERNAME || "vessel.pixel@versselpixel.com";
  const password = process.env.FTP_PASSWORD;

  console.log(`Testing FTP connection with Host: ${host}, User: ${user}`);
  const client = new Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host,
      user,
      password,
      secure: false
    });
    console.log("✅ Success connecting to FTP!");
    const list = await client.list();
    console.log("Files list:", list.map(f => `${f.type === 2 ? '📁' : '📄'} ${f.name}`));
  } catch (err) {
    console.error("❌ Failed:", err.message);
  } finally {
    client.close();
  }
}

run();
