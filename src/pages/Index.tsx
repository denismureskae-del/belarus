import { Button } from "@/components/ui/button";
import { Check, MapPin, Gift, Shield, Truck, Phone, ExternalLink } from "lucide-react";
import plateMain from "@/assets/plate-main.png";
import plateWall from "@/assets/plate-wall.jpg";
import plateTable from "@/assets/plate-table.jpg";
import plateHands from "@/assets/plate-hands.jpg";

const Index = () => {
  const price = "120"; // редактируемая цена

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
        
        <div className="container relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
                Ручная работа · Ограниченный тираж
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Декоративная тарелка с образом зубра — 
                <span className="text-primary"> символ силы</span> и наследия
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Авторский дизайн в стиле белорусского народного орнамента.
                <br />Натуральное дерево. Ручная роспись.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
                <a href="https://wa.me/79680601602" target="_blank" rel="noopener noreferrer">
                  Заказать
                </a>
              </Button>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={plateMain} 
                alt="Декоративная тарелка с зубром" 
                className="w-full max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
                О продукте
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Каждая тарелка — это визуальный код культуры
              </h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-muted-foreground text-sm">Диаметр</p>
                  <p className="text-xl font-semibold text-foreground">25 см</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-muted-foreground text-sm">Материал</p>
                  <p className="text-xl font-semibold text-foreground">Натуральное дерево</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-muted-foreground text-sm">Техника</p>
                  <p className="text-xl font-semibold text-foreground">Декоративная роспись</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-muted-foreground text-sm">Стиль</p>
                  <p className="text-xl font-semibold text-foreground">Народный орнамент</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Назначение: декор интерьера, статусный подарок, предмет коллекции этнического искусства.
              </p>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src={plateTable} 
                alt="Тарелка на столе" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Symbolism */}
      <section className="py-20 lg:py-32 bg-accent text-accent-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-medium tracking-widest uppercase mb-4 text-sm opacity-70">
              Символика
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Зубр — символ силы, устойчивости и земли
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary fill-current">
                    <path d="M20 2 L38 20 L20 38 L2 20 Z M20 10 L30 20 L20 30 L10 20 Z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Национальный символ</h3>
                <p className="text-sm opacity-80">Зубр — живое воплощение силы и свободы белорусской земли</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary fill-current">
                    <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Язык традиции</h3>
                <p className="text-sm opacity-80">Геометрические орнаменты передают смыслы сквозь поколения</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary fill-current">
                    <rect x="8" y="8" width="10" height="10" />
                    <rect x="22" y="8" width="10" height="10" />
                    <rect x="8" y="22" width="10" height="10" />
                    <rect x="22" y="22" width="10" height="10" />
                    <rect x="15" y="15" width="10" height="10" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">Современный дизайн</h3>
                <p className="text-sm opacity-80">Сочетание древних мотивов и актуальной эстетики</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Interior */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            <img 
              src={plateWall} 
              alt="Тарелка в интерьере на стене" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
            <img 
              src={plateHands} 
              alt="Тарелка в руках" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Why Valuable */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm text-center">
              Преимущества
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
              Почему это ценно
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Авторский дизайн",
                "Ручная работа",
                "Уникальный орнамент",
                "Подходит для современного и этнического интерьера",
                "Идеальный подарок с историей",
                "Ограниченный тираж"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where It Fits */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase mb-4 text-sm">
              Применение
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
              Где будет смотреться
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: <MapPin className="w-5 h-5" />, text: "Гостиная" },
                { icon: <MapPin className="w-5 h-5" />, text: "Кабинет" },
                { icon: <MapPin className="w-5 h-5" />, text: "Загородный дом" },
                { icon: <MapPin className="w-5 h-5" />, text: "Арт-пространство" },
                { icon: <Gift className="w-5 h-5" />, text: "Подарок партнёрам" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border">
                  <span className="text-primary">{item.icon}</span>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emotion / Trust */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed italic">
              «Эта тарелка создана не для массового рынка. 
              <br className="hidden md:block" />
              Она для тех, кто чувствует ценность формы, смысла и происхождения вещей.»
            </blockquote>
          </div>
        </div>
      </section>

      {/* Purchase Block */}
      <section className="py-20 lg:py-32 bg-accent text-accent-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-medium tracking-widest uppercase mb-4 text-sm opacity-70">
                  Заказать
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Декоративная тарелка с зубром
                </h2>
                <p className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  {price} BYN
                </p>
                
                <Button size="lg" className="w-full md:w-auto text-lg px-12 py-6 bg-primary hover:bg-primary/90 mb-8" asChild>
                  <a href="https://wa.me/79680601602" target="_blank" rel="noopener noreferrer">
                    Заказать
                  </a>
                </Button>

                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <Truck className="w-4 h-4" />
                    <span>Доставка по миру</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <Shield className="w-4 h-4" />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm opacity-80">
                    <Gift className="w-4 h-4" />
                    <span>Подарочная упаковка</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src={plateMain} 
                  alt="Декоративная тарелка" 
                  className="w-full max-w-sm drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Скарбница</h3>
              <p className="text-sm opacity-70">
                Мастерская авторских изделий ручной работы. 
                Минск, Беларусь.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <a href="tel:+375296661681" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4" />
                  +375 29 666 16 81
                </a>
                <a href="tel:+79680601602" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4" />
                  +7 968 060 16 02
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Мы в сети</h4>
              <a 
                href="https://ru.pinterest.com/pin/794040978101302970" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Pinterest
              </a>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            © {new Date().getFullYear()} Скарбница. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
