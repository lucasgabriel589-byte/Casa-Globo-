import { Client } from "basic-ftp";
import dotenv from "dotenv";
dotenv.config();

async function run() {
  const host = process.env.FTP_SERVER || "50.116.87.149";
  const user = process.env.FTP_USERNAME || "luc78055";
  const password = process.env.FTP_PASSWORD;

  console.log(`Connecting to FTP as master user: ${user} on server: ${host}`);
  const client = new Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host,
      user,
      password,
      secure: false
    });
    console.log("✅ Connection Successful!");
    
    console.log("Listing current directories of the root account...");
    const list = await client.list();
    console.log("Files/Folders in root FTP server:");
    if (list.length === 0) {
      console.log(" (Directory is empty)");
    } else {
      for (const file of list) {
        console.log(`- ${file.type === 2 ? '📁' : '📄'} ${file.name} (${file.size} bytes)`);
      }
    }
  } catch (err) {
    console.error("❌ FTP Error during test:", err.message);
  } finally {
    client.close();
  }
}

run();
