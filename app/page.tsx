import Link from "next/link";
import Image from "next/image";

const faqs = [
  ["写真は外部へ送信されますか？", "いいえ。写真や動画の整理、重複候補の解析、背景削除、自動補正は端末上で処理され、Swipeeの外部サーバーへ送信されません。"],
  ["削除した写真は戻せますか？", "Swipee内に削除の取り消し機能はありません。一定期間は、写真アプリの「最近削除した項目」から復元できます。"],
  ["限定アクセスでも利用できますか？", "はい。写真ライブラリへの限定アクセスを選んだ場合は、アクセスを許可した写真と動画だけが候補になります。"],
  ["データはどこに保存されますか？", "表示条件や確認履歴など、アプリの動作に必要な情報だけを端末内に保存します。アカウント登録やクラウド同期はありません。"],
];

export default function Home() {
  return <>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Swipee サポート ホーム"><Image src="/app-icon.png" width={42} height={42} alt="" priority /><span>Swipee</span></Link>
      <nav aria-label="メインナビゲーション"><Link href="/privacy/">プライバシー</Link><Link href="/terms/">利用規約</Link></nav>
    </header>
    <main>
      <section className="hero">
        <p className="eyebrow">SWIPEE SUPPORT</p>
        <h1>写真整理を、<br />気持ちよく続けるために。</h1>
        <p className="hero-copy">Swipeeの使い方、写真データの取り扱い、よくある質問をご案内します。</p>
        <a className="primary-button" href="#contact">お問い合わせ</a>
      </section>
      <section className="section" aria-labelledby="guide-title">
        <div className="section-heading"><p className="eyebrow">GUIDE</p><h2 id="guide-title">基本の使い方</h2></div>
        <div className="card-grid">
          <article className="feature-card"><span className="step">01</span><h3>候補を選ぶ</h3><p>設定画面から、最近の写真や期間を指定して整理する写真を選びます。</p></article>
          <article className="feature-card"><span className="step">02</span><h3>一枚ずつ確認</h3><p>左右のスワイプで、キープする写真と削除候補を分けます。</p></article>
          <article className="feature-card"><span className="step">03</span><h3>内容を確認して削除</h3><p>削除候補をもう一度確認し、iOSの確認画面から写真ライブラリへ反映します。</p></article>
        </div>
      </section>
      <section className="section" aria-labelledby="faq-title">
        <div className="section-heading"><p className="eyebrow">FAQ</p><h2 id="faq-title">よくある質問</h2></div>
        <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>
      <section className="contact-card" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">CONTACT</p><h2 id="contact-title">解決しない場合</h2>
        <p>ご利用のiOSバージョンと、問題が起きた画面を添えてお問い合わせください。</p>
        <p className="contact-note">お問い合わせメールは公開前に設定します。</p>
      </section>
    </main>
    <footer><div className="footer-brand">Swipee</div><div className="footer-links"><Link href="/privacy/">プライバシーポリシー</Link><Link href="/terms/">利用規約</Link></div><p>© 2026 Swipee Labs</p></footer>
  </>;
}
