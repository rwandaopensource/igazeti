import { NextComponentType } from 'next';

const Scroll: NextComponentType = (props: any) => {
  return (
    <div style={{ overflow: 'scroll', height: '90vh'}}>
      {props.children}
    </div>
  );
};

export default Scroll;