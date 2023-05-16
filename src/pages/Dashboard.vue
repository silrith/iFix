<template>
  <div class="dashBoardBody col-12">
    <div class="dashBoardContainer">
      <div class="menu">
        <div class="dashboardAvatar">
          <img
            class="thumb"
            src="https://avatars.githubusercontent.com/u/30212452"
            width="60"
          />
          <span class="name">@Berk Ozerdogan</span>
        </div>
        <nav class="primary">
          <a href="#" class="menu-item">
            <span class="iconoir-report-columns"></span>
            <span class="desc">Dashboard</span>
          </a>
          <a href="#" class="menu-item">
            <span class="iconoir-google-docs"></span>
            <span class="desc">Reports</span>
          </a>
          <a href="#" class="menu-item">
            <span class="iconoir-report-columns"></span>
            <span class="desc">Users</span>
          </a>
          <a href="#" class="menu-item">
            <span class="iconoir-report-columns"></span>
            <span class="desc">Products</span>
          </a>
          <a href="#" class="menu-item">
            <span class="iconoir-report-columns"></span>
            <span class="desc">Campains</span>
          </a>
          <a href="#" class="menu-item">
            <span class="iconoir-table"></span>
            <span class="desc">Stats</span>
          </a>
          <a href="#" class="menu-item">
            <span class="iconoir-bag"></span>
            <span class="desc">Cart</span>
          </a>
          <a href="#" class="menu-item">
            <span class="iconoir-user"></span>
            <span class="desc">Clients</span>
          </a>
          <a href="#" class="menu-item">
            <span class="iconoir-leaderboard"></span>
            <span class="desc">Analytics</span>
          </a>
          <a href="#" class="menu-item">
            <span class="iconoir-settings"></span>
            <span class="desc">Settings</span>
          </a>
        </nav>
        <span class="expander iconoir-arrow-right"></span>
      </div>
      <div class="topbar">
        <h1 class="current">Dashboard</h1>
        <span class="search">
          <label><span class="iconoir-search"></span></label>
          <input class="bar" type="text" placeholder="Search..." />
        </span>
        <nav>
          <a href="#" class="menu-item">Orders</a>
          <a href="#" class="menu-item">Clients</a>
          <a href="#" class="menu-item">Sections</a>
          <a href="#" class="menu-item">Products</a>
        </nav>
      </div>
      <div class="dashboard">
        <div class="cardcolumn">
          <div class="card">
            <header>
              <a class="title" href="#"></a>
              <span class="iconoir-more-vert"></span>
            </header>
            <div class="content"></div>
            <div class="meta">
              <span class="iconoir-pin"></span>
              <span class="iconoir-eye-off"></span>
              <span class="iconoir-share-ios"></span>
            </div>
          </div>
          <div class="card">
            <header>
              <a class="title" href="#"></a>
              <span class="iconoir-more-vert"></span>
            </header>
            <div class="content"></div>
            <div class="meta">
              <span class="iconoir-pin"></span>
              <span class="iconoir-eye-off"></span>
              <span class="iconoir-share-ios"></span>
            </div>
          </div>
        </div>
        <div class="cardcolumn">
          <div class="card">
            <header>
              <a class="title" href="#"></a>
              <span class="iconoir-more-vert"></span>
            </header>
            <div class="content"></div>
            <div class="meta">
              <span class="iconoir-pin"></span>
              <span class="iconoir-eye-off"></span>
              <span class="iconoir-share-ios"></span>
            </div>
          </div>
          <div class="card">
            <header>
              <a class="title" href="#"></a>
              <span class="iconoir-more-vert"></span>
            </header>
            <div class="content"></div>
            <div class="meta">
              <span class="iconoir-pin"></span>
              <span class="iconoir-eye-off"></span>
              <span class="iconoir-share-ios"></span>
            </div>
          </div>
        </div>
        <div class="cardcolumn">
          <div class="card">
            <header>
              <a class="title" href="#"></a>
              <span class="iconoir-more-vert"></span>
            </header>
            <div class="content"></div>
            <div class="meta">
              <span class="iconoir-pin"></span>
              <span class="iconoir-eye-off"></span>
              <span class="iconoir-share-ios"></span>
            </div>
          </div>
          <div class="card">
            <header>
              <a class="title" href="#"></a>
              <span class="iconoir-more-vert"></span>
            </header>
            <div class="content"></div>
            <div class="meta">
              <span class="iconoir-pin"></span>
              <span class="iconoir-eye-off"></span>
              <span class="iconoir-share-ios"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="side">
        <div class="card weather">
          <img
            class="condition"
            src="https://user-images.githubusercontent.com/30212452/203724734-5f748507-7ae4-49f9-89f8-7fce3112cd95.png"
          />
          <div class="content"></div>
          <div class="meta">
            <span class="location column">
              <span class="iconoir-pin-alt"></span>
              Athens, GR
            </span>
            <div class="datetime column">
              <span class="iconoir-calendar"></span>
              <span class="date">{{ new Date() }}</span>
              <span class="time">5:01</span>
            </div>
          </div>
        </div>
        <div class="card">
          <header>Schedule</header>
          <div class="content">
            <ul>
              <li>(15:30) Deliver the project to client</li>
              <li>(18:00) Meet Mike @ White Goose</li>
              <li>(19:30) Dinner with Mary @ Kit-Bar</li>
              <li>(22:00) Watch the Falcons match</li>
              <li>(23:30) Headspace Meditate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="video">
      <video
        src="https://user-images.githubusercontent.com/30212452/203724691-9e93bf50-df02-4034-9743-dfe32d18bf58.mp4"
        muted
        playsinline
        autoplay
        loop
      ></video>
    </div>
  </div>
