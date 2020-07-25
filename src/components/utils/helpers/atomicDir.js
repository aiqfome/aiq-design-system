export const atomicDir = file => {
  const filePath = file.split('/')

  const extractedFolders = filePath.slice(
    filePath.length - 3,
    filePath.length - 1
  )

  const finalPath = extractedFolders.reduce((accumulator, currentValue) => {
    return accumulator + '/' + currentValue
  })

  return finalPath
}
