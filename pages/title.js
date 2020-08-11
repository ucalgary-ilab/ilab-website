const getTitle = (person) => {
  if (person.title) return person
  switch (person.type) {
    case 'postdoc':
      person.title = 'Postdocotral Fellow'
      break
    case 'phd':
      person.title = 'PhD Student'
      break
    case 'master':
      person.title = 'MSc Student'
      break
    case 'undergrad':
      person.title = 'Undergraduate Student'
      break
    case 'visiting':
      person.title = 'Visiting Researcher'
      break
    case 'alumni':
      switch (person.past) {
        case 'postdoc':
          person.title = 'Alumni (PostDoc)'
          break
        case 'phd':
          person.title = 'Alumni (PhD)'
          break
        case 'master':
          person.title = 'Alumni (MSc)'
          break
        case 'undergrad':
          person.title = 'Alumni (Undergrad)'
          break
        case 'visiting':
          person.title = 'Alumni (Visiting)'
          break
    }
  }
  return person
}
