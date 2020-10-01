const useTagScraper = items => {
  if (typeof items === "string") {
    return items.split(/[\s]*,[\s]*/gi)
  } else {
    let joinedTags = items.join(", ")
    let arrayTags = joinedTags.split(/[\s]*,[\s]*/gi)
    let finalTags = []

    arrayTags.forEach(item => {
      if (finalTags.indexOf(item) === -1) {
        finalTags.push(item)
      }
    })

    return finalTags
  }
}
export default useTagScraper
