export const Player = () => {
  return (
    <div id="testPlayer" className="Sprite">
      <img src="/img/ProtagonistTest.webp" alt="" />
    </div>
  );
};

export const MitaTest = () => {
  return (
    <div id="test" className="Sprite">
      <img src="/img/kindMitaTest.png" alt="" />
      <div id="mitaCollider"></div>

      <div className="spriteMenu" id="mitaMenu">
        <img id="spriteMenuIcon" src="/img/kindMitaTestIcon.png" alt="" />
        <div className="spriteMenuHeader">
          {/* Containers of header */}
          <div className="LineIconContainer">
            <div id="happinessMenuLine">
              <div className="lineFill" id="happpinesMenuLineFill"></div>
            </div>

            <div className="menuIconContainer">
              <svg
                id="happinessMenuIcon"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15" r="15" fill="#E7D2E8" />
                <circle
                  cx="15"
                  cy="15"
                  r="10"
                  stroke="#805183"
                  stroke-width="2"
                />
                <path
                  d="M10.5 18C13.5 20.6667 16.875 20.6667 19.5 18"
                  stroke="#805183"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M10 14C10 12 13 12 13 14"
                  stroke="#805183"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M17 14C17 12 20 12 20 14"
                  stroke="#805183"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="LineIconContainer">
            <div id="foodMenuLine">
              <div className="lineFill" id="foodMenuLineFill"></div>
            </div>
            <div className="menuIconContainer">
              <svg
                id="foodMenuIcon"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="15" cy="15" r="15" fill="#E7D2E8" />
                <path
                  d="M15 15.7826C15 14.4632 16 14.5788 16 13.5836C16 12.8061 15 12.704 15 11.8244C15 11.1516 16 10.5864 16 9.5M16 9.5C16 8.79633 16 9.6466 16 9.5Z"
                  stroke="#805183"
                  stroke-width="0.7"
                />
                <path
                  d="M13 15.7826C13 14.4632 14 14.5788 14 13.5837C14 12.8061 13 12.704 13 11.8244C13 11.1517 14 11.0864 14 10M14 10C14 9.29633 14 10.1466 14 10Z"
                  stroke="#805183"
                  stroke-width="0.7"
                />
                <path
                  d="M17 15.7826C17 14.4632 18 14.5788 18 13.5836C18 12.8061 17 12.704 17 11.8244C17 11.1516 18 10.5864 18 9.5M18 9.5C18 8.79633 18 9.6466 18 9.5Z"
                  stroke="#805183"
                  stroke-width="0.7"
                />
                <path
                  d="M19.0905 23.9128C20.3769 23.6033 23.862 22.2416 24.8587 16.4834C24.9528 15.9399 24.5573 15.4424 24.0079 15.3935C22.4003 15.2504 18.9522 15 14.5 15C10.0478 15 6.59967 15.2504 4.99209 15.3935C4.44268 15.4424 4.04724 15.9399 4.14132 16.4834C5.13291 22.212 8.58744 23.5893 9.88953 23.9079C10.1384 23.9688 10.3016 24.2387 10.2115 24.4785C10.1168 24.7308 10.3032 25 10.5727 25H18.3042C18.5777 25 18.7801 24.7457 18.7189 24.4793C18.6608 24.2265 18.8384 23.9734 19.0905 23.9128Z"
                  fill="#805183"
                />
                <path
                  d="M26.9739 7.12469L13.4478 9.47828C13.3283 9.49908 13.2443 9.60739 13.2538 9.7283C13.2643 9.86056 13.3821 9.95795 13.5139 9.94338L27.1602 8.43563C27.5158 8.39634 27.776 8.08177 27.7478 7.72511C27.7171 7.33608 27.3584 7.05779 26.9739 7.12469Z"
                  fill="#805183"
                />
                <path
                  d="M27.274 9.54048L13.5716 10.3995C13.4505 10.4071 13.3551 10.5056 13.3514 10.6268C13.3473 10.7594 13.4537 10.8691 13.5864 10.8691L27.3157 10.8639C27.6735 10.8638 27.9665 10.5796 27.9776 10.222C27.9896 9.83194 27.6635 9.51606 27.274 9.54048Z"
                  fill="#805183"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="spriteMenuContent">
          <div id="spriteMenuMeasureLine"></div>

          <div className="spriteMenuButton" id="talk">
            Поговорить
          </div>

          <div className="spriteMenuButton" id="follow">
            "Идём за мной!"
          </div>
        </div>
      </div>
    </div>
  );
};
