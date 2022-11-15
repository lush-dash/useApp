import Matter from 'matter-js';
import { Dimensions } from 'react-native';
import Bird from '../components/Bird';
import Floor from '../components/Floor';
import Obstacle from '../components/Obstacle';

import { getPipeSizePosPair } from '../utils/random';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default (restart) => {
  const engine = Matter.Engine.create({ enableSleeping: false });

  const { world } = engine;

  world.gravity.y = 0.4;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9);
  return {
    physics: { engine, world },

    Bird: Bird(world, 'green', { x: 50, y: 300 }, { height: 35, width: 40 }),

    ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'rgb(70, 32, 171)', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size),
    ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', 'rgb(70, 32, 171)', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size),

    ObstacleTop2: Obstacle(world, 'ObstacleTop2', 'rgb(70, 32, 171)', pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size),
    ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', 'rgb(70, 32, 171)', pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size),

    Floor: Floor(world, 'grey', { x: windowWidth / 2, y: windowHeight }, { height: 1, width: windowWidth }),
  };
};
