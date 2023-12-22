// phone regex
const testPhone = value => {
  const phoneParent = /^09\d{9}$/
  return phoneParent.test(value)
}

// password regex
const testPassword = value => {
  const passwordParent = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9]{6,20}$/g
  return passwordParent.test(value)
}

export default { testPassword, testPhone }
