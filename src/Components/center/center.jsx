import './center.css';
import React, { useState } from 'react';

const Center = () => {
  const countries = ["Europe", "Asia", "North America", "South America", "Africa", "Australia"];

  const [settings, setSettings] = useState({
    region: 'Europe',
    punkbuster: 'ON',
    fairfight: 'ON',
    password: 'ON',
    preset: 'NORMAL',
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

  const [rules, setRules] = useState({
    tickets: 400,
    vehicleSpawnDelay: 25,
    bulletDamage: 100,
    kickAfterTeamKills: 5,
    playerHealth: 100,
    playerRespawnTime: 100,
    kickAfterIdle: 100,
    banAfterKicks: 3
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
            <button onClick={() => toggleSetting('minimap')}>MINIMAP <p>{settings.minimap}</p></button>
            <button onClick={() => toggleSetting('squadLeaderSpawn')}>ONLY SQUAD LEADER SPAWN <p>{settings.squadLeaderSpawn}</p></button>
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
            <button>TICKETS <p>{rules.tickets}</p></button>
            <button>VEHICLE SPAWN DELAY <p>{rules.vehicleSpawnDelay}</p></button>
            <button>BULLET DAMAGE <p>{rules.bulletDamage}</p></button>
            <button>KICK AFTER TEAM KILLS <p>{rules.kickAfterTeamKills}</p></button>
            <button>PLAYER HEALTH <p>{rules.playerHealth}</p></button>
            <button>PLAYER RESPAWN TIME <p>{rules.playerRespawnTime}</p></button>
            <button>KICK AFTER IDLE <p>{rules.kickAfterIdle}</p></button>
            <button>BAN AFTER KICKS <p>{rules.banAfterKicks}</p></button>
          </div>
        </div>
        <span>MAP ROTATION</span>
        <div className='maprotation'>
          <img src='home__server-image - 01.png' alt='' title='Place conquest 1' />
          <img src='home__server-image - 02.png' alt='' title='Place conquest 2' />
          <img src='home__server-image - 03.png' alt='' title='Place conquest 3' />
          <img src='home__server-image - 04.png' alt='' title='Place conquest 4' />
          <img src='home__server-image - 05.png' alt='' title='Place conquest 5' />
          <img src='home__server-image - 06.png' alt='' title='Place conquest 6' />
          <img src='home__server-image - 01.png' alt='' title='Place conquest 7' />
          <img src='home__server-image - 02.png' alt='' title='Place conquest 8' />
          <img src='home__server-image - 03.png' alt='' title='Place conquest 9' />
          <img src='home__server-image - 04.png' alt='' title='Place conquest 10' />
          <img src='home__server-image - 05.png' alt='' title='Place conquest 11' />
          <img src='home__server-image - 06.png' alt='' title='Place conquest 12' />
          <img src='home__server-image - 01.png' alt='' title='Place conquest 13' />
          <img src='home__server-image - 02.png' alt='' title='Place conquest 14' />
          <img src='home__server-image - 03.png' alt='' title='Place conquest 15' />
          <img src='home__server-image - 04.png' alt='' title='Place conquest 16' />
          <img src='home__server-image - 05.png' alt='' title='Place conquest 17' />
          <img src='home__server-image - 06.png' alt='' title='Place conquest 18' />
          <img src='home__server-image - 05.png' alt='' title='Place conquest 19' />
          <img src='home__server-image - 06.png' alt='' title='Place conquest 20' />
          <img src='home__server-image - 01.png' alt='' title='Place conquest 21' />
        </div>
      </div>
    </div>
  );
}

export default Center;
