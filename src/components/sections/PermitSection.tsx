import { useState } from 'react';
import { AnimatedDiv } from '../AnimatedDiv';
import { Icon } from '../Icon';
import { useLanguage } from '@/contexts/LanguageContext';

export const PermitSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedDiv className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.permits.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            {t.permits.subtitle}
          </p>
        </AnimatedDiv>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content - 2/3 */}
          <div className="lg:col-span-2 space-y-8">
            {/* Residencia Temporal */}
            <AnimatedDiv>
              <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover-lift">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-2xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{t.permits.temporaryTitle}</h3>
                    <p className="text-muted-foreground">{t.permits.temporaryDescription}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="check" className="text-primary mt-1 flex-shrink-0" />
                    <p><strong>{t.permits.temporaryDuration}</strong> {t.permits.temporaryReq1}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="check" className="text-primary mt-1 flex-shrink-0" />
                    <p><strong>{t.permits.temporaryRequirement}</strong> {t.permits.temporaryReq2}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="check" className="text-primary mt-1 flex-shrink-0" />
                    <p><strong>Documentos clave:</strong> {t.permits.temporaryReq3}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="check" className="text-primary mt-1 flex-shrink-0" />
                    <p><strong>Beneficio:</strong> {t.permits.temporaryReq4}</p>
                  </div>
                </div>
              </div>
            </AnimatedDiv>

            {/* Residencia Permanente */}
            <AnimatedDiv delay={100}>
              <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover-lift">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary text-xl sm:text-2xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{t.permits.permanentTitle}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{t.permits.permanentDescription}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-bold text-lg mb-3">{t.permits.standardPathTitle}</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <Icon name="check" className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                        <span>{t.permits.standardReq1}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="check" className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                        <span>{t.permits.standardReq2}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="check" className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                        <span>{t.permits.standardReq3}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20">
                    <h4 className="font-bold text-lg mb-3">{t.permits.investorPathTitle}</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <Icon name="check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span>{t.permits.investorReq1}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span>{t.permits.investorReq2}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span>{t.permits.investorReq3}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedDiv>

            {/* Cédula de Identidad */}
            <AnimatedDiv delay={200}>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover-lift border border-primary/20">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="shield" className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{t.permits.cedulaTitle}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-semibold">{t.permits.cedulaSubtitle}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold mb-2">{t.permits.cedulaAllowsTitle}</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <Icon name="check" className="text-primary mt-0.5" size={16} />
                        <span>{t.permits.cedulaAllow1}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="check" className="text-primary mt-0.5" size={16} />
                        <span>{t.permits.cedulaAllow2}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="check" className="text-primary mt-0.5" size={16} />
                        <span>{t.permits.cedulaAllow3}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="check" className="text-primary mt-0.5" size={16} />
                        <span>{t.permits.cedulaAllow4}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold mb-2">{t.permits.cedulaRequirementsTitle}</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <Icon name="document" className="text-secondary mt-0.5" size={16} />
                        <span>{t.permits.cedulaReq1}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="document" className="text-secondary mt-0.5" size={16} />
                        <span>{t.permits.cedulaReq2}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="document" className="text-secondary mt-0.5" size={16} />
                        <span>{t.permits.cedulaReq3}</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="document" className="text-secondary mt-0.5" size={16} />
                        <span>{t.permits.cedulaReq4}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedDiv>

            {/* Comparison Table */}
            <AnimatedDiv delay={300}>
              <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t.permits.comparisonTitle}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 px-4">{t.permits.comparisonFeature}</th>
                      <th className="text-left py-3 px-4">{t.permits.comparisonTemporary}</th>
                      <th className="text-left py-3 px-4">{t.permits.comparisonPermanent}</th>
                      <th className="text-left py-3 px-4">{t.permits.comparisonSUACE}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">{t.permits.comparisonDuration}</td>
                      <td className="py-3 px-4">{t.permits.comparisonDuration2Years}</td>
                      <td className="py-3 px-4">{t.permits.comparisonDurationIndefinite}</td>
                      <td className="py-3 px-4">{t.permits.comparisonDurationIndefinite}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">{t.permits.comparisonInvestment}</td>
                      <td className="py-3 px-4">{t.permits.comparisonInvestment5k}</td>
                      <td className="py-3 px-4">{t.permits.comparisonInvestmentNA}</td>
                      <td className="py-3 px-4">{t.permits.comparisonInvestmentVariable}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">{t.permits.comparisonProcessing}</td>
                      <td className="py-3 px-4">{t.permits.comparisonProcessing24}</td>
                      <td className="py-3 px-4">{t.permits.comparisonProcessing36}</td>
                      <td className="py-3 px-4">{t.permits.comparisonProcessing46}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">{t.permits.comparisonGetsCedula}</td>
                      <td className="py-3 px-4">✓</td>
                      <td className="py-3 px-4">✓</td>
                      <td className="py-3 px-4">✓</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedDiv>
          </div>

          {/* Sidebar - Contact Form */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <AnimatedDiv delay={100}>
                <div className="bg-gradient-to-br from-primary to-secondary rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t.permits.contactFormTitle}</h3>
                  <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
                    {t.permits.contactFormSubtitle}
                  </p>

                  {submitStatus === 'success' ? (
                    <div className="bg-white/20 rounded-lg p-4 sm:p-6 text-center">
                      <Icon name="check" className="mx-auto mb-2 sm:mb-3" size={40} />
                      <p className="font-semibold text-sm sm:text-base">{t.permits.contactFormSuccess}</p>
                      <p className="text-xs sm:text-sm mt-2 opacity-90">{t.permits.contactFormSuccessSubtitle}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t.permits.contactFormName}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={t.permits.contactFormEmail}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={t.permits.contactFormPhone}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                      </div>
                      <div>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={t.permits.contactFormMessage}
                          rows={4}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? t.permits.contactFormSubmitting : t.permits.contactFormSubmit}
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
