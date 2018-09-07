import mongoose, { ConnectionOptions } from 'mongoose';

const connectionString = {
  cloud: 'mongodb+srv://itweb:fitness@cluster0-nyqu6.mongodb.net/test?retryWrites=true',
  local: 'mongodb://localhost:27017/Fitness',
};

const connectionOptions: ConnectionOptions = {
  useNewUrlParser: true,
};

mongoose.connect(
  connectionString.cloud,
  connectionOptions,
  error => {
    if (error) {
      // do something
    } else {
      // tslint:disable-next-line:no-console
      console.log('Connected to db');
    }
  },
);

export default mongoose;
