import SQLite from 'react-native-sqlite-2';
import replication from 'rxdb-utils/dist/replication';
import SQLiteAdapterFactory from 'pouchdb-adapter-react-native-sqlite';
import HttpAdapter from 'pouchdb-adapter-http';
import AsyncStorageAdapter from 'pouchdb-adapter-asyncstorage';
var RxDB = require('rxdb');
import expenseSchema from './schema';

const SQLiteAdapter = SQLiteAdapterFactory(SQLite);
RxDB.plugin(SQLiteAdapter);
RxDB.plugin(HttpAdapter); // enable syncing over http (remote database)
RxDB.plugin(AsyncStorageAdapter);
RxDB.plugin(replication);

var db = null;

export async function createDbInstance() {
  console.log('Creating DB instance');
  db = await RxDB.create({
    name: 'viatcsappdb', // <- nombre
    adapter: 'react-native-sqlite', // <- storage-adapter
    multiInstance: false, // <- multiInstance (optional, default: true)
    queryChangeDetection: true, // <- queryChangeDetection (optional, default: false)
    ignoreDuplicate: true,
  });
  return db;
}

export async function createCollection() {
  try {
    return await db.collection({
      name: 'gastos',
      schema: expenseSchema,
    });
  } catch (e) {
    // do something
  }
}

export async function getDocs() {
  return await db.gastos.find().exec();
}

export async function createDoc(doc) {
  await db.gastos.insert(doc);
}
