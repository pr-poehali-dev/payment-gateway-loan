import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [activeTab, setActiveTab] = useState('payment');
  const [amount, setAmount] = useState('48000');
  const [loanBalance] = useState(48000);
  const [monthlyPayment] = useState(4800);

  const paymentHistory = [
    { id: 1, date: '15.09.2025', amount: 4800, status: 'completed', method: 'Карта •••• 4532' },
    { id: 2, date: '15.08.2025', amount: 4800, status: 'completed', method: 'Карта •••• 4532' },
    { id: 3, date: '15.07.2025', amount: 4800, status: 'completed', method: 'Карта •••• 4532' },
    { id: 4, date: '15.06.2025', amount: 4800, status: 'completed', method: 'Карта •••• 4532' },
  ];

  const faqItems = [
    {
      question: 'Как происходит обработка платежей?',
      answer: 'Все платежи обрабатываются через защищенные каналы с использованием протокола TLS 1.3. Данные вашей карты шифруются и не хранятся на наших серверах.'
    },
    {
      question: 'Когда средства поступят на счет?',
      answer: 'Платежи обрабатываются мгновенно. В редких случаях зачисление может занять до 24 часов в зависимости от вашего банка.'
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Принимаем банковские карты Visa, MasterCard, МИР, а также переводы через СБП и электронные кошельки.'
    },
    {
      question: 'Можно ли настроить автоплатеж?',
      answer: 'Да, вы можете настроить автоматическое списание в разделе "Профиль". Платежи будут производиться автоматически в установленную дату.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0066FF] via-[#00D4AA] to-[#1A1D29]">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-lg flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Secure Payment Gateway</h1>
                <p className="text-white/70 text-sm">Защищённая система платежей</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-white/10 text-white border-white/20 backdrop-blur-lg">
              <Icon name="Lock" size={14} className="mr-1" />
              256-bit SSL
            </Badge>
          </div>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-lg border border-white/20 p-1 grid grid-cols-5 gap-1">
            <TabsTrigger 
              value="payment" 
              className="data-[state=active]:bg-white data-[state=active]:text-[#0066FF]"
            >
              <Icon name="CreditCard" size={16} className="mr-2" />
              Оплата
            </TabsTrigger>
            <TabsTrigger 
              value="history"
              className="data-[state=active]:bg-white data-[state=active]:text-[#0066FF]"
            >
              <Icon name="History" size={16} className="mr-2" />
              История
            </TabsTrigger>
            <TabsTrigger 
              value="security"
              className="data-[state=active]:bg-white data-[state=active]:text-[#0066FF]"
            >
              <Icon name="ShieldCheck" size={16} className="mr-2" />
              Безопасность
            </TabsTrigger>
            <TabsTrigger 
              value="support"
              className="data-[state=active]:bg-white data-[state=active]:text-[#0066FF]"
            >
              <Icon name="HelpCircle" size={16} className="mr-2" />
              FAQ
            </TabsTrigger>
            <TabsTrigger 
              value="profile"
              className="data-[state=active]:bg-white data-[state=active]:text-[#0066FF]"
            >
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </TabsTrigger>
          </TabsList>

          <TabsContent value="payment" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 border-white/20 bg-white/95 backdrop-blur-lg shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Wallet" size={24} />
                    Оплата займа
                  </CardTitle>
                  <CardDescription>Введите сумму для погашения задолженности</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Сумма платежа</Label>
                    <div className="relative">
                      <Input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="text-2xl font-bold tabular-nums pr-12"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">₽</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Минимальный платёж: {monthlyPayment.toLocaleString()} ₽</p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <Label>Данные карты</Label>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label htmlFor="cardNumber" className="text-xs">Номер карты</Label>
                        <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="font-mono" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry" className="text-xs">Срок действия</Label>
                          <Input id="expiry" placeholder="MM/YY" className="font-mono" />
                        </div>
                        <div>
                          <Label htmlFor="cvv" className="text-xs">CVV</Label>
                          <Input id="cvv" type="password" placeholder="•••" maxLength={3} className="font-mono" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#0066FF] to-[#00D4AA] hover:opacity-90 text-white font-semibold py-6 text-lg shadow-lg">
                    <Icon name="Lock" size={20} className="mr-2" />
                    Оплатить {parseInt(amount).toLocaleString()} ₽
                  </Button>

                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Shield" size={14} />
                      <span>PCI DSS</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Lock" size={14} />
                      <span>SSL</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Fingerprint" size={14} />
                      <span>3D Secure</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-white/20 bg-white/95 backdrop-blur-lg shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Информация о займе</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Остаток задолженности</p>
                      <p className="text-3xl font-bold tabular-nums">{loanBalance.toLocaleString()} ₽</p>
                    </div>
                    <Progress value={60} className="h-2" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Погашено</p>
                        <p className="font-semibold">32 000 ₽</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Осталось</p>
                        <p className="font-semibold">{loanBalance.toLocaleString()} ₽</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-white/20 bg-gradient-to-br from-[#0066FF] to-[#00D4AA] text-white shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="ShieldCheck" size={20} />
                      Гарантии безопасности
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="mt-0.5 flex-shrink-0" />
                      <p>Шифрование 256-bit SSL/TLS</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="mt-0.5 flex-shrink-0" />
                      <p>Данные карты не сохраняются</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="mt-0.5 flex-shrink-0" />
                      <p>Соответствие PCI DSS Level 1</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="animate-fade-in">
            <Card className="border-white/20 bg-white/95 backdrop-blur-lg shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Receipt" size={24} />
                  История платежей
                </CardTitle>
                <CardDescription>Все ваши транзакции за последние 12 месяцев</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentHistory.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D4AA] flex items-center justify-center">
                          <Icon name="CheckCircle" size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">{payment.amount.toLocaleString()} ₽</p>
                          <p className="text-sm text-muted-foreground">{payment.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Выполнен
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{payment.method}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-white/20 bg-white/95 backdrop-blur-lg shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="ShieldCheck" size={24} className="text-[#0066FF]" />
                    Технологии защиты
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <Icon name="Lock" size={24} className="text-[#0066FF] flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">SSL/TLS шифрование</h4>
                      <p className="text-sm text-muted-foreground">Все данные передаются по защищенному протоколу TLS 1.3 с 256-битным шифрованием</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <Icon name="Fingerprint" size={24} className="text-[#00D4AA] flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">3D Secure 2.0</h4>
                      <p className="text-sm text-muted-foreground">Дополнительная аутентификация для максимальной защиты платежей</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                    <Icon name="ShieldAlert" size={24} className="text-[#0066FF] flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Антифрод система</h4>
                      <p className="text-sm text-muted-foreground">Мониторинг подозрительных транзакций в режиме реального времени</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/20 bg-white/95 backdrop-blur-lg shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" size={24} className="text-[#00D4AA]" />
                    Сертификаты и соответствие
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg border-2 border-[#0066FF]/20 bg-[#0066FF]/5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">PCI DSS Level 1</h4>
                      <Badge className="bg-[#0066FF]">Сертифицирован</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Высший уровень безопасности обработки платежных данных</p>
                  </div>
                  <div className="p-4 rounded-lg border-2 border-[#00D4AA]/20 bg-[#00D4AA]/5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">ISO 27001</h4>
                      <Badge className="bg-[#00D4AA]">Сертифицирован</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Международный стандарт управления информационной безопасностью</p>
                  </div>
                  <div className="p-4 rounded-lg border-2 border-[#0066FF]/20 bg-[#0066FF]/5">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">GDPR</h4>
                      <Badge className="bg-[#0066FF]">Соответствует</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Защита персональных данных согласно европейским стандартам</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="support" className="animate-fade-in">
            <Card className="border-white/20 bg-white/95 backdrop-blur-lg shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={24} />
                  Часто задаваемые вопросы
                </CardTitle>
                <CardDescription>Ответы на популярные вопросы о платёжной системе</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <Separator className="my-6" />

                <div className="bg-gradient-to-br from-[#0066FF] to-[#00D4AA] rounded-lg p-6 text-white">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="Headphones" size={20} />
                    Не нашли ответ?
                  </h3>
                  <p className="text-white/90 mb-4 text-sm">Свяжитесь с нашей службой поддержки — мы работаем 24/7</p>
                  <div className="flex gap-3">
                    <Button variant="secondary" className="flex-1">
                      <Icon name="Mail" size={16} className="mr-2" />
                      Email
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Телефон
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-white/20 bg-white/95 backdrop-blur-lg shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="User" size={24} />
                    Профиль пользователя
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D4AA] flex items-center justify-center text-white text-2xl font-bold">
                      ИИ
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Иван Иванов</h3>
                      <p className="text-sm text-muted-foreground">ivan.ivanov@example.com</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">Номер договора</Label>
                      <p className="font-mono font-semibold">№ 2024-10-0012345</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Дата регистрации</Label>
                      <p className="font-semibold">15 января 2024</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Статус верификации</Label>
                      <Badge className="bg-green-500">
                        <Icon name="CheckCircle" size={14} className="mr-1" />
                        Верифицирован
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/20 bg-white/95 backdrop-blur-lg shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CreditCard" size={24} />
                    Сохранённые карты
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 rounded-lg border-2 border-primary/20 bg-primary/5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon name="CreditCard" size={20} className="text-primary" />
                        <span className="font-mono font-semibold">•••• 4532</span>
                      </div>
                      <Badge variant="outline">Основная</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Visa • Действует до 12/26</p>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить карту
                  </Button>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Автоплатёж</Label>
                      <Badge variant="secondary">Отключен</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Настройте автоматическое списание ежемесячного платежа</p>
                    <Button variant="outline" className="w-full mt-2">
                      Настроить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
