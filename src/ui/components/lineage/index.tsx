import React, { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Controls,
} from 'react-flow-renderer';
import dagre from 'dagre';

import { initialNodes, initialEdges } from './initial-elements.js';
import ArtifactNode from './ArtifactNode';
import StepNode from './StepNode';

import './index.css';
import { Analysis, Data, Model, Schema, Service, Statistic } from './icons';

const placeholderData = {
  status: '',
  execution_id: '',
  entrypoint_name: '',
  name: '',
  parameters: {},
  inputs: {},
  outputs: {},
  is_cached: true,
  artifact_type: '',
  artifact_data_type: '',
  parent_step_id: '',
  producer_step_id: '',
  uri: '',
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (
  initialNodes: any[],
  edges: any[],
  direction = 'TB',
) => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  initialNodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  initialNodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? 'left' : 'top';
    node.sourcePosition = isHorizontal ? 'right' : 'bottom';

    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  initialEdges.forEach((edge) => {
    edge.type = isHorizontal ? 'straight' : '';
    return edge;
  });

  return { initialNodes, edges };
};

const {
  initialNodes: layoutedNodes,
  edges: layoutedEdges,
} = getLayoutedElements(initialNodes, initialEdges);

const nodeTypes = { step: StepNode, artifact: ArtifactNode };

export const LayoutFlow: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [legend, setLegend] = useState(false);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: ConnectionLineType.SmoothStep,
            animated: true,
          },
          eds,
        ),
      ),
    [],
  );
  const onLayout = useCallback(
    (direction) => {
      const {
        initialNodes: layoutedNodes,
        edges: layoutedEdges,
      } = getLayoutedElements(initialNodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges],
  );

  return (
    <>
      <div className="controls">
        <button onClick={() => onLayout('TB')}>Vertical Layout</button>
        <button onClick={() => onLayout('LR')}>Horizontal Layout</button>
        <button
          onClick={() => setLegend(!legend)}
          style={{ position: 'relative' }}
        >
          Legend
        </button>
        <div className="legend" style={{ display: legend ? '' : 'none' }}>
          <span>
            <Analysis /> <span>Data Analysis Artifact</span>
          </span>
          <span>
            <Data /> <span>Data Artifact</span>
          </span>
          <span>
            <Model /> <span>Model Artifact</span>
          </span>
          <span>
            <Schema /> <span>Schema Artifact</span>
          </span>
          <span>
            <Service /> <span>Service Artifact</span>
          </span>
          <span>
            <Statistic /> <span>Statistic Artifact</span>
          </span>
        </div>
      </div>
      <div className="layout">
        <div className="layoutflow">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            connectionLineType={ConnectionLineType.SmoothStep}
            nodeTypes={nodeTypes}
            onNodeClick={(event, node) => setSelectedNode(node.data)}
            // onNodeMouseEnter={(event, node) => setSelectedNode(node.data)}
            // onNodeMouseLeave={() => setSelectedNode(placeholderData)}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        <div className="detailsPositioning">
          <div className="detailsBox">
            <h3 className="detailsTitle">
              {selectedNode?.artifact_type ||
              selectedNode?.execution_id == '' ? (
                'Details'
              ) : (
                <span>
                  Status:{' '}
                  <span
                    style={
                      selectedNode?.status === 'completed'
                        ? { color: '#4ade80' }
                        : selectedNode?.status === 'failed'
                        ? { color: '#FF5C93' }
                        : selectedNode?.status === 'running'
                        ? { color: '#22BBDD' }
                        : selectedNode?.status === 'cached'
                        ? { color: '#4ade80' }
                        : { color: '#000' }
                    }
                  >
                    {selectedNode?.status}
                  </span>
                </span>
              )}
            </h3>
            {selectedNode ? (
              <div className="details">
                <div className="detailsInfo">
                  <p className="detailsLabel">
                    {selectedNode?.artifact_type
                      ? 'Artifact ID'
                      : 'Pipeline ID'}
                  </p>
                  <p className="detailsP">{selectedNode?.execution_id}</p>
                  <p className="detailsLabel">
                    {selectedNode?.artifact_type
                      ? 'Artifact Name'
                      : 'Pipeline Run Name'}
                  </p>
                  <p className="detailsP">
                    {selectedNode?.artifact_type
                      ? selectedNode?.name
                      : selectedNode?.entrypoint_name}
                  </p>
                  <p className="detailsLabel">
                    {selectedNode?.artifact_type ? 'Type' : 'Stack'}
                  </p>
                  <p className="detailsP">
                    {selectedNode?.artifact_type
                      ? selectedNode?.artifact_type
                      : 'PLACEHOLDER TEXT'}
                  </p>
                  <p className="detailsLabel">
                    {selectedNode?.artifact_type ? 'Data Types' : 'Inputs'}
                  </p>
                  <p className="detailsP URI">
                    {selectedNode?.artifact_type
                      ? selectedNode?.artifact_data_type
                      : Object.entries(selectedNode?.inputs || {}).map(
                          (value) => {
                            return value[0] + ': ' + value[1] + '\n';
                          },
                        )}
                  </p>
                  <p className="detailsLabel">
                    {selectedNode?.artifact_type ? 'URI' : 'Outputs'}
                  </p>
                  <p className="detailsP URI">
                    {selectedNode?.artifact_type
                      ? selectedNode?.uri
                      : Object.entries(selectedNode?.outputs || {}).map(
                          (value) => {
                            return value[0] + ': ' + value[1] + '\n';
                          },
                        )}
                  </p>
                  <p className="detailsLabel">
                    {selectedNode?.artifact_type ? 'Is Cached?' : 'Params'}
                  </p>
                  <p className="detailsP URI">
                    {selectedNode?.artifact_type
                      ? selectedNode?.is_cached
                        ? 'Yes'
                        : 'No'
                      : Object.entries(selectedNode?.parameters || {}).map(
                          (value) => {
                            return value[0] + ': ' + value[1] + '\n';
                          },
                        )}
                  </p>
                </div>
              </div>
            ) : (
              <div className="detailsNoNode">
                <p>Click on a node to see details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
