
import React from 'react';
import { useParams } from 'react-router-dom';
import CoursePlayer from '@/components/course/CoursePlayer';

const CoursePlayerPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  return (
    <CoursePlayer 
      courseId={courseId || '1'} 
      courseName="Advanced Financial Modeling"
    />
  );
};

export default CoursePlayerPage;
