export function setUser (state, data) {
  if (data) {
    state.user = {
      id: data.appUserId,
      name: data.userName,
      roles: [data.role]
    }
  } else {
    state.user = null
  }
}
