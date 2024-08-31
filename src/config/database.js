import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://cri2024:cri2024@cluster0.mswsapd.mongodb.net/clase2_cookie_session_2?retryWrites=true&w=majority&appName=Cluster0');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

export default db;
