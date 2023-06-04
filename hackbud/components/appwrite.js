import { Account, Databases, Client } from 'appwrite'

const api = () => {
    let appwrite = new Client()
    appwrite.setEndpoint('https://cloud.appwrite.io/v1')
    appwrite.setProject(process.env.NEXT_PUBLIC_PROJECT_ID)

    const account = new Account(appwrite)
    const databases = new Databases(appwrite)

    const getSession = async () => {
        const response = await sdk.account.getSessions()
        const sessions = response.sessions

        // Find the OAuth session
        const oAuthSession = sessions.find(
            (session) => session.type === 'oauth'
        )
        return oAuthSession
    }

    const deleteCurrentSession = () => {
        return account.deleteSession('current')
    }

    const listDocuments = (databaseId, collectionId) => {
        return databases.listDocuments(
            '6472e9626de7a4f0ed84',
            '6472e99701633339b475'
        )
    }

    return {
        appwrite,
        account,
        databases,
        getSession,
        listDocuments,
        deleteCurrentSession,
    }
}

//   getAccount: () => {
//     let account = appwrite.account;
//     return account.get();
//   },

//   createSession: (email, password) => {
//     return appwrite.account.createSession(email, password, ['*'], []);
//   },

//   createDocument: (databaseId, collectionId, data, read, write) => {
//     return api.provider().database.createDocument(databaseId, {
//       collectionId,
//       data,
//       read,
//       write,
//     });
//   },

//
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

export default api
