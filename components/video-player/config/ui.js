import { ui as ShakaUI } from "shaka-player/dist/shaka-player.ui";
import {
  ForwardTenButton,
  RewindTenButton,
  VerticalVolume,
} from "shaka-player-ui-controls";

ShakaUI.Controls.registerElement(
  "vertical_volume",
  new VerticalVolume.Factory()
);

ShakaUI.Controls.registerElement("rewind_10", new RewindTenButton.Factory());
ShakaUI.Controls.registerElement("forward_10", new ForwardTenButton.Factory());

const uiConfig = {
  controlPanelElements: [
    "time_and_duration",
    "spacer",
    "rewind_10",
    "play_pause",
    "forward_10",
    "spacer",
    "vertical_volume",
    "fullscreen",
  ],
};

export default uiConfig;
