import React from 'react';
import Link from './link';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Link/>
    </DndProvider>
  );
}

export default App;