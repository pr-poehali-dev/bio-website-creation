import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Креативный проект',
      description: 'Современный дизайн с использованием градиентов и абстрактных форм',
      image: 'https://cdn.poehali.dev/projects/d904dae4-92d3-4d5f-a827-a39011b3d936/files/3fa40028-6853-4d39-ba59-8b5c24a431c2.jpg',
      category: 'Дизайн'
    },
    {
      id: 2,
      title: 'Цифровое искусство',
      description: 'Яркие цвета и динамичные композиции для современных брендов',
      image: 'https://cdn.poehali.dev/projects/d904dae4-92d3-4d5f-a827-a39011b3d936/files/ffc4bc0a-ae96-46ad-8a96-cddaad2b1a3b.jpg',
      category: 'Арт'
    },
    {
      id: 3,
      title: 'Современный стиль',
      description: 'Инновационный подход к визуальной коммуникации',
      image: 'https://cdn.poehali.dev/projects/d904dae4-92d3-4d5f-a827-a39011b3d936/files/76ac6519-b509-407b-a880-b01b9fbaee43.jpg',
      category: 'Веб-дизайн'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Портфолио
          </h1>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              Обо мне
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">
              Галерея
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 animate-gradient bg-[length:400%_400%]" />
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
            <span className="text-sm font-medium">✨ Добро пожаловать</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Творческое<br />Пространство
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаю современные цифровые решения с акцентом на дизайн и пользовательский опыт
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection('gallery')}
            >
              Смотреть работы
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              Связаться
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-12 text-center animate-fade-in">
              Обо мне
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card border-border hover:border-primary transition-colors animate-scale-in">
                <div className="mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Творческий подход</h3>
                <p className="text-muted-foreground">
                  Каждый проект для меня — это возможность создать что-то уникальное и запоминающееся. 
                  Использую современные тренды и технологии.
                </p>
              </Card>

              <Card className="p-8 bg-card border-border hover:border-secondary transition-colors animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Icon name="Target" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Фокус на результат</h3>
                <p className="text-muted-foreground">
                  Важен не только внешний вид, но и функциональность. Создаю решения, 
                  которые работают и приносят ценность.
                </p>
              </Card>

              <Card className="p-8 bg-card border-border hover:border-accent transition-colors animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Icon name="Zap" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Быстрая адаптация</h3>
                <p className="text-muted-foreground">
                  Слежу за последними трендами в дизайне и технологиях. 
                  Быстро внедряю новые инструменты и методики.
                </p>
              </Card>

              <Card className="p-8 bg-card border-border hover:border-primary transition-colors animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <Icon name="Heart" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Страсть к деталям</h3>
                <p className="text-muted-foreground">
                  Уделяю внимание каждой мелочи — от типографики до микроанимаций. 
                  Детали создают впечатление.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-32 relative bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black mb-4 text-center animate-fade-in">
            Галерея работ
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Избранные проекты и достижения
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-xs font-semibold px-2 py-1 bg-primary/80 rounded-full mb-2 inline-block">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-6 animate-fade-in">
              Свяжитесь со мной
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Готов обсудить ваш проект и воплотить идеи в жизнь
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity group"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Email
                <Icon name="ExternalLink" size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="group"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Telegram
                <Icon name="ExternalLink" size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="group"
              >
                <Icon name="Github" size={20} className="mr-2" />
                GitHub
                <Icon name="ExternalLink" size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Briefcase" size={24} />
                </div>
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm text-muted-foreground">Проектов</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Icon name="Users" size={24} />
                </div>
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm text-muted-foreground">Клиентов</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Icon name="Award" size={24} />
                </div>
                <p className="text-2xl font-bold">5+</p>
                <p className="text-sm text-muted-foreground">Наград</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <Icon name="Star" size={24} />
                </div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-muted-foreground">Качество</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Портфолио. Создано с любовью и вниманием к деталям ✨</p>
        </div>
      </footer>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {projects.find(p => p.id === selectedProject)?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <img 
              src={projects.find(p => p.id === selectedProject)?.image} 
              alt={projects.find(p => p.id === selectedProject)?.title}
              className="w-full rounded-lg"
            />
            <p className="text-muted-foreground">
              {projects.find(p => p.id === selectedProject)?.description}
            </p>
            <div className="flex gap-2">
              <Button className="bg-gradient-to-r from-primary to-secondary">
                Подробнее
                <Icon name="ExternalLink" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
