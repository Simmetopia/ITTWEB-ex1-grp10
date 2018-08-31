import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/Fitness', (error) => {
    if(error) {
        // do something
    } else {
        console.log('Connected to db');
    }
});

export default mongoose;