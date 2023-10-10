const assetDir = await __TAURI__.path.appLocalDataDir() + "assets";
const assetFile = await __TAURI__.path.appLocalDataDir() + "assets/as.html";

console.log("asset dir" , assetDir);
await __TAURI__.fs.createDir(assetDir, {recursive: true});

console.log("asset file" , assetFile);
await __TAURI__.fs.writeTextFile(assetFile, "hello world from assets iframe");

const assetUrl = __TAURI__.convertFileSrc(assetFile);
console.log("asset url" , assetUrl);

document.getElementById("assetFrame").src = assetUrl;

fetch(assetUrl)
    .then(async data =>{
        console.log(await data.text())
    })
    .catch(console.error);