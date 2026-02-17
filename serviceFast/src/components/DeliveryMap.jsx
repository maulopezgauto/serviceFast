import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const center = [-25.3000, -57.6000] // Centro Gran Asunción

const zones = [
  { name: "Luque", position: [-25.2667, -57.4833], radius: 3000 },
  { name: "Mariano Roque Alonso", position: [-25.2033, -57.5325], radius: 3000 },
  { name: "Limpio", position: [-25.1667, -57.5000], radius: 3500 },
  { name: "Fernando de la Mora", position: [-25.3167, -57.5500], radius: 2500 },
  { name: "Zona Norte", position: [-25.2400, -57.5200], radius: 4000 },
  { name: "Zona Sur", position: [-25.3600, -57.6200], radius: 4000 },
  { name: "San Lorenzo", position: [-25.3431, -57.5083], radius: 3500 },
  { name: "Capiatá", position: [-25.3500, -57.4500], radius: 4000 },
  { name: "Itaguá", position: [-25.3900, -57.3500], radius: 4000 },
  { name: "San Antonio", position: [-25.3800, -57.6300], radius: 3000 },
  { name: "Ñemby", position: [-25.3950, -57.5350], radius: 3000 },
  { name: "Villa Elisa", position: [-25.3600, -57.5900], radius: 3000 },
  { name: "Lambaré", position: [-25.3330, -57.6350], radius: 1800 }

]

export default function DeliveryMap() {
  return (
    <div className="w-full h-96 sm:h-130 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
      <MapContainer
        center={center}
        zoom={11}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {zones.map((zone, index) => (
          <Circle
            key={index}
            center={zone.position}
            radius={zone.radius}
            pathOptions={{
              color: '#ef4444',       // rojo
              fillColor: '#ef4444',
              fillOpacity: 0.15
            }}
          >
            <Popup>
              <div className="text-sm">
                <strong>{zone.name}</strong>
                <p>Zona de cobertura ServiFast</p>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  )
}
