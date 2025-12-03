import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const channelLink = 'https://t.me/triganaforia';

  const features = [
    {
      icon: 'Sparkles',
      title: 'Уникальный контент',
      description: 'Только оригинальные материалы и свежие идеи'
    },
    {
      icon: 'Users',
      title: 'Активное комьюнити',
      description: '101 подписчик и растем каждый день'
    },
    {
      icon: 'Zap',
      title: 'Регулярные посты',
      description: 'Новый контент появляется постоянно'
    }
  ];

  const stats = [
    { value: '101', label: 'Подписчиков', icon: 'Users' },
    { value: '∞', label: 'Вайба', icon: 'Sparkles' },
    { value: '24/7', label: 'Онлайн', icon: 'Zap' },
    { value: '100%', label: 'Честности', icon: 'Heart' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 animate-gradient bg-[length:400%_400%]" />
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 backdrop-blur-sm">
            <Icon name="Send" size={16} />
            <span className="text-sm font-medium">Telegram Channel</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              я не нарик
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Канал для тех, кто ценит честность и атмосферу. Присоединяйся к комьюнити!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity group"
              onClick={() => window.open(channelLink, '_blank')}
            >
              <Icon name="Send" size={24} className="mr-2" />
              Подписаться на канал
              <Icon name="ExternalLink" size={20} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2"
            >
              <Icon name="Info" size={24} className="mr-2" />
              Узнать больше
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
            <Icon name="TrendingUp" size={20} />
            <span className="text-sm">Уже 101 человек с нами</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 animate-fade-in">
              О канале
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Здесь ты найдешь контент, который заставит задуматься, улыбнуться и остаться. 
              Без лишнего пафоса, только по делу.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <Icon name={feature.icon as any} size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Цифры говорят сами за себя
            </h2>
            <p className="text-lg text-muted-foreground">
              Статистика канала, которая растет вместе с нами
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border text-center hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <Icon name={stat.icon as any} size={24} />
                </div>
                <p className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-gradient bg-[length:400%_400%]" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-background/50 backdrop-blur-sm rounded-full border border-primary/30">
                  <Icon name="Sparkles" size={16} />
                  <span className="text-sm font-medium">Присоединяйся прямо сейчас</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black mb-4">
                  Готов стать частью комьюнити?
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Жми кнопку и открывай для себя мир честного контента без фильтров
                </p>

                <Button 
                  size="lg"
                  className="text-lg px-10 py-7 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all hover:scale-105 group"
                  onClick={() => window.open(channelLink, '_blank')}
                >
                  <Icon name="Send" size={24} className="mr-3" />
                  Открыть t.me/triganaforia
                  <Icon name="ArrowRight" size={24} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="mt-6 text-sm text-muted-foreground">
                  Бесплатно. Без спама. Только качественный контент.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 md:p-8 bg-card border-border">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={32} />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">Есть вопросы или предложения?</h3>
                  <p className="text-muted-foreground">Пиши в личку канала, всегда рад пообщаться</p>
                </div>

                <Button 
                  variant="outline"
                  className="flex-shrink-0"
                  onClick={() => window.open(channelLink, '_blank')}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                я не нарик
              </p>
              <p className="text-sm text-muted-foreground">Telegram канал для своих</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open(channelLink, '_blank')}
              >
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            © 2024 Создано с душой ✨
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
