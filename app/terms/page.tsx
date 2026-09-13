import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title:"利用規約", description:"写真整理アプリSwipeeの利用規約。" };

export default function TermsPage() {
  return <><Header/><main className="policy-main">
    <section className="policy-hero"><p className="eyebrow">TERMS OF USE</p><h1>利用規約</h1><p className="policy-lead">本規約は、写真整理アプリ「Swipee」の利用条件を定めるものです。</p></section>
    <Policy title="1. サービスについて"><p>Swipeeは、ユーザー自身の写真ライブラリを確認し、キープや削除候補に整理するためのアプリです。</p></Policy>
    <Policy title="2. 写真への操作"><p>削除、お気に入り、アルバム追加、編集、共有などの操作は、ユーザー自身の判断とiOSの確認・権限に基づいて実行されます。重要な写真は事前にバックアップし、内容を確認したうえで操作してください。</p></Policy>
    <Policy title="3. 重複候補と自動処理"><p>重複候補や補正結果は、写真整理を補助するための推定結果です。写真の内容や品質が完全に一致すること、または期待どおりの結果になることを保証するものではありません。</p></Policy>
    <Policy title="4. 削除した写真"><p>削除した写真や動画は、通常、写真アプリの「最近削除した項目」に一定期間保存されます。保存期間や復元可否はiOSおよびユーザーの設定に従います。</p></Policy>
    <Policy title="5. 禁止事項"><ul><li>法令または公序良俗に反する目的での利用</li><li>アプリや関連システムの動作を妨害する行為</li><li>第三者の権利を侵害する行為</li></ul></Policy>
    <Policy title="6. 提供内容の変更・停止"><p>品質向上、保守、法令対応などのため、機能の全部または一部を変更・停止する場合があります。</p></Policy>
    <Policy title="7. 免責"><p>開発者は、故意または重過失がある場合を除き、Swipeeの利用により生じた損害について、適用法令で認められる範囲を超える責任を負いません。</p></Policy>
    <Policy title="8. 規約の変更"><p>必要に応じて本規約を改定する場合があります。重要な変更がある場合は、本ページまたはアプリ内でお知らせします。</p></Policy>
    <Policy title="9. お問い合わせ"><p>お問い合わせ先メールアドレスは、正式公開前に本ページへ掲載します。</p></Policy>
    <p className="updated">制定日：2026年9月13日</p>
  </main><Footer/></>;
}

function Policy({title,children}:{title:string;children:React.ReactNode}) { return <section className="policy-section"><h2>{title}</h2>{children}</section>; }
function Header(){return <header className="site-header"><Link className="brand" href="/"><Image src="/app-icon.png" width={42} height={42} alt="" priority/><span>Swipee</span></Link><nav><Link href="/">サポート</Link><Link href="/privacy/">プライバシー</Link></nav></header>}
function Footer(){return <footer><div className="footer-brand">Swipee</div><div className="footer-links"><Link href="/">サポート</Link><Link href="/privacy/">プライバシーポリシー</Link></div><p>© 2026 Swipee Labs</p></footer>}
