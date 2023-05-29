import localForage from 'localforage'

localForage.setDriver([localForage.INDEXEDDB, localForage.WEBSQL])

export const storage = localForage
