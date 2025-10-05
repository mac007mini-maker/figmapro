import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProModalProps {
  onClose: () => void;
}

export function ProModal({ onClose }: ProModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide images and styles
  const slides = [
    {
      mainImage: "https://images.unsplash.com/photo-1568015300856-05e12413cb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2xlYXIlMjBmYWNlJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzU5NDkxMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      styles: [
        { name: "No Style", image: "https://images.unsplash.com/photo-1568015300856-05e12413cb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2xlYXIlMjBmYWNlJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzU5NDkxMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Anime", image: "https://images.unsplash.com/photo-1677808566807-1097fc06b472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwY29sb3JmdWwlMjBtYWtldXAlMjBjbGVhciUyMGZhY2V8ZW58MXx8fHwxNzU5NDkxMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "3D Cartoon", image: "https://images.unsplash.com/photo-1548808790-fcbad531508a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuJTIwZ2lybCUyMGhhcHB5JTIwY2xlYXIlMjBwb3J0cmFpdCUyMGJyaWdodCUyMHNtaWxlfGVufDF8fHx8MTc1OTQ5MTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Mosaic", image: "https://images.unsplash.com/photo-1743013176089-64d187fe833f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhc2hpb24lMjBwb3J0cmFpdCUyMGNsZWFyJTIwZmFjZSUyMG5vJTIwb2JzdHJ1Y3Rpb258ZW58MXx8fHwxNzU5NDkxMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Ghibli", image: "https://images.unsplash.com/photo-1659353221237-6a1cfb73fd90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGhlYWRzaG90JTIwY2xlYXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk0OTExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
      ]
    },
    {
      mainImage: "https://images.unsplash.com/photo-1719935769846-e41568d49dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHBvcnRyYWl0JTIwY2hpbGRyZW4lMjBzbWlsaW5nJTIwYnJpZ2h0fGVufDF8fHx8MTc1OTQ5MTExM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      styles: [
        { name: "Mosaic", image: "https://images.unsplash.com/photo-1568015300856-05e12413cb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2xlYXIlMjBmYWNlJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzU5NDkxMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Ghibli", image: "https://images.unsplash.com/photo-1677808566807-1097fc06b472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwY29sb3JmdWwlMjBtYWtldXAlMjBjbGVhciUyMGZhY2V8ZW58MXx8fHwxNzU5NDkxMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Lego", image: "https://images.unsplash.com/photo-1548808790-fcbad531508a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuJTIwZ2lybCUyMGhhcHB5JTIwY2xlYXIlMjBwb3J0cmFpdCUyMGJyaWdodCUyMHNtaWxlfGVufDF8fHx8MTc1OTQ5MTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Animal Toon", image: "https://images.unsplash.com/photo-1743013176089-64d187fe833f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhc2hpb24lMjBwb3J0cmFpdCUyMGNsZWFyJTIwZmFjZSUyMG5vJTIwb2JzdHJ1Y3Rpb258ZW58MXx8fHwxNzU5NDkxMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Toy", image: "https://images.unsplash.com/photo-1659353221237-6a1cfb73fd90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGhlYWRzaG90JTIwY2xlYXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk0OTExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
      ]
    },
    {
      mainImage: "https://images.unsplash.com/photo-1752084794888-0b27a762b6fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBlbGRlcmx5JTIwd29tYW4lMjBwb3J0cmFpdCUyMGNsZWFyJTIwZmFjZSUyMHNtaWxpbmd8ZW58MXx8fHwxNzU5NDkxMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      slider: { min: 10, max: 60, current: 50, label: "years" },
      styles: [
        { name: "50 years", image: "https://images.unsplash.com/photo-1568015300856-05e12413cb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2xlYXIlMjBmYWNlJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzU5NDkxMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "40 years", image: "https://images.unsplash.com/photo-1677808566807-1097fc06b472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwY29sb3JmdWwlMjBtYWtldXAlMjBjbGVhciUyMGZhY2V8ZW58MXx8fHwxNzU5NDkxMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "30 years", image: "https://images.unsplash.com/photo-1548808790-fcbad531508a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuJTIwZ2lybCUyMGhhcHB5JTIwY2xlYXIlMjBwb3J0cmFpdCUyMGJyaWdodCUyMHNtaWxlfGVufDF8fHx8MTc1OTQ5MTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "20 years", image: "https://images.unsplash.com/photo-1743013176089-64d187fe833f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhc2hpb24lMjBwb3J0cmFpdCUyMGNsZWFyJTIwZmFjZSUyMG5vJTIwb2JzdHJ1Y3Rpb258ZW58MXx8fHwxNzU5NDkxMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "10 years", image: "https://images.unsplash.com/photo-1659353221237-6a1cfb73fd90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGhlYWRzaG90JTIwY2xlYXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk0OTExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
      ]
    },
    {
      mainImage: "https://images.unsplash.com/photo-1659353221237-6a1cfb73fd90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGhlYWRzaG90JTIwY2xlYXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk0OTExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      styles: [
        { name: "Professional", image: "https://images.unsplash.com/photo-1568015300856-05e12413cb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2xlYXIlMjBmYWNlJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzU5NDkxMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "LinkedIn", image: "https://images.unsplash.com/photo-1677808566807-1097fc06b472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwY29sb3JmdWwlMjBtYWtldXAlMjBjbGVhciUyMGZhY2V8ZW58MXx8fHwxNzU5NDkxMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Corporate", image: "https://images.unsplash.com/photo-1548808790-fcbad531508a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuJTIwZ2lybCUyMGhhcHB5JTIwY2xlYXIlMjBwb3J0cmFpdCUyMGJyaWdodCUyMHNtaWxlfGVufDF8fHx8MTc1OTQ5MTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Headshot", image: "https://images.unsplash.com/photo-1743013176089-64d187fe833f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhc2hpb24lMjBwb3J0cmFpdCUyMGNsZWFyJTIwZmFjZSUyMG5vJTIwb2JzdHJ1Y3Rpb258ZW58MXx8fHwxNzU5NDkxMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Business", image: "https://images.unsplash.com/photo-1749025920174-dddf9c204d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNoaWxkJTIwYnJpZ2h0JTIwc21pbGUlMjBwb3J0cmFpdCUyMGNsZWFyJTIwZmFjZXxlbnwxfHx8fDE3NTk0OTExMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
      ]
    },
    {
      mainImage: "https://images.unsplash.com/photo-1677808566807-1097fc06b472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwY29sb3JmdWwlMjBtYWtldXAlMjBjbGVhciUyMGZhY2V8ZW58MXx8fHwxNzU5NDkxMTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      styles: [
        { name: "Colorful", image: "https://images.unsplash.com/photo-1568015300856-05e12413cb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2xlYXIlMjBmYWNlJTIwcG9ydHJhaXQlMjBzdHVkaW98ZW58MXx8fHwxNzU5NDkxMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Cute", image: "https://images.unsplash.com/photo-1548808790-fcbad531508a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWVuJTIwZ2lybCUyMGhhcHB5JTIwY2xlYXIlMjBwb3J0cmFpdCUyMGJyaWdodCUyMHNtaWxlfGVufDF8fHx8MTc1OTQ5MTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Toy Style", image: "https://images.unsplash.com/photo-1743013176089-64d187fe833f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhc2hpb24lMjBwb3J0cmFpdCUyMGNsZWFyJTIwZmFjZSUyMG5vJTIwb2JzdHJ1Y3Rpb258ZW58MXx8fHwxNzU5NDkxMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Playful", image: "https://images.unsplash.com/photo-1659353221237-6a1cfb73fd90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGhlYWRzaG90JTIwY2xlYXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk0OTExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { name: "Fantasy", image: "https://images.unsplash.com/photo-1749025920174-dddf9c204d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGNoaWxkJTIwYnJpZ2h0JTIwc21pbGUlMjBwb3J0cmFpdCUyMGNsZWFyJTIwZmFjZXxlbnwxfHx8fDE3NTk0OTExMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
      ]
    }
  ];

  const [sliderValue, setSliderValue] = useState(50);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="bg-black text-white w-full h-full max-w-md mx-auto relative overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} className="text-white" />
          </button>
          <button className="text-white px-4 py-2 bg-white/20 rounded-full">
            Restore
          </button>
        </div>

        {/* Image Carousel */}
        <div className="relative h-2/3 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <ImageWithFallback
                  src={slide.mainImage}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Age Slider - only for aging slide */}
                {slide.slider && (
                  <div className="absolute bottom-20 left-0 right-0 px-8">
                    <div className="text-white mb-4 text-2xl">
                      {sliderValue} {slide.slider.label}
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min={slide.slider.min}
                        max={slide.slider.max}
                        value={sliderValue}
                        onChange={(e) => setSliderValue(parseInt(e.target.value))}
                        className="w-full h-2 bg-white/30 rounded-full appearance-none slider"
                      />
                    </div>
                  </div>
                )}
                
                {/* Style thumbnails - only if no slider */}
                {!slide.slider && (
                  <div className="absolute bottom-4 left-0 right-0 px-4">
                    <div className="flex gap-2 justify-center">
                      {slide.styles.map((style, styleIndex) => (
                        <div key={styleIndex} className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/50">
                            <ImageWithFallback
                              src={style.image}
                              alt={style.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-xs text-white mt-1">{style.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full hover:bg-black/50 transition-colors"
          >
            <ChevronRight size={20} className="text-white" />
          </button>

          {/* Slide indicators */}
          <div className={`absolute left-0 right-0 flex justify-center gap-2 ${currentSlideData.slider ? 'bottom-8' : 'bottom-20'}`}>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 bg-black px-6 pb-6">
          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-white">Unlock to All Features</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-white">200% Faster Processing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-white">Unlimited Creations</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-white">Priority Access to New Content</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-white">No Ads, No Watermarks</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex gap-3 mb-6">
            {/* Lifetime - Best Value */}
            <div className="flex-1 border-2 border-purple-600 rounded-2xl p-3 relative bg-purple-600/10">
              <div className="absolute -top-2 left-3 bg-purple-600 text-white px-2 py-1 rounded-lg text-xs">
                BEST VALUE
              </div>
              <div className="text-center pt-2">
                <div className="text-2xl text-white">∞</div>
                <div className="text-sm text-white">Lifetime</div>
                <div className="text-xs text-gray-300">1 purchase</div>
                <div className="text-lg text-white mt-2">₫2,050,000</div>
              </div>
            </div>

            {/* 1 Year - SAVE 89% (highlighted as selected) */}
            <div className="flex-1 border-2 border-purple-500 rounded-2xl p-3 relative bg-purple-500">
              <div className="absolute -top-2 left-3 bg-purple-500 text-white px-2 py-1 rounded-lg text-xs">
                SAVE 89%
              </div>
              <div className="text-center pt-2">
                <div className="text-2xl text-white">1</div>
                <div className="text-sm text-white">Year</div>
                <div className="text-xs text-gray-200">₫18153.85 / Week</div>
                <div className="text-lg text-white mt-2">₫944,000</div>
              </div>
            </div>

            {/* 1 Week - Most Popular */}
            <div className="flex-1 border-2 border-gray-600 rounded-2xl p-3 relative bg-gray-600/10">
              <div className="absolute -top-2 left-3 bg-gray-600 text-white px-2 py-1 rounded-lg text-xs">
                MOST POPULAR
              </div>
              <div className="text-center pt-2">
                <div className="text-2xl text-white">1</div>
                <div className="text-sm text-white">Week</div>
                <div className="text-xs text-gray-400"></div>
                <div className="text-lg text-white mt-2">₫165,000</div>
              </div>
            </div>
          </div>

          {/* Continue button */}
          <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-2xl font-medium mb-4 flex items-center justify-center gap-2">
            Continue
            <ChevronRight size={20} />
          </button>

          {/* Footer */}
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-2">Auto-renewable. Cancel anytime.</p>
            <div className="flex justify-center gap-6 text-xs text-gray-400">
              <button className="underline">User Agreement</button>
              <button className="underline">Privacy Policy</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .slider {
          background: rgba(255,255,255,0.3);
        }
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #ec4899;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #ec4899;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}