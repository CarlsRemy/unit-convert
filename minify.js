const fs = require("fs").promises;
const path = require("path");
const { exec } = require("child_process");

const subDirs = ["", "converters/"];

const minifyFile = async (inputFile, outputFile) => {
  return new Promise((resolve, reject) => {
    const command = `terser "${inputFile}" --compress --mangle --output "${outputFile}"`;
    console.log(command);
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error al minificar ${inputFile}:`, stderr);
        reject(error);
      } else {
        console.log(`Archivo minificado: ${outputFile}`);
        resolve(stdout);
      }
    });
  });
};

const processFilesInDir = async (dir, subDir) => {
  try {
    const files = await fs.readdir(dir );
    for (const file of files) {

      if (file.endsWith(".ts") && !file.endsWith(".min.js")) {
        const inputFile = path.join("dist/", subDir, file.replace(".ts",".js"));
        const outputFile = path.join("dist/",subDir, file.replace(".ts", ".min.js"));

        await minifyFile(inputFile, outputFile);
      }
    }
  } catch (error) {
    console.error(`Error procesando el directorio ${dir}:`, error);
  }
};

const processFilesMinJS = async (dir) => {
  try {
    const files = await fs.readdir(dir );
    for (const file of files) {

      if (file.endsWith(".min.js")) {
        const filePath = path.join(dir, file);
        const content = await fs.readFile(filePath, "utf-8");
        const minified = content.replace(/\.js/g, ".min.js");
        await fs.writeFile(filePath, minified);
      }
    }
  } catch (error) {
    console.error(`Error procesando el directorio ${dir}:`, error);
  }
};

const main = async () => {
  for (const subDir of subDirs) {
    const fullPath = path.resolve(__dirname, "src", subDir);
    console.log(`Procesando Subdirectorio: /${subDir}`);
    await processFilesInDir(fullPath, subDir);

    const fullPath2 = path.resolve(__dirname, "dist", subDir);
    await processFilesMinJS(fullPath2);

     console.log("");
  }
};

main()
  .then(() => console.log("Minificación completada."))
  .catch((err) => console.error("Error en la minificación:", err));