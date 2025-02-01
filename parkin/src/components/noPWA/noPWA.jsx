import React, { useState } from 'react';
import './noPWA.css';
import { Chip } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

function NoPWA() {
  const [activeTab, setActiveTab] = useState('ios');

  return (
    <div className="noPWA">
      <h1>Cómo agregar esta aplicación como PWA</h1>
      <div className="chips">
        <Chip
          icon={<AppleIcon />}
          label="iOS"
          clickable
          color={activeTab === 'ios' ? 'primary' : 'default'}
          onClick={() => setActiveTab('ios')}
        />
        <Chip
          icon={<AndroidIcon />}
          label="Android"
          clickable
          color={activeTab === 'android' ? 'primary' : 'default'}
          onClick={() => setActiveTab('android')}
        />
      </div>
      {activeTab === 'ios' && (
        <div className="tab-content">
          <h2>Para iOS:</h2>
          <ol>
            <li>Abre Safari y navega a esta aplicación.</li>
            <li>Toca el botón de compartir en la parte inferior de la pantalla.</li>
            <li>Selecciona "Agregar a la pantalla de inicio".</li>
            <li>Confirma el nombre y toca "Agregar".</li>
          </ol>
        </div>
      )}
      {activeTab === 'android' && (
        <div className="tab-content">
          <h2>Para Android:</h2>
          <ol>
            <li>Abre Chrome y navega a esta aplicación.</li>
            <li>Toca el menú de tres puntos en la esquina superior derecha.</li>
            <li>Selecciona "Agregar a la pantalla de inicio".</li>
            <li>Confirma el nombre y toca "Agregar".</li>
          </ol>
        </div>
      )}
    </div>
  );
}

export default NoPWA;