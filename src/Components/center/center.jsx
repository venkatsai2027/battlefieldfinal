import React, { useState, useEffect, useRef } from 'react';
import './center.css';

const Center = () => {
  const mapRef = useRef(null);
  const mapRefMinimap = useRef(null);
  const [map, setMap] = useState(null);
  const [minimap, setMinimap] = useState(null);
  const [minimapVisible, setMinimapVisible] = useState(false);

  useEffect(() => {
    if (!map && mapRef.current) {
      const platform = new window.H.service.Platform({
        apikey: ''
      });

      const defaultLayers = platform.createDefaultLayers();
      const hereMap = new window.H.Map(mapRef.current, defaultLayers.vector.normal.map, {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 3,
        pixelRatio: window.devicePixelRatio || 1
      });

      window.addEventListener('resize', () => hereMap.getViewPort().resize());

      const behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(hereMap));
      const ui = window.H.ui.UI.createDefault(hereMap, defaultLayers);

      setMap(hereMap);
    }
  }, [map,minimap]);

  useEffect(() => {
    if (minimapVisible) {
      if (!minimap && mapRefMinimap.current) {
        const platform = new window.H.service.Platform({
          apikey: process.env.REACT_APP_HERE_API_KEY
        });

        const defaultLayers = platform.createDefaultLayers();
        const hereMinimap = new window.H.Map(mapRefMinimap.current, defaultLayers.vector.normal.map, {
          center: { lat: 20.5937, lng: 78.9629 }, 
          zoom: 3, // Adjust zoom level as needed
          pixelRatio: window.devicePixelRatio || 1
        });

        window.addEventListener('resize', () => hereMinimap.getViewPort().resize());

        const behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(hereMinimap));
        const ui = window.H.ui.UI.createDefault(hereMinimap, defaultLayers);

        setMinimap(hereMinimap);
      }
    } else if (minimap) {
      // Clean up minimap when hiding
      setMinimap(null);
    }
  }, [minimapVisible, minimap]);

  const countries = ["Europe", "Asia", "North America", "South America", "Africa", "Australia"];

  const [settings, setSettings] = useState({
    region: 'Europe',
    punkbuster: 'ON',
    fairfight: 'ON',
    password: 'ON',
    preset: 'ON',
    minimap: 'ON',
    squadLeaderSpawn: 'ON',
    vehicles: 'ON',
    teamBalance: 'ON',
    minimapSpotting: 'ON',
    hud: 'ON',
    vehicleCam: 'ON',
    regenerativeHealth: 'ON',
    killCam: 'ON',
    friendlyFire: 'ON',
    spotting: 'ON',
    enemyNameTags: 'ON'
  });

  const toggleSetting = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: prevSettings[setting] === 'ON' ? 'OFF' : 'ON'
    }));
  };

  const handleRegionChange = (event) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      region: event.target.value
    }));
  };

  const toggleMinimap = () => {
    setMinimapVisible((prev) => !prev);
  };

  return (
    <div className='centerpane'>
      <div className='center'>
        <div className="server">
          <h2>SERVER INFO</h2>
        </div>
        <div className='base'>
          <h1>! RC-3 BASEMAPS</h1>
          <div className='baseimg'>
            <img src='\menu multiplayer\server browser\america-flag.svg' alt='' />
            <p>
              CONQUEST LARGE - LANCANG DAM - CUSTOM - 50HZ
            </p>
          </div>
          <p>Server Protected from Venkat Sainath</p>
        </div>
        <div className='buttons'>
          <button>JOIN</button>
          <button>SPECTATE</button>
          <button>JOIN AS COMMANDER</button>
          <button>17389</button>
        </div>
        <div className='paraa'>
          <div className='player'>
            <h3>PLAYERS</h3>
            <h3>50/60</h3>
          </div>
          <div className='ping'>
            <h3>PING</h3>
            <h3>20ms</h3>
          </div>
          <div className='freq'>
            <h3>TICKRATE</h3>
            <h3>60Hz</h3>
          </div>
        </div>
        <div className='fin'>
          <div className='settings'>
            <span>SETTINGS</span>
            <button>
              REGION
              <select value={settings.region} onChange={handleRegionChange}>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </button>
            <button onClick={() => toggleSetting('punkbuster')}>PUNKBASTER <p>{settings.punkbuster}</p></button>
            <button onClick={() => toggleSetting('fairfight')}>FAIRFIGHT <p>{settings.fairfight}</p></button>
            <button onClick={() => toggleSetting('password')}>PASSWORD <p>{settings.password}</p></button>
            <button onClick={() => toggleSetting('preset')}>PRESET <p>{settings.preset}</p></button>
          </div>
          <div className='advanced'>
            <span>ADVANCED</span>
            <button onClick={toggleMinimap}>MINIMAP-CLICK HERE<p>{minimapVisible ? 'ON' : 'OFF'}</p></button>
            <button onClick={() => toggleSetting('squadLeaderSpawn')}>SQUAD LEADER SPAWN <p>{settings.squadLeaderSpawn}</p></button>
            <button onClick={() => toggleSetting('vehicles')}>VEHICLES <p>{settings.vehicles}</p></button>
            <button onClick={() => toggleSetting('teamBalance')}>TEAM BALANCE <p>{settings.teamBalance}</p></button>
            <button onClick={() => toggleSetting('minimapSpotting')}>MINIMAP SPOTTING <p>{settings.minimapSpotting}</p></button>
            <button onClick={() => toggleSetting('hud')}>HUD <p>{settings.hud}</p></button>
            <button onClick={() => toggleSetting('vehicleCam')}>3D VEHICLE CAM <p>{settings.vehicleCam}</p></button>
            <button onClick={() => toggleSetting('regenerativeHealth')}>REGENERATIVE HEALTH <p>{settings.regenerativeHealth}</p></button>
            <button onClick={() => toggleSetting('killCam')}>KILL CAM <p>{settings.killCam}</p></button>
            <button onClick={() => toggleSetting('friendlyFire')}>FRIENDLY FIRE <p>{settings.friendlyFire}</p></button>
            <button onClick={() => toggleSetting('spotting')}>3D SPOTTING <p>{settings.spotting}</p></button>
            <button onClick={() => toggleSetting('enemyNameTags')}>ENEMY NAME TAGS <p>{settings.enemyNameTags}</p></button>
          </div>
          <div className='rules'>
            <span>RULES</span>
            <button>TICKETS <p><input type="number" min="1" max="100" placeholder ='0'/></p></button>
            <button>CAR SPAWN DELAY <p><input type="number"  min="1" max="100" placeholder ='0'/></p></button>
            <button>BULLET DAMAGE <p><input type="number"  min="1" max="100" placeholder ='0'/></p></button>
            <button>KICK AFTER KILLS <p><input type="number" min="1" max="100" placeholder ='0'/></p></button>
            <button>PLAYER HEALTH <p><input type="number"  min="1" max="100" placeholder ='0'/></p></button>
            <button>RESPAWN TIME <p><input type="number"  min="1" max="100" placeholder ='0'/></p></button>
            <button>KICK AFTER IDLE <p><input type="number"  min="1" max="100" placeholder ='0'/></p></button>
            <button>BAN AFTER KICKS <p><input type="number"  min="1" max="100" placeholder ='0'/></p></button>
          </div>
        </div>
        <span>MAP ROTATION</span>
         <div className='image-list'>
          <div className='card'>
            <img src='home__server-image - 01.png' alt='' title='Place conquest 1' />
            <div className='card-title'>Place conquest 1</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 02.png' alt='' title='Place conquest 2' />
            <div className='card-title'>Place conquest 2</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 03.png' alt='' title='Place conquest 3' />
            <div className='card-title'>Place conquest 3</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 04.png' alt='' title='Place conquest 4' />
            <div className='card-title'>Place conquest 4</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 05.png' alt='' title='Place conquest 5' />
            <div className='card-title'>Place conquest 5</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 06.png' alt='' title='Place conquest 6' />
            <div className='card-title'>Place conquest 6</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 01.png' alt='' title='Place conquest 7' />
            <div className='card-title'>Place conquest 7</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 02.png' alt='' title='Place conquest 8' />
            <div className='card-title'>Place conquest 8</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 03.png' alt='' title='Place conquest 9' />
            <div className='card-title'>Place conquest 9</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 04.png' alt='' title='Place conquest 10' />
            <div className='card-title'>Place conquest 10</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 05.png' alt='' title='Place conquest 11' />
            <div className='card-title'>Place conquest 11</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 06.png' alt='' title='Place conquest 12' />
            <div className='card-title'>Place conquest 12</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 01.png' alt='' title='Place conquest 13' />
            <div className='card-title'>Place conquest 13</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 02.png' alt='' title='Place conquest 14' />
            <div className='card-title'>Place conquest 14</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 03.png' alt='' title='Place conquest 15' />
            <div className='card-title'>Place conquest 15</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 04.png' alt='' title='Place conquest 16' />
            <div className='card-title'>Place conquest 16</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 05.png' alt='' title='Place conquest 17' />
            <div className='card-title'>Place conquest 17</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 06.png' alt='' title='Place conquest 18' />
            <div className='card-title'>Place conquest 18</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 05.png' alt='' title='Place conquest 19' />
            <div className='card-title'>Place conquest 19</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 06.png' alt='' title='Place conquest 20' />
            <div className='card-title'>Place conquest 20</div>
          </div>
          <div className='card'>
            <img src='home__server-image - 01.png' alt='' title='Place conquest 21' />
            <div className='card-title'>Place conquest 21</div>
          </div>
        </div>
        {/*<div key="mapContainer" ref={mapRef} className="mapContainer" style={{ height: '400px', width: '100%' }}></div>*/}
        {minimapVisible && (
          <div key="minimapContainer" className="minimapContainer">
            <div ref={mapRefMinimap} className="minimapMap" style={{ height: '200px', width: '300px' }}></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Center;