</template>

<style>
:root {
  --font: "Montserrat", system-ui, sans-serif;
  --max-width: 1400px;
  --i-padding: 0.6rem;
  --o-padding: 1.6rem;
  --radius: 10px;
  --max-radius: 40px;
  --c-lighter: #b1d0e050;
  --c-light: #b1d0e050;
  --c-medium: #6998ab60;
  --c-dark: #40688290;
  --c-darker: #40688260;
  --c-elements: #b1d0e0;
  --c-bg-elements: #0004;
  --c-card-main: #b1d0e090;
  --c-card-side: #b1d0e040;
}

.active {
  background: var(--c-bg-elements);
}

.dashBoardBody {
  margin: 0;
  font-family: var(--font);
  color: #fefefe;
  background-color: transparent;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  z-index: 2;
}
.dashBoardBody .video {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -1;
  right: 0;
  bottom: 0;
}
.dashBoardBody .video video {
  -o-object-fit: cover;
  object-fit: cover;
}

.dashBoardContainer {
  width: 100%;
  margin: 0 auto;
}

.dashBoardContainer {
  width: 100%;
  display: -ms-grid;
  display: grid;
  position: relative;
}

.dashBoardContainer .menu {
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--c-darker);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 62px;
  height: 100%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: var(--i-padding);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 2;
  -webkit-backdrop-filter: blur(1rem);
  backdrop-filter: blur(1rem);
  border-right: solid 1px var(--c-lighter);
}
.dashBoardContainer .menu:hover,
.dashBoardContainer .menu:active {
  width: 200px;
  border-radius: 0 var(--radius) var(--radius) 0;
}
.dashBoardContainer .menu .dashboardAvatar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 10px;
}
.dashBoardContainer .menu .dashboardAvatar .thumb {
  border-radius: 50%;
  width: 100%;
  max-width: 40px;
}
.dashBoardContainer .menu .dashboardAvatar .name {
  color: var(--c-elements);
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.dashBoardContainer .menu:hover .dashboardAvatar .name,
.dashBoardContainer .menu:active .dashboardAvatar .name {
  opacity: 1;
  visibility: visible;
}
.dashBoardContainer .menu .primary {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
}
.dashBoardContainer .menu .primary .menu-item {
  font-weight: 400;
  text-decoration: none;
  color: var(--c-elements);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.dashBoardContainer .menu:hover .primary .menu-item,
.dashBoardContainer .menu:active .primary .menu-item {
  width: 100%;
  border-radius: var(--max-radius);
}
.dashBoardContainer .menu .primary .menu-item:hover {
  background: var(--c-bg-elements);
}
.dashBoardContainer .menu .primary .menu-item span:first-child {
  font-size: 21px;
}
.dashBoardContainer .menu .primary .menu-item .desc {
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.dashBoardContainer .menu:hover .primary .menu-item .desc,
.dashBoardContainer .menu:active .primary .menu-item .desc {
  opacity: 1;
  visibility: visible;
}
.dashBoardContainer .menu .expander {
  color: var(--c-elements);
  font-size: 24px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.dashBoardContainer .menu:hover .expander,
.dashBoardContainer .menu:active .expander {
  -webkit-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

.dashBoardContainer .topbar {
  position: fixed;
  left: 0;
  top: 0;
  width: calc(100% - 62px);
  margin-left: 62px;
  height: 60px;
  z-index: 1;
  background: var(--c-dark);
  border-bottom: solid 1px var(--c-lighter);
  -webkit-backdrop-filter: blur(1rem);
  backdrop-filter: blur(1rem);
  padding: 0 var(--o-padding);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  gap: 10px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.dashBoardContainer .topbar .current {
  color: var(--c-elements);
  font-size: 24px;
  font-weight: 700;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.dashBoardContainer .topbar .search {
  cursor: pointer;
  color: var(--c-elements);
  border-radius: 50%;
  max-width: 40px;
  width: 100%;
  height: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: auto;
  overflow: hidden;
  position: relative;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.dashBoardContainer .topbar .search:hover,
.dashBoardContainer.search .topbar .search {
  background: var(--c-bg-elements);
}
.dashBoardContainer.search .topbar .search {
  border-radius: var(--max-radius);
  max-width: 200px;
  cursor: default;
}
.dashBoardContainer .topbar .search label {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 1;
  font-size: 24px;
  cursor: inherit;
}
.dashBoardContainer .topbar .search .bar {
  color: var(--c-elements);
  background: unset;
  width: 100%;
  padding: 1px 10px 0 34px;
  font-size: 16px;
  border: unset;
  outline: none;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.dashBoardContainer .search .topbar .search .bar {
  opacity: 1;
  visibility: visible;
  touch-action: none;
}
.dashBoardContainer .topbar .search .bar::-webkit-input-placeholder {
  font-family: var(--font);
  color: var(--c-elements);
}
.dashBoardContainer .topbar .search .bar::-moz-placeholder {
  font-family: var(--font);
  color: var(--c-elements);
}
.dashBoardContainer .topbar .search .bar:-ms-input-placeholder {
  font-family: var(--font);
  color: var(--c-elements);
}
.dashBoardContainer .topbar .search .bar::-ms-input-placeholder {
  font-family: var(--font);
  color: var(--c-elements);
}
.dashBoardContainer .topbar .search .bar::placeholder {
  font-family: var(--font);
  color: var(--c-elements);
}
.dashBoardContainer .topbar nav {
  overflow: overlay;
  white-space: nowrap;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 4px;
}
.dashBoardContainer .topbar nav::-webkit-scrollbar {
  height: 2px;
}
.dashBoardContainer .topbar nav::-webkit-scrollbar-thumb {
  background: var(--c-bg-elements);
}
.dashBoardContainer .topbar nav .menu-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: var(--c-elements);
  border-radius: var(--max-radius);
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.dashBoardContainer .topbar nav .menu-item:hover {
  background: var(--c-bg-elements);
}

.dashBoardContainer .dashboard {
  border-top: solid 1px var(--c-lighter);
  background-color: var(--c-light);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  padding: var(--o-padding);
  display: -ms-grid;
  display: grid;
  grid-gap: var(--o-padding);
  position: relative;
  overflow: overlay;
}
.dashBoardContainer .dashboard::-webkit-scrollbar,
.dashBoardContainer .side::-webkit-scrollbar {
  width: 2px;
  background: var(--c-darker);
}
.dashBoardContainer .dashboard::-webkit-scrollbar-thumb,
.dashBoardContainer .side::-webkit-scrollbar-thumb {
  background: var(--c-bg-elements);
}
.dashBoardContainer .dashboard .cardcolumn {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: var(--o-padding);
  -ms-flex-item-align: baseline;
  align-self: baseline;
}
.dashBoardContainer .dashboard .cardcolumn .card .content {
  font-size: 14px;
}
.dashBoardContainer .dashboard .cardcolumn .card span {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 24px;
  min-width: 24px;
  max-width: 24px;
  border-radius: 50%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}
.dashBoardContainer .dashboard .cardcolumn .card span:hover {
  color: var(--c-elements);
  background: var(--c-bg-elements);
}
.dashBoardContainer .dashboard .cardcolumn .card header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 4px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.dashBoardContainer .dashboard .cardcolumn .card header a {
  color: inherit;
  text-decoration: none;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  -webkit-line-clamp: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.dashBoardContainer .dashboard .cardcolumn .card .meta {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 4px;
}

.dashBoardContainer .side {
  margin-top: 60px;
  background-color: var(--c-medium);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  padding: var(--o-padding);
  display: -ms-grid;
  display: grid;
  gap: var(--o-padding);
  -ms-flex-line-pack: start;
  align-content: flex-start;
  overflow: overlay;
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}
.dashBoardContainer .dashboard .card,
.dashBoardContainer .side .card {
  position: relative;
  color: var(--c-elements);
  padding: var(--i-padding);
  background: var(--c-bg-elements);
  border-radius: var(--radius);
  -webkit-box-shadow: 0 4px 8px #0003;
  box-shadow: 0 4px 8px #0003;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 10px;
  border-bottom: solid 2px #0003;
}
.dashBoardContainer .side .card ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.dashBoardContainer .side .card ul li {
  padding: 6px 0;
  border-bottom: solid 1px var(--c-bg-elements);
}
.dashBoardContainer .side .card ul li:last-child {
  border-bottom: none;
}
.dashBoardContainer .side .weather .condition {
  opacity: 0.65;
  position: absolute;
  right: 10px;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  max-width: 200px;
  width: 100%;
  float: right;
}
.dashBoardContainer .side .weather .content {
  position: relative;
  font-size: 3rem;
  font-weight: 600;
  min-height: 180px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-shadow: 1px 3px 0px #0008;
}
.dashBoardContainer .side .weather .content .celsius {
  position: relative;
  top: -10px;
  right: -4px;
  font-size: 1.3rem;
}
.dashBoardContainer .side .weather .meta {
  border-top: solid 1px var(--c-bg-elements);
  padding-top: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 6px;
}
.dashBoardContainer .side .weather .meta .datetime,
.dashBoardContainer .side .weather .meta .location {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 6px;
}
.dashBoardContainer .side .weather .meta .datetime .time {
  font-weight: 600;
}

@media (min-width: 1024px) {
  :root {
    --i-padding: 1rem;
    --o-padding: 2rem;
  }
  .dashBoardContainer {
    margin: var(--o-padding);
    -webkit-box-shadow: 0 0px 1rem #0003;
    box-shadow: 0 0px 1rem #0003;
    overflow: hidden;
  }
  .dashBoardContainer {
    min-height: 500px;
    max-height: calc(100vh - (2 * var(--o-padding)));
    border-radius: var(--radius);
    -ms-grid-columns: auto 380px;
    grid-template-columns: 2fr 1fr;
    padding-left: 74px;
  }
  .dashBoardContainer .menu {
    width: 74px;
    position: absolute;
    top: unset;
    border-radius: var(--radius) 0 0 var(--radius);
  }
  .dashBoardContainer .menu:hover {
    border-radius: var(--radius);
  }
  .dashBoardContainer .menu .dashboardAvatar {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .dashBoardContainer .menu .dashboardAvatar .thumb {
    max-width: 70px;
  }
  .dashBoardContainer .topbar {
    position: absolute;
    width: calc(100% - 74px);
    margin-left: 74px;
    border-radius: 0 var(--radius) 0 0;
  }
  .dashBoardContainer .topbar .search {
    margin-right: unset;
    -webkit-box-ordinal-group: 0;
    -ms-flex-order: -1;
    order: -1;
    max-width: 200px;
    border-radius: var(--max-radius);
    cursor: default;
    background: var(--c-bg-elements);
  }
  .dashBoardContainer .topbar .search .bar {
    opacity: 1;
    visibility: visible;
  }
  .dashBoardContainer .dashboard {
    margin-top: 60px;
    border-top: unset;
    height: calc(100vh - (2 * var(--o-padding)) - 60px);
    -ms-grid-columns: 1fr var(--o-padding) 1fr var(--o-padding) 1fr;
    grid-template-columns: repeat(3, 1fr);
  }
  .dashBoardContainer .side {
    -webkit-box-ordinal-group: 1;
    -ms-flex-order: 0;
    order: 0;
    height: calc(100vh - (2 * var(--o-padding)) - 60px);
    border-top: unset;
    margin-top: 60px;
    border-radius: 0 0 var(--radius) 0;
  }
}
</style>
