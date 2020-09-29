const useTagScraper = items => {
  let tagItems = items.map(item => item.frontmatter.tags)
  let arrayItem = tagItems.reduce((accu, item) => accu.concat(item))
  let finalTags = []

  arrayItem.forEach(item => {
    if (finalTags.indexOf(item) === -1) {
      finalTags.push(item)
    }
  })

  return finalTags
}
export default useTagScraper
