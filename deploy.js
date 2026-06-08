import { Client } from "basic-ftp";
import path from "path";
import dotenv from "dotenv";

// Carregar variáveis de ambiente se houver arquivo .env local
dotenv.config();

function sanitizeServer(server) {
  if (!server) return "";
  let clean = server.trim();
  clean = clean.replace(/^(ftp:\/\/|ftps:\/\/|https:\/\/|http:\/\/)/, "");
  clean = clean.replace(/\/$/, "");
  return clean;
}

async function startDeploy() {
  const host = sanitizeServer(process.env.FTP_SERVER);
  const user = process.env.FTP_USERNAME;
  const password = process.env.FTP_PASSWORD;
  let remoteDir = (process.env.FTP_DIR || "public_html").trim();

  if (!host || !user || !password) {
    console.error("\x1b[31m❌ Erro: Credenciais de FTP ausentes!\x1b[0m");
    console.log("\nPor favor, garanta que as seguintes variáveis de ambiente estão configuradas no painel Configurações do AI Studio (Secrets) ou em um arquivo .env:");
    console.log("  👉 \x1b[33mFTP_SERVER\x1b[0m (ex: ftp.versselpixel.com)");
    console.log("  👉 \x1b[33mFTP_USERNAME\x1b[0m (ex: luc78055)");
    console.log("  👉 \x1b[33mFTP_PASSWORD\x1b[0m");
    console.log("  👉 \x1b[33mFTP_DIR\x1b[0m (ex: public_html ou public_html/pasta)\n");
    process.exit(1);
  }

  // Garantir barra de formatação no diretório
  if (remoteDir && !remoteDir.endsWith("/")) {
    remoteDir += "/";
  }

  console.log("\n\x1b[36m🚀 Iniciando deploy direto do Workspace para HostGator...\x1b[0m");
  console.log(`  🔹 Conectando ao servidor: \x1b[34m${host}\x1b[0m`);
  console.log(`  🔹 Usuário FTP: \x1b[34m${user}\x1b[0m`);
  console.log(`  🔹 Diretório remoto de destino: \x1b[34m${remoteDir}\x1b[0m\n`);

  const client = new Client();
  // Mostra as interações reais FTP se houver depuração
  client.ftp.verbose = false;

  try {
    // Conectar ao FTP
    await client.access({
      host: host,
      user: user,
      password: password,
      secure: false
    });

    console.log("\x1b[32m✅ Conectado com sucesso ao servidor FTP!\x1b[0m");

    // Garantir que a pasta remota existe e navegar até ela
    console.log(`📂 Verificando/Criando a pasta remota de destino...`);
    await client.ensureDir(remoteDir);

    // Fazer o upload de todos os arquivos da pasta 'dist' local para o diretório remoto
    console.log("📤 Enviando todos os arquivos compilados da pasta \x1b[32m./dist\x1b[0m...");
    await client.uploadFromDir(path.resolve("dist"));

    console.log("\n\x1b[32m🎉 DEPLOY CONCLUÍDO COM SUCESSO DIRETO DO WORKSPACE!\x1b[0m");
    console.log("👉 Seu novo site React já foi enviado e atualizado na HostGator.\n");
  } catch (error) {
    console.error("\n\x1b[31m❌ Ocorreu um erro durante o deploy via FTP:\x1b[0m");
    console.error(`  ⚠️  Motivo: ${error.message || error}\n`);
    process.exit(1);
  } finally {
    client.close();
  }
}

startDeploy();
