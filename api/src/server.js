import Server from 'socket.io';

export default function startserver(store){
    const io = new Server().attach(5000);

    store.subscribe(
        () => io.emit('state', store.getState().toJS())
    );

    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
        socket.on('action', store.dispatch.bind(store));
        console.log('listening on port 5000')
    })
}