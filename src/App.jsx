import { useEffect, useMemo, useState } from 'react';

const slides = [
  {
    title: 'Discover картын урамшуулал',
    subtitle: 'Discover Card Bonus!',
    body: 'Шинэ хэрэглэгчдэд ээлтэй, эхлүүлэхэд тохиромжтой уян хатан нөхцөл болон нэмэлт боломжуудтай.'
  },
  {
    title: 'Карт нээлгэснээр $100 урамшуулал',
    subtitle: 'Get $100 statement credit upon opening. Terms apply.',
    body: 'Танд бодит өгөөж өгөх энэхүү саналд нөхцөл, шаардлага үйлчилнэ.'
  },
  {
    title: 'Зээлийн оноогоо тогтвортой сайжруулаарай',
    subtitle: 'Build your credit score quickly.',
    body: 'Төлбөрөө хугацаанд нь тогтмол төлөх дадал нь таны оноонд эерэг нөлөө үзүүлнэ.'
  },
  {
    title: 'Худалдан авалт бүрт cashback',
    subtitle: 'Cashback rewards on all purchases.',
    body: 'Өдөр тутмын зарцуулалтаасаа буцаан олголт авч, санхүүгээ илүү ухаалгаар удирдаарай.'
  },
  {
    title: 'Нэмэлт кредит лимит, хялбар шалгуур',
    subtitle: 'Bonus credit limit and easy approval.',
    body: 'Илүү хүртээмжтэй нөхцөл нь эхлэхэд хялбар, цаашид өсөх боломжийг бүрдүүлнэ.'
  },
  {
    title: 'Илүү хүртээмжтэй, илүү өгөөжтэй сонголт',
    subtitle: 'Discover is more accessible and rewarding.',
    body: 'Бусад карттай харьцуулахад өгөөж ба ашиглалтын нөхцөлийн тэнцвэр нь өдөр тутамд тохиромжтой.'
  },
  {
    title: 'Discover картаа өнөөдөр эхлүүлээрэй',
    subtitle: 'Claim your Discover Card now!',
    body: 'Доорх товчийг дарж referral холбоосоо нээгээд дараагийн алхам руу орно уу.'
  }
];

const SLIDE_MS = 7000;

function App() {
  const [current, setCurrent] = useState(0);
  const referralLink = useMemo(
    () =>
      import.meta.env.VITE_REFERRAL_LINK ||
      'https://refer.discover.com/s/erhemevlee?advocate.partner_share_id=7713050334',
    []
  );

  useEffect(() => {
    if (current === slides.length - 1) return;
    const timer = window.setTimeout(() => {
      setCurrent((prev) => Math.min(prev + 1, slides.length - 1));
    }, SLIDE_MS);

    return () => window.clearTimeout(timer);
  }, [current]);

  useEffect(() => {
    if (current !== slides.length - 1) return;
    const redirectTimer = window.setTimeout(() => {
      window.location.href = referralLink;
    }, 2200);

    return () => window.clearTimeout(redirectTimer);
  }, [current, referralLink]);

  const next = () => setCurrent((prev) => Math.min(prev + 1, slides.length - 1));
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  const openReferral = () => {
    window.open(referralLink, '_blank', 'noopener,noreferrer');
  };

  const slide = slides[current];

  return (
    <main className="fintech-page">
      <section className="hero-shell">
        <header className="hero-nav">
          <p className="logo">Discover Referral</p>
          <button className="sign-btn" onClick={openReferral}>
            Open Offer
          </button>
        </header>

        <div className="hero-body">
          <article className="hero-copy" key={current}>
            <div className="progress-row" aria-hidden="true">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`progress-segment ${i < current ? 'done' : ''} ${i === current ? 'active' : ''}`}
                />
              ))}
            </div>
            <p className="eyebrow">Secure referral journey</p>
            <h1>{slide.title}</h1>
            <p className="subtitle">{slide.subtitle}</p>
            <p className="body">{slide.body}</p>

            <div className="actions">
              {current === slides.length - 1 ? (
                <button className="primary-btn" onClick={openReferral}>
                  Redirecting...
                </button>
              ) : (
                <button className="primary-btn" onClick={next}>
                  Continue
                </button>
              )}

              <button className="ghost-btn" onClick={prev}>
                Previous
              </button>
            </div>

            <div className="dots" role="tablist" aria-label="Slide navigation">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </article>

          <div className="card-stack" aria-hidden="true">
            <img
              className="discover-stack-media"
              src="https://www.discover.com/content/dam/discover/en_us/credit-cards/card-acquisitions/grey-redesign/global/images/cardart/cardart-student-it-choose-new-your-card-614-432.png"
              alt="Discover Student Card"
            />
          </div>
        </div>

        <footer className="hero-footer">
          <div>
            <p className="metric">4000+ Active users</p>
            <p className="metric-sub">Trusted referral audience</p>
          </div>
          <div>
            <p className="metric">5M+ Transactions</p>
            <p className="metric-sub">Secure digital payment ecosystem</p>
          </div>
        </footer>
      </section>
      <button className="permanent-referral-btn" onClick={openReferral}>
        Apply Now
      </button>
    </main>
  );
}

export default App;
