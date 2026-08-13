'use client';

import { useState, useEffect, useCallback } from 'react';

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
  city: string;
}

const weatherIconMap: Record<string, string> = {
  '01d': 'fas fa-sun',
  '01n': 'fas fa-moon',
  '02d': 'fas fa-cloud-sun',
  '02n': 'fas fa-cloud-moon',
  '03d': 'fas fa-cloud',
  '03n': 'fas fa-cloud',
  '04d': 'fas fa-cloud',
  '04n': 'fas fa-cloud',
  '09d': 'fas fa-cloud-rain',
  '09n': 'fas fa-cloud-rain',
  '10d': 'fas fa-cloud-rain',
  '10n': 'fas fa-cloud-rain',
  '11d': 'fas fa-bolt',
  '11n': 'fas fa-bolt',
  '13d': 'fas fa-snowflake',
  '13n': 'fas fa-snowflake',
  '50d': 'fas fa-smog',
  '50n': 'fas fa-smog',
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);

  const fetchWeatherData = useCallback(async (latitude: number, longitude: number) => {
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

      if (!apiKey) {
        console.warn('Weather API key not configured');
        setError('API key missing');
        setLoading(false);
        return;
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
        { cache: 'no-store' }
      );

      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }

      const data = await response.json();
      setWeather({
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        city: data.name,
      });
      setError(null);
      setLoading(false);
    } catch (err) {
      console.error('Weather fetch error:', err);
      setError('Weather unavailable');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const getWeather = () => {
      if (!navigator.geolocation) {
        console.warn('Geolocation not supported');
        setError('Geolocation unavailable');
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (err) => {
          console.warn('Geolocation error:', err.message);
          // Default to Liverpool, UK coordinates as fallback
          fetchWeatherData(53.4084, -2.9916);
        },
        { timeout: 5000, maximumAge: 3600000 }
      );
    };

    getWeather();

    // Refresh weather every 30 minutes
    const interval = setInterval(getWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [mounted, fetchWeatherData]);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  if (loading) {
    return (
      <div>
        <div className="w-10 h-10 rounded-full bg-slate-400/30"></div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="text-slate-400 cursor-help text-lg" title={error || "Weather unavailable"}>
        <i className="fas fa-cloud-exclamation"></i>
      </div>
    );
  }

  const iconClass = weatherIconMap[weather.icon] || 'fas fa-cloud';

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Weather Icon - Animated */}
      <button
        className="flex items-center justify-center gap-1 px-3 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-600 hover:from-orange-500/20 hover:to-amber-500/20 transition-all duration-300 hover:scale-110 relative overflow-hidden group/weather"
        title={`${weather.city}: ${weather.temp}°C, ${weather.description}`}
        aria-label="Current weather"
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 opacity-0 group-hover/weather:opacity-10 rounded-full"></div>

        {/* Weather Icon */}
        <i
          className={`${iconClass} text-lg relative z-10 transition-transform duration-300 group-hover/weather:scale-125`}
          aria-hidden="true"
        ></i>
        
        {/* Temperature */}
        <span className="text-sm font-semibold relative z-10">{weather.temp}°</span>
      </button>

      {/* Enhanced Tooltip - Appears on hover */}
      {showTooltip && (
        <div className="absolute right-0 top-full mt-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4 py-3 rounded-lg shadow-xl border border-orange-500/30 z-50 min-w-max whitespace-nowrap animate-fade-in backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <i className={`${iconClass} text-xl text-orange-400`}></i>
            <div>
              <div className="font-bold text-orange-400">{weather.city}</div>
              <div className="text-sm text-gray-300">
                {weather.temp}°C · {weather.description}
              </div>
            </div>
          </div>

          {/* Tooltip arrow */}
          <div className="absolute right-4 -top-1 w-2 h-2 bg-orange-500/30 transform rotate-45"></div>
        </div>
      )}
    </div>
  );
}
