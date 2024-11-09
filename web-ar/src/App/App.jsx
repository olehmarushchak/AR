import { QrCode } from "../components/QrCode/QrCode";
import { Bottom } from "../module/bottom/Bottom";
import { Frame } from "../module/frame/Frame";
import Top from "../module/top/Top";
import { useStore } from "../store/store";
import "./App.scss";

export const App = () => {
  const { qrCode } = useStore();

  return (
    <div className="App">
      <Top />

      <div style={{ display: !qrCode ? "block" : "none" }}>
        <Frame key={"frame"} />
      </div>

      <div style={{ display: qrCode ? "block" : "none" }}>
        <QrCode key={"qrcode"} />
      </div>

      <Bottom />
    </div>
  );
};
