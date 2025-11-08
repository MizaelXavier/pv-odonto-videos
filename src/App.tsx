import { PlayCircle, TrendingUp, Users, Video, CheckCircle, Star, Clock, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Atraia Mais Pacientes com Vídeos e Criativos que Convertem
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-teal-50 max-w-4xl mx-auto">
            Transformamos sua clínica odontológica em referência no digital com conteúdo profissional que gera resultados reais em até 30 dias
          </p>
          <button className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-all transform hover:scale-105 shadow-lg">
            Quero Aumentar Minha Carteira de Pacientes
          </button>
        </div>
      </header>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Você Reconhece Esses Desafios na Sua Clínica?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            A maioria dos dentistas enfrenta os mesmos obstáculos no marketing digital
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Agenda com Horários Vazios",
                desc: "Você investe em anúncios mas não consegue preencher sua agenda, perdendo faturamento todos os meses"
              },
              {
                title: "Criativos Genéricos que Não Convertem",
                desc: "Suas artes parecem iguais às de qualquer outra clínica, sem diferenciação e com baixíssima taxa de cliques"
              },
              {
                title: "Vídeos Amadores que Afastam Pacientes",
                desc: "Conteúdo de baixa qualidade transmite desprofissionalismo e faz potenciais pacientes escolherem a concorrência"
              },
              {
                title: "Custo por Lead Cada Vez Mais Alto",
                desc: "Você gasta cada vez mais em anúncios mas o retorno continua diminuindo, consumindo sua margem de lucro"
              },
              {
                title: "Falta de Tempo para Criar Conteúdo",
                desc: "Entre atendimentos e gestão da clínica, não sobra tempo para produzir material de marketing de qualidade"
              }
            ].map((problem, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="font-bold text-lg mb-3 text-gray-900">{problem.title}</h3>
                <p className="text-gray-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              A Solução Completa para Marketing Odontológico
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Criativos e vídeos publicitários desenvolvidos especificamente para clínicas odontológicas,
              com linguagem que conecta e estratégias que convertem
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Produção de vídeo profissional"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Video className="text-teal-600 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Vídeos Profissionais</h3>
                    <p className="text-gray-600">Produção completa com roteiro estratégico, edição cinematográfica e legendas otimizadas para máximo engajamento</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PlayCircle className="text-teal-600 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Criativos de Alta Conversão</h3>
                    <p className="text-gray-600">Design persuasivo com copywriting focado em dores específicas do seu público-alvo odontológico</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="text-teal-600 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Estratégia Baseada em Dados</h3>
                    <p className="text-gray-600">Análise de métricas e otimização contínua para reduzir seu CAC e aumentar o ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Benefícios Reais para Sua Clínica
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Aumento de 40-60% em Novos Pacientes",
                desc: "Nossos clientes reportam crescimento significativo na captação dentro dos primeiros 60 dias"
              },
              {
                icon: TrendingUp,
                title: "Redução do CAC em até 35%",
                desc: "Criativos otimizados diminuem o custo por aquisição de cliente, maximizando seu investimento"
              },
              {
                icon: Star,
                title: "Posicionamento como Referência",
                desc: "Conteúdo profissional eleva a percepção de autoridade e expertise da sua clínica"
              },
              {
                icon: Clock,
                title: "Economia de 15h+ por Semana",
                desc: "Enquanto cuidamos do seu marketing, você foca no que faz melhor: atender pacientes"
              },
              {
                icon: CheckCircle,
                title: "Material Pronto para Multi-Canais",
                desc: "Use os mesmos criativos no Instagram, Facebook, Google Ads e YouTube"
              },
              {
                icon: Shield,
                title: "Conformidade com CFO",
                desc: "Todo conteúdo criado respeitando as normas éticas do Conselho Federal de Odontologia"
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <benefit.icon className="text-teal-600 mb-4" size={40} />
                <h3 className="font-bold text-lg mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Roberto Almeida",
                specialty: "Implantodontia",
                city: "São Paulo - SP",
                text: "Em 45 dias aumentamos nossa agenda em 52%. Os vídeos sobre implantes que eles produziram trouxeram pacientes qualificados dispostos a investir. Nosso ticket médio subiu R$ 3.200.",
                rating: 5
              },
              {
                name: "Dra. Mariana Costa",
                specialty: "Ortodontia",
                city: "Belo Horizonte - MG",
                text: "Finalmente consegui preencher minha agenda de alinhadores! Os criativos são incríveis e os pacientes já chegam convencidos. Recuperei o investimento na primeira semana.",
                rating: 5
              },
              {
                name: "Dr. Felipe Santana",
                specialty: "Clínica Geral",
                city: "Curitiba - PR",
                text: "Profissionalismo total. O material é tão bom que nossos pacientes atuais compartilham organicamente. Viramos referência no bairro sem precisar fazer nada além de postar o conteúdo.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.specialty}</p>
                  <p className="text-sm text-gray-500">{testimonial.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Casos de Sucesso Reais
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Resultados mensuráveis de clínicas que transformaram seu marketing
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">Caso 1: Clínica de Estética</h3>
              <p className="text-gray-300 mb-6">
                Campanha focada em clareamento e lentes de contato com 12 vídeos e 30 criativos ao longo de 3 meses
              </p>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Novos pacientes:</span>
                  <span className="font-bold text-xl text-teal-400">+127</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">ROI:</span>
                  <span className="font-bold text-xl text-teal-400">420%</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Redução CAC:</span>
                  <span className="font-bold text-xl text-teal-400">-38%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">Caso 2: Implantodontista</h3>
              <p className="text-gray-300 mb-6">
                Série educativa sobre implantes dentários com depoimentos de pacientes reais e demonstrações 3D
              </p>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Orçamentos gerados:</span>
                  <span className="font-bold text-xl text-teal-400">89</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Taxa de conversão:</span>
                  <span className="font-bold text-xl text-teal-400">34%</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Faturamento adicional:</span>
                  <span className="font-bold text-xl text-teal-400">R$ 287k</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">Caso 3: Ortodontista</h3>
              <p className="text-gray-300 mb-6">
                Campanha focada em alinhadores invisíveis com antes/depois e explicações sobre o tratamento
              </p>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Leads qualificados:</span>
                  <span className="font-bold text-xl text-teal-400">213</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Pacientes iniciados:</span>
                  <span className="font-bold text-xl text-teal-400">47</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Crescimento mensal:</span>
                  <span className="font-bold text-xl text-teal-400">+156%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Veja Nosso Trabalho em Ação
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Exemplos reais de vídeos e criativos que geraram resultados para clínicas odontológicas
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center relative group">
                <PlayCircle className="text-teal-600 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer" size={64} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Vídeo de Implante Dentário</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">Campanha educativa que gerou 47 orçamentos em 30 dias</p>
                <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold">
                  <TrendingUp size={16} />
                  <span>+180% em conversões</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center relative group">
                <PlayCircle className="text-teal-600 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer" size={64} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Clareamento Dental</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">Vídeo antes/depois que viralizou organicamente</p>
                <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold">
                  <Users size={16} />
                  <span>89K visualizações</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center relative group">
                <PlayCircle className="text-teal-600 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer" size={64} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Alinhadores Invisíveis</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">Série de 3 vídeos explicativos sobre o tratamento</p>
                <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold">
                  <CheckCircle size={16} />
                  <span>34% taxa de conversão</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center relative group">
                <PlayCircle className="text-teal-600 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer" size={64} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Depoimento de Paciente</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">Testemunho real sobre tratamento de canal</p>
                <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold">
                  <Star size={16} />
                  <span>4.9/5 engajamento</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center relative group">
                <PlayCircle className="text-teal-600 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer" size={64} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Tour pela Clínica</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">Apresentação institucional que aumentou a confiança</p>
                <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold">
                  <Shield size={16} />
                  <span>+65% em agendamentos</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center relative group">
                <PlayCircle className="text-teal-600 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all cursor-pointer" size={64} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Lentes de Contato Dental</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">Explicação do procedimento passo a passo</p>
                <div className="flex items-center gap-2 text-teal-600 text-sm font-semibold">
                  <Clock size={16} />
                  <span>Redução de 40% no CAC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Escolha Seu Plano Ideal
          </h2>
          <p className="text-center text-teal-50 mb-12 text-lg">
            Investimento que se paga com apenas 2-3 novos pacientes
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Para quem está começando</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ 2.497</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>6 vídeos profissionais/mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>15 criativos estáticos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>Copywriting otimizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>1 revisão por material</span>
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
                Começar Agora
              </button>
            </div>

            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl border-4 border-yellow-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm">
                MAIS POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-gray-600 mb-6">Para crescimento acelerado</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ 4.497</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>12 vídeos profissionais/mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>30 criativos estáticos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>Copywriting + roteiros estratégicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>Revisões ilimitadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>Consultoria mensal de estratégia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>Relatório de performance</span>
                </li>
              </ul>
              <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
                Escolher Growth
              </button>
            </div>

            <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p className="text-gray-600 mb-6">Para dominar o mercado</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ 7.997</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>20 vídeos profissionais/mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>50 criativos estáticos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>Produção de conteúdo in loco</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>Estrategista dedicado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>Suporte prioritário WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>Testes A/B e otimização contínua</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span>Dashboard analytics personalizado</span>
                </li>
              </ul>
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
                Quero o Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-yellow-50">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="mx-auto text-teal-600 mb-6" size={64} />
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Garantia de 30 Dias Sem Riscos
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Estamos tão confiantes nos resultados que oferecemos garantia total. Se em 30 dias você não perceber
            melhora significativa na qualidade dos seus anúncios e no engajamento do público, devolvemos 100% do seu investimento.
          </p>
          <p className="text-xl font-semibold text-teal-700">
            Zero risco. Apenas resultados.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Quanto tempo leva para ver resultados?",
                a: "A maioria dos nossos clientes começa a ver aumento nas conversões dentro de 15-30 dias. O impacto completo geralmente é percebido após 60-90 dias de trabalho consistente."
              },
              {
                q: "Vocês conhecem as regulamentações do CFO?",
                a: "Sim! Todo nosso conteúdo é criado respeitando rigorosamente o Código de Ética Odontológica. Temos consultoria jurídica especializada que valida cada material antes da entrega."
              },
              {
                q: "Preciso fornecer fotos e vídeos da minha clínica?",
                a: "Para os planos Starter e Growth, sim. Você nos envia o material bruto e nós transformamos em conteúdo profissional. No plano Premium, fazemos a produção completa na sua clínica."
              },
              {
                q: "Como funciona o processo de criação?",
                a: "Após a contratação, fazemos uma reunião de briefing para entender sua clínica, público e objetivos. Depois, criamos um calendário de conteúdo e você recebe os materiais semanalmente para aprovação."
              },
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Trabalhamos com contratos mensais. Você pode cancelar com 30 dias de antecedência. Mas estamos confiantes que os resultados vão fazer você querer continuar!"
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-gray-900">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Transformar Sua Clínica?
          </h2>
          <p className="text-xl mb-8 text-teal-50">
            Junte-se a mais de 200 clínicas odontológicas que já aumentaram sua carteira de pacientes com nossos criativos
          </p>
          <button className="bg-white text-teal-600 px-10 py-5 rounded-lg text-xl font-bold hover:bg-teal-50 transition-all transform hover:scale-105 shadow-xl">
            Solicitar Proposta Personalizada
          </button>
          <p className="mt-6 text-sm text-teal-100">
            ⏰ Vagas limitadas: Atendemos apenas 5 novas clínicas por mês para garantir qualidade máxima
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center">
        <p>© 2024 Criativos Odonto. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
