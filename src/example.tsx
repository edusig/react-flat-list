import * as React from 'react';

export const ExampleComponent: React.FC = ({ text }: { text?: string }) => {
  return <p>{text ?? 'Example paragraph'}</p>;
};
