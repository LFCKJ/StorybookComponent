// Divider.stories.jsx

import Divider from '../component/Divider';
import Text from "../component/Text";

export default {
  title: "Component/Divider",
  component: Divider,
};

export const Horizontal = () => {
  return (
    <>
      <Text>위</Text>
      <Divider type="horizontal" />
      <Text>아래</Text>
    </>
  );
};

export const Vertical = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Text>왼쪽</Text>
      <Divider type="vertical" />
      <Text>오른쪽</Text>
    </div>
  );
};
