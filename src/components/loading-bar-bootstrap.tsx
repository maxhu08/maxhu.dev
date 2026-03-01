import {
  RELOAD_LOADING_BAR_ID,
  RELOAD_LOADING_BAR_STYLE_ID,
  RELOAD_PENDING_KEY
} from "~/components/loading-bar-constants";

const reloadLoadingBarBootstrap = `
  try {
    if (window.sessionStorage.getItem("${RELOAD_PENDING_KEY}") === "1") {
      if (!document.getElementById("${RELOAD_LOADING_BAR_STYLE_ID}")) {
        const style = document.createElement("style");
        style.id = "${RELOAD_LOADING_BAR_STYLE_ID}";
        style.textContent = "#${RELOAD_LOADING_BAR_ID}{position:fixed;top:0;left:0;z-index:1600;height:3px;width:100%;transform-origin:left center;background:#14b8a6;box-shadow:0 0 10px #14b8a6,0 0 5px #14b8a6;animation:reload-loading-bar 0.7s cubic-bezier(0.2,0.8,0.2,1) forwards}@keyframes reload-loading-bar{0%{transform:scaleX(0.45)}70%{transform:scaleX(0.88)}100%{transform:scaleX(0.94)}}";
        document.head.appendChild(style);
      }

      if (!document.getElementById("${RELOAD_LOADING_BAR_ID}")) {
        const bar = document.createElement("div");
        bar.id = "${RELOAD_LOADING_BAR_ID}";
        document.body.appendChild(bar);
      }
    }
  } catch {}
`;

export function LoadingBarBootstrap() {
  return (
    <script
      id="reload-loading-bar-bootstrap"
      dangerouslySetInnerHTML={{ __html: reloadLoadingBarBootstrap }}
    />
  );
}
