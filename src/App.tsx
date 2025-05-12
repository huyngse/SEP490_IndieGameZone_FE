import { Button, Steps } from "antd";
import MaxWidthWrapper from "./components/max-width-wrapper";
const description = 'This is a description.';

function App() {
  return (
    <MaxWidthWrapper>
      <div className="text-center p-5">
        <h1 className="text-5xl font-bold">IndieGameZone</h1>
      </div>
      <Button type="primary" className="mb-5">Click me!</Button>
      <Steps
        current={1}
        items={[
          {
            title: "Finished",
            description,
          },
          {
            title: "In Progress",
            description,
            subTitle: "Left 00:00:08",
          },
          {
            title: "Waiting",
            description,
          },
        ]}
      />
    </MaxWidthWrapper>
  );
}

export default App;
