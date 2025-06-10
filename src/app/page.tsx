'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [showFlowers, setShowFlowers] = useState<boolean>(false)
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [showPhoto, setShowPhoto] = useState<boolean>(false)
  const [currentText, setCurrentText] = useState<string>('')
  const [textIndex, setTextIndex] = useState<number>(0)

  const loveMessages: string[] = [
    "yçb tyyb mua ...",
    "Sen benim kainatımın en parlak yıldızısın ✨",
    "Gözlerin bütün yıldızlardan daha güzel 💫", 
    "Seninle her an büyülü ve sonsuz 💖",
    "Seni sonsuza kadar seveceğim aşkım 🌟"
  ]

  // Otomatik müzik başlatma - Güçlü versiyon
  useEffect(() => {
    const startMusic = () => {
      const audio = document.getElementById('backgroundMusic') as HTMLAudioElement
      if (audio) {
        audio.volume = 0.4
        audio.muted = false
        
        // Hemen çalmaya çalış
        const playAttempt = audio.play()
        if (playAttempt !== undefined) {
          playAttempt.catch(() => {
            // İlk etkileşimde çal
            const playOnInteraction = () => {
              audio.play()
              document.removeEventListener('click', playOnInteraction)
              document.removeEventListener('touchstart', playOnInteraction)
              document.removeEventListener('keydown', playOnInteraction)
            }
            document.addEventListener('click', playOnInteraction)
            document.addEventListener('touchstart', playOnInteraction)
            document.addEventListener('keydown', playOnInteraction)
          })
        }
      }
    }

    // Hemen başlat
    startMusic()
    
    // 1 saniye sonra tekrar dene
    const timer1 = setTimeout(startMusic, 1000)
    // 3 saniye sonra tekrar dene
    const timer2 = setTimeout(startMusic, 3000)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  // Typewriter efekti
  useEffect(() => {
    const message = loveMessages[textIndex]
    let charIndex = 0
    const timer = setInterval(() => {
      if (charIndex < message.length) {
        setCurrentText(message.slice(0, charIndex + 1))
        charIndex++
      } else {
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % loveMessages.length)
          setCurrentText('')
        }, 4000)
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [textIndex, loveMessages])

  // Zamanlı animasyonlar
  useEffect(() => {
    const timer1 = setTimeout(() => setShowFlowers(true), 3000)
    const timer2 = setTimeout(() => setShowMessage(true), 6000)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const togglePhoto = (): void => {
    setShowPhoto(!showPhoto)
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Akan Nehir Arka Plan */}
      <div className="absolute inset-0">
        {/* Ana akan gradient - nehir gibi */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950 animate-river-flow" />
        
        {/* Yumuşak dalga katmanı */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/15 animate-wave-flow" />
        
        {/* Gentle akış katmanı */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-900/10 to-transparent animate-stream-flow" />
        
        {/* Sabit glow efektleri */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl animate-gentle-pulse" />
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-pink-600/8 rounded-full blur-3xl animate-gentle-pulse" style={{ animationDelay: '5s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/6 rounded-full blur-3xl animate-gentle-pulse" style={{ animationDelay: '10s' }} />
        </div>
      </div>
      
      {/* Gelişmiş yıldız sistemi */}
      <div className="fixed inset-0 z-0">
        {/* Mega büyük yıldızlar */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`mega-${i}`}
            className="absolute animate-float-mega-slow"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${15 + (i * 8)}%`,
              animationDelay: `${i * 2}s`,
            }}
          >
            <div className="relative">
              <div 
                className="w-6 h-6 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full animate-pulse-gentle"
                style={{
                  boxShadow: `
                    0 0 20px rgba(255,223,0,0.8),
                    0 0 40px rgba(255,223,0,0.4),
                    0 0 60px rgba(255,223,0,0.2)
                  `
                }} 
              />
              {/* Yıldız ışınları */}
              <div className="absolute inset-0 animate-spin-very-slow">
                <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gradient-to-t from-yellow-400/50 to-transparent transform -translate-x-1/2 -translate-y-6" />
                <div className="absolute bottom-0 left-1/2 w-0.5 h-12 bg-gradient-to-b from-yellow-400/50 to-transparent transform -translate-x-1/2 translate-y-6" />
                <div className="absolute left-0 top-1/2 h-0.5 w-12 bg-gradient-to-l from-yellow-400/50 to-transparent transform -translate-y-1/2 -translate-x-6" />
                <div className="absolute right-0 top-1/2 h-0.5 w-12 bg-gradient-to-r from-yellow-400/50 to-transparent transform -translate-y-1/2 translate-x-6" />
              </div>
            </div>
          </div>
        ))}
        
        {/* Orta boy parlayan yıldızlar */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute animate-twinkle-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          >
            <div 
              className="w-3 h-3 bg-white rounded-full"
              style={{
                boxShadow: `0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)`
              }} 
            />
          </div>
        ))}
        
        {/* Küçük yıldızlar */}
        {Array.from({ length: 80 }, (_, i) => (
          <div
            key={`small-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-drift-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}

        {/* Yavaş akan yıldızlar */}
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute"
            style={{
              left: '-200px',
              top: `${Math.random() * 70}%`,
              animation: `shootingStarSlow ${8 + Math.random() * 4}s linear infinite`,
              animationDelay: `${i * 3}s`
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-transparent via-yellow-300 to-white rounded-full" />
            <div className="absolute top-1/2 right-full w-20 h-0.5 bg-gradient-to-l from-yellow-300/80 to-transparent" />
          </div>
        ))}
      </div>

      {/* Ana içerik */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        
        {/* Ana başlık - Responsive */}
        <div className="mb-8 sm:mb-12 relative">
          <div className="absolute inset-0 blur-xl">
            <h1 className="text-3xl sm:text-5xl lg:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse-gentle">
              Kainatın En Parlak Yıldızına
            </h1>
          </div>
          <h1 
            className="relative text-3xl sm:text-5xl lg:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-700 cursor-default"
            style={{
              textShadow: `
                0 0 20px rgba(236, 72, 153, 0.5),
                0 0 40px rgba(147, 51, 234, 0.3),
                0 0 60px rgba(59, 130, 246, 0.2)
              `
            }}
          >
            Kainatın En Parlak Yıldızına
          </h1>
          
          {/* Çevresinde dönen mini yıldızlar - çok yavaş */}
          <div className="absolute inset-0 animate-orbit-slow">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={`title-star-${i}`}
                className="absolute w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 animate-twinkle-gentle"
                style={{
                  left: `${50 + 35 * Math.cos(i * Math.PI / 3)}%`,
                  top: `${50 + 35 * Math.sin(i * Math.PI / 3)}%`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 0.8}s`
                }}
              >
                ✨
              </div>
            ))}
          </div>
        </div>

        {/* Çiçek galaksisi - Daha güzel ve responsive */}
        <div className={`transition-all duration-3000 transform mb-8 sm:mb-12 ${showFlowers ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-180'}`}>
          <div className="relative">
            {/* Merkez çiçek - Daha güzel */}
            <div className="text-6xl sm:text-8xl lg:text-9xl animate-float-gentle relative z-10 filter drop-shadow-2xl">
              🌸
            </div>
            
            {/* Ana çiçek çevresinde petaller */}
            <div className="absolute inset-0">
              {['🌺', '🌸', '🌺', '🌸'].map((petal, i) => (
                <div
                  key={`petal-${i}`}
                  className="absolute text-3xl sm:text-4xl animate-petal-dance opacity-70"
                  style={{
                    left: `${50 + 25 * Math.cos(i * Math.PI / 2)}%`,
                    top: `${50 + 25 * Math.sin(i * Math.PI / 2)}%`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 0.5}s`
                  }}
                >
                  {petal}
                </div>
              ))}
            </div>
            
            {/* Etrafında dönen çiçekler - çok yumuşak */}
            <div className="absolute inset-0 animate-orbit-ultra-slow">
              {['🌷', '🌹', '🌻', '🌼', '🌺'].map((flower, i) => (
                <div
                  key={`flower-${i}`}
                  className="absolute text-4xl sm:text-5xl lg:text-6xl animate-sway-gentle filter drop-shadow-lg"
                  style={{
                    left: `${50 + 50 * Math.cos(i * 2 * Math.PI / 5)}%`,
                    top: `${50 + 50 * Math.sin(i * 2 * Math.PI / 5)}%`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 0.8}s`
                  }}
                >
                  {flower}
                </div>
              ))}
            </div>
            
            {/* Dış çember çiçekler */}
            <div className="absolute inset-0 animate-orbit-reverse">
              {['🌾', '🌿', '🍀', '🌱'].map((leaf, i) => (
                <div
                  key={`leaf-outer-${i}`}
                  className="absolute text-2xl sm:text-3xl animate-float-random opacity-60"
                  style={{
                    left: `${50 + 70 * Math.cos(i * Math.PI / 2)}%`,
                    top: `${50 + 70 * Math.sin(i * Math.PI / 2)}%`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 1.2}s`
                  }}
                >
                  {leaf}
                </div>
              ))}
            </div>
            
            {/* Uçuşan yapraklar - daha güzel */}
            <div className="absolute inset-0">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={`leaf-${i}`}
                  className="absolute text-xl sm:text-2xl animate-leaf-fall opacity-40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${8 + Math.random() * 4}s`
                  }}
                >
                  🍃
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEVİLAY yazısı - Responsive */}
        <div className="relative mb-8 sm:mb-12 group cursor-default">
          <div className="absolute inset-0 blur-2xl">
            <div className="text-6xl sm:text-8xl lg:text-9xl font-bold text-pink-400 animate-pulse-gentle">
              yçb tyyb mua ... 💖
            </div>
          </div>
          <div 
            className="relative text-6xl sm:text-8xl lg:text-9xl font-bold text-pink-400 group-hover:scale-110 transition-all duration-700"
            style={{
              textShadow: `
                0 0 20px rgba(236, 72, 153, 0.8),
                0 0 40px rgba(236, 72, 153, 0.6),
                0 0 60px rgba(236, 72, 153, 0.4),
                5px 5px 0px rgba(147, 51, 234, 0.8),
                10px 10px 0px rgba(59, 130, 246, 0.6)
              `
            }}
          >
            yçb tyyb mua ... 💖
          </div>
          
          {/* Çevresinde kalpler - yumuşak dönüş */}
          <div className="absolute inset-0 animate-orbit-reverse">
            {['💕', '💗', '💖', '💝'].map((heart, i) => (
              <div
                key={`heart-${i}`}
                className="absolute text-2xl sm:text-3xl animate-heartbeat-gentle"
                style={{
                  left: `${50 + 40 * Math.cos(i * Math.PI / 2)}%`,
                  top: `${50 + 40 * Math.sin(i * Math.PI / 2)}%`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 0.7}s`
                }}
              >
                {heart}
              </div>
            ))}
          </div>
        </div>

        {/* Typewriter mesajlar - Responsive */}
        <div className="mb-8 sm:mb-12 h-16 sm:h-20 flex items-center px-4">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 sm:px-8 py-3 sm:py-4 min-h-[4rem] sm:min-h-[5rem] flex items-center shadow-2xl w-full max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-white font-light text-center w-full">
              {currentText}
              <span className="animate-pulse ml-1 text-pink-300">|</span>
            </p>
          </div>
        </div>

        {/* Premium buton - Responsive */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={togglePhoto}
            className="group relative overflow-hidden"
          >
            <div className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-full px-6 sm:px-10 py-3 sm:py-5 text-white font-bold text-base sm:text-lg hover:scale-105 transition-all duration-500 shadow-2xl">
              <i className="fas fa-camera mr-2 sm:mr-3" />
              <span className="hidden sm:inline">Yengenin foto 😉</span>
              <span className="sm:hidden">Yengenin foto</span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-pink-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          </button>
        </div>

        {/* Hediye kutusu */}
        {showMessage && (
          <div className="animate-fade-in-up bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-2xl max-w-lg hover:bg-white/15 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
            <div className="relative z-10">
              <div className="text-5xl mb-6 animate-bounce-gentle">🎁</div>
              <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                Özür dilerim
              </h3>
              <p className="text-lg text-pink-200 mb-6 leading-relaxed">
                Bu site, seni ne kadar çok sevdiğimin küçük bir göstergesi...
                iyiki varsın
              </p>
              <div className="flex justify-center space-x-3 text-3xl">
                {['❤️', '💕', '💖', '💗', '💝'].map((heart, i) => (
                  <span 
                    key={`gift-heart-${i}`}
                    className="animate-pulse-gentle hover:scale-125 transition-transform duration-300 cursor-default"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {heart}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fotoğraf modal - Responsive ve çalışan */}
      {showPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-10 max-w-sm sm:max-w-lg w-full mx-4 border border-white/30 shadow-2xl">
            <button
              onClick={togglePhoto}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-pink-300 text-2xl sm:text-3xl transition-colors duration-300 hover:scale-110 transform"
            >
              <i className="fas fa-times" />
            </button>
            
            <div className="text-center">
              {/* Gerçek fotoğraf kutusu */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                {/* Fotoğraf varsa göster, yoksa placeholder */}
                <img 
                  src="/sevilay.jpg" 
                  alt="Sevilay" 
                  className="w-full h-full object-cover rounded-3xl"
                  onError={(e) => {
                    // Fotoğraf yüklenemezse placeholder göster
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.classList.remove('hidden');
                  }}
                />
                <div className="text-6xl sm:text-8xl animate-pulse-gentle hidden">
                  📷
                </div>
              </div>
              <h3 className="text-white text-lg sm:text-2xl mb-3 sm:mb-4 font-bold">
                bebek sevilay 💖
              </h3>
              <p className="text-pink-300 text-sm sm:text-lg mb-2">
                Dünyanın en tatlı bebişi
              </p>
              <p className="text-white/60 text-xs sm:text-sm">
                (public/sevilay.jpg olarak fotoğrafını ekle)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Arka plan müziği - Otomatik çalan versiyon */}
      <audio 
        id="backgroundMusic" 
        loop 
        preload="auto"
        playsInline
        autoPlay
        muted={false}
      >
        <source src="/romantic-music.mp3" type="audio/mpeg" />
        <source src="/love-song.mp3" type="audio/mpeg" />
        Tarayıcınız ses dosyasını desteklemiyor.
      </audio>

      {/* CSS Animasyonları - Akan Nehir Efekti */}
      <style jsx>{`
        @keyframes river-flow {
          0% { 
            background-position: 0% 0%;
            filter: hue-rotate(0deg) brightness(0.7);
          }
          50% { 
            background-position: 100% 100%;
            filter: hue-rotate(10deg) brightness(0.8);
          }
          100% { 
            background-position: 200% 0%;
            filter: hue-rotate(0deg) brightness(0.7);
          }
        }
        
        @keyframes wave-flow {
          0% { 
            background-position: 0% 0%;
            opacity: 0.2;
          }
          50% { 
            background-position: 100% 50%;
            opacity: 0.4;
          }
          100% { 
            background-position: 200% 100%;
            opacity: 0.2;
          }
        }
        
        @keyframes stream-flow {
          0% { 
            background-position: 0% 50%;
            opacity: 0.1;
          }
          50% { 
            background-position: 50% 0%;
            opacity: 0.3;
          }
          100% { 
            background-position: 100% 50%;
            opacity: 0.1;
          }
        }
        
        @keyframes gentle-pulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.6; 
            transform: scale(1.02); 
          }
        }
        
        @keyframes petal-dance {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          25% { transform: translate(-50%, -50%) rotate(5deg) scale(1.1); }
          50% { transform: translate(-50%, -50%) rotate(0deg) scale(0.9); }
          75% { transform: translate(-50%, -50%) rotate(-5deg) scale(1.1); }
        }
        
        @keyframes leaf-fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes orbit-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes orbit-ultra-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes orbit-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes twinkle-gentle {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes sway-gentle {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          25% { transform: translate(-50%, -50%) rotate(2deg); }
          50% { transform: translate(-50%, -50%) rotate(0deg); }
          75% { transform: translate(-50%, -50%) rotate(-2deg); }
        }
        
        @keyframes heartbeat-gentle {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shootingStarSlow {
          0% {
            transform: translateX(-200px) translateY(-100px);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateX(100vw) translateY(100px);
            opacity: 0;
          }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(0.5deg); }
          50% { transform: translateY(-15px) rotate(0deg); }
          75% { transform: translateY(-8px) rotate(-0.5deg); }
        }
        
        @keyframes float-mega-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-25px) scale(1.05); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        @keyframes twinkle-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes drift-slow {
          0% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(15px) translateY(-8px); }
          50% { transform: translateX(-8px) translateY(-15px); }
          75% { transform: translateX(-15px) translateY(-8px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        
        @keyframes float-random {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(45deg); }
          50% { transform: translateY(-8px) rotate(90deg); }
          75% { transform: translateY(-20px) rotate(135deg); }
        }
        
        @keyframes spin-very-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Akan Nehir Animation Classes */
        .animate-river-flow { animation: river-flow 40s ease-in-out infinite; }
        .animate-wave-flow { animation: wave-flow 30s ease-in-out infinite; }
        .animate-stream-flow { animation: stream-flow 25s ease-in-out infinite; }
        .animate-gentle-pulse { animation: gentle-pulse 15s ease-in-out infinite; }
        
        /* Çiçek Animation Classes */
        .animate-petal-dance { animation: petal-dance 4s ease-in-out infinite; }
        .animate-leaf-fall { animation: leaf-fall 10s ease-in-out infinite; }
        
        /* Orbital Animation Classes */
        .animate-orbit-slow { animation: orbit-slow 120s linear infinite; }
        .animate-orbit-ultra-slow { animation: orbit-ultra-slow 180s linear infinite; }
        .animate-orbit-reverse { animation: orbit-reverse 150s linear infinite; }
        .animate-twinkle-gentle { animation: twinkle-gentle 8s ease-in-out infinite; }
        .animate-sway-gentle { animation: sway-gentle 6s ease-in-out infinite; }
        .animate-heartbeat-gentle { animation: heartbeat-gentle 5s ease-in-out infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 40s linear infinite; }
        
        /* Existing animations with softer timing */
        .animate-fade-in-up { animation: fade-in-up 1.5s ease-out; }
        .animate-float-gentle { animation: float-gentle 8s ease-in-out infinite; }
        .animate-float-mega-slow { animation: float-mega-slow 15s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 6s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 10s ease-in-out infinite; }
        .animate-twinkle-slow { animation: twinkle-slow 8s ease-in-out infinite; }
        .animate-drift-slow { animation: drift-slow 25s ease-in-out infinite; }
        .animate-float-random { animation: float-random 15s ease-in-out infinite; }
      `}</style>
    </main>
  )
}
