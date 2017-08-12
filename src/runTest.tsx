import * as React from 'React';
import * as ReactTestRenderer from 'react-test-renderer';

const runTest = (
  description: string,
  Component: React.ComponentClass<any> | React.StatelessComponent<any>,
  props: any,
  state: any
) => {
  it(description, () => {
    const renderer = ReactTestRenderer.create(<Component {...props} />);

    if (state) {
      renderer.getInstance().setState();
    }

    expect(renderer.toJSON()).toMatchSnapshot();
  });
};

export default runTest;
