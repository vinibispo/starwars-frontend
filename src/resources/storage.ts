import localForage from 'localforage'

export const USER_KEY = '@starwars/user'

localForage.setDriver([localForage.INDEXEDDB, localForage.WEBSQL])

export const storage = localForage
