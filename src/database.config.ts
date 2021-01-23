import * as Config from 'config';
import * as _ from 'lodash';

// INVESTIGATE: Why we Need to deep clone? Because TypeOrm tries to extend this????
const dbConfig = _.cloneDeep(Config.get('database'));
const mongoConfig = _.cloneDeep(Config.get('mongo'));

export const getDatabaseConfig = (): object => {
  return dbConfig;
};

export const getMongoConfigUri = (): string => {
  return mongoConfig.uri;
};
export const getMongoConfigOptions = (): object => {
  return mongoConfig.options;
};
