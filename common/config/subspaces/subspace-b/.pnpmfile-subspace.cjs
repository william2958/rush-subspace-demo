module.exports = {
  hooks: {
    readPackage
  }
}

function readPackage(packageJson, context) {
  if (packageJson.name === "libB") {
    packageJson.dependencies["lodash"] = "4.17.20"
  }

  return packageJson
}