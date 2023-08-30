import { StyleSheet, View } from 'react-native';

import { Colors } from '../styles/colors';
import { Coordinate } from '../types/types';
import { Fragment } from 'react';
import React from 'react';

interface SnakeProps {
    snake: Coordinate[];
}

export default function Snake({snake}:SnakeProps): JSX.Element {
  return (
    <Fragment>
      {snake.map((segment:Coordinate, index:number) => {
        const segmentStyle = {
          left: segment.x * 10,
          top: segment.y * 10,
        };
        return <View key={index} style={[styles.snake, segmentStyle]} />;
      })}  
    </Fragment>
  );
}

const styles = StyleSheet.create({
  snake: {
    width: 10,
    height: 10,
    backgroundColor: Colors.primary,
    position: 'absolute',
    borderRadius: 7,
  }
});