async function fetchServerIndex() {
  const url = "https://versselpixel.com/server/index.ts";
  try {
    const res = await fetch(`${url}?cb=${Date.now()}`);
    console.log(`URL: ${url} -> Status: ${res.status}`);
    const text = await res.text();
    console.log(`Length: ${text.length}`);
    console.log(`Start: "${text.substring(0, 100).replace(/\n/g, " ")}"`);
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
}

fetchServerIndex();
