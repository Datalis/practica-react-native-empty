import SQLite from 'react-native-sqlite-2';
import replication from 'rxdb-utils/dist/replication';
import SQLiteAdapterFactory from 'pouchdb-adapter-react-native-sqlite';
import HttpAdapter from 'pouchdb-adapter-http';
import AsyncStorageAdapter from 'pouchdb-adapter-asyncstorage';
var RxDB = require('rxdb');
import expenseSchema from './schema';
import {updateExpenses} from '../redux/actions/expenseActions';
import store from '../redux/store';

const SQLiteAdapter = SQLiteAdapterFactory(SQLite);
RxDB.plugin(SQLiteAdapter);
RxDB.plugin(HttpAdapter); // enable syncing over http (remote database)
RxDB.plugin(AsyncStorageAdapter);
RxDB.plugin(replication);

let REPLICATION_ENDPOINT =
  'http://admin:ohMie4zi0ood8x@116.203.152.218:5984/practica_native_db/';

var db = null;
var liveRep;

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

export function replicate() {
  let collections = ['gastos'];
  let options = {live: true, retry: true, _conflicts: true};
  let direction = {pull: true, push: true};

  liveRep = db.replicate(
    REPLICATION_ENDPOINT,
    collections,
    direction,
    options, // sync-options (optional) from https://pouchdb.com/api.html#replication
  );

  liveRep.connect();
}

export function suscribeToCollectionChanges() {
  let query = db.gastos.find({});

  // todo: a esto hay qeu ponerle unsuscribe
  query.$.subscribe(async res => {
    store.dispatch(updateExpenses(res))
  });
}
