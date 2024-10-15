import { Spin } from "antd";

function Preloader(): React.JSX.Element {
  const contentStyle: React.CSSProperties = {
    padding: 50,
    borderRadius: 4,
    backgroundColor: "var(--black)"
  };

  return (
    <section>
      <Spin tip="Loading ..." size="large">
        <div style={contentStyle} />
      </Spin>
    </section>
  );
}

export default Preloader;
