import {  Account, Database, Client } from 'appwrite'


let appwrite = new Client()
    appwrite.setEndpoint('https://cloud.appwrite.io/v1')
    appwrite.setProject(process.env.NEXT_PUBLIC_PROJECT_ID)

    const account = new Account(appwrite)
    const database = new Database(appwrite)


const api = () => {
  createAccount: (email, password, name) => {
    return appwrite.account.create(email, password, name);
  },

  getAccount: () => {
    let account = appwrite.account;
    return account.get();
  },

  createSession: (email, password) => {
    return appwrite.account.createSession(email, password, ['*'], []);
  },

//   deleteCurrentSession: () => {
//     return api.provider().account.deleteSession('current');
//   },

//   createDocument: (databaseId, collectionId, data, read, write) => {
//     return api.provider().database.createDocument(databaseId, {
//       collectionId,
//       data,
//       read,
//       write,
//     });
//   },

//   listDocuments: (databaseId, collectionId) => {
//     return api.provider().database.listDocuments(databaseId, collectionId);
//   },

//   updateDocument: (databaseId, collectionId, documentId, data) => {
//     return api.provider().database.updateDocument(databaseId, {
//       collectionId,
//       documentId,
//       data,
//     });
//   },

//   deleteDocument: (databaseId, collectionId, documentId) => {
//     return api.provider().database.deleteDocument(databaseId, {
//       collectionId,
//       documentId,
//     });
//   },
// };
}

export default api
