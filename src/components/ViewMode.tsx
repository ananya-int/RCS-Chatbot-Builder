import React, { useState, useEffect } from 'react';
import {
  ReactFlow,
  Background,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { nodeTypes } from './nodes/NodeTypes';
import dummyData from '../data/cards.json'

const ViewMode: React.FC = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const fetchFlowData = async () => {
      try {
        /**
         * Assigns the `dummyData` to the `data` constant.
         * This is likely used to provide mock or placeholder data for the component.
         */
        const data = dummyData;
        
        setNodes(data.nodes);
        setEdges(data.edges);
      } catch (error) {
        console.error('Error loading flow data:', error);
      }
    };

    fetchFlowData();
  }, []);
  console.log("nodes", nodes);
  

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        fitView
      >
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default ViewMode;