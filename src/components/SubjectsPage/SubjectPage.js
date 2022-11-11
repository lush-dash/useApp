import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '@ui-kitten/components';
import { setTopicsThunk } from '../../redux/actions/topicsActions';

export default function SubjectPage() {
  const topics = useSelector((state) => state.topics);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTopicsThunk());
  }, []);

  return (
    <Text>{topics[0]?.title}</Text>
  );
}

// по клику на предмет:
// onClick={()=>{
//   dispatch(setOptionsThunk(topicUrl))
// }}
