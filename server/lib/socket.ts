import { Server } from 'socket.io';
import Logging from './Logging';

const rootSocket = (io: Server) => {
  const activePages = new Map();
  io.on('connection', (socket) => {
    socket.on('active-page', (page) => {
      activePages.set(socket.id, page);
      Logging.info(`Current active page: ${page}`);
      Logging.info(
        `Current List of active pages:
        ${JSON.stringify(Object.fromEntries(activePages))}`
      );
    });

    socket.on('disconnect', () => {
      activePages.delete(socket.id);
      Logging.error('Disconnected');
      Logging.info(
        `Current List of active pages:
        ${JSON.stringify(Object.fromEntries(activePages))}`
      );
    });
  });
};

export default rootSocket;
