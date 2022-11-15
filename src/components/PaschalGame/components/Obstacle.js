import Matter from 'matter-js';
import React from 'react';
import { Image, View } from 'react-native';

function Obstacle(props) {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  const { color } = props;

  return (
    <View style={{
      borderTopWidth: 10,
      borderTopColor: 'rgb(39, 237, 255)',
      borderBottomWidth: 10,
      borderBottomColor: 'rgb(39, 237, 255)',
      borderWidth: 2,
      borderColor: 'rgb(39, 237, 255)',
      borderStyle: 'solid',
      position: 'absolute',
      left: xBody,
      top: yBody,
      width: widthBody,
      height: heightBody,
      backgroundColor: color,
    }}
    />
  );
}

export default (world, label, color, pos, size) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label,
      isStatic: true,
    },
  );
  Matter.World.add(world, initialObstacle);

  return {
    body: initialObstacle,
    color,
    pos,
    renderer: <Obstacle />,
  };
};
