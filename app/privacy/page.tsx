import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title:"プライバシーポリシー", description:"Swipeeにおける写真データと端末内データの取り扱いについて。" };

export default function PrivacyPage() {
  return <><Header/><main className="policy-main">
    <section className="policy-hero"><p className="eyebrow">PRIVACY POLICY</p><h1>プライバシーポリシー</h1><p className="policy-lead">Swipeeは、ユーザーの写真とプライバシーを尊重し、必要最小限の情報だけを端末内で扱います。</p></section>
    <Policy title="1. 取得・送信するデータ"><p>Swipeeは、ユーザーの個人情報、端末情報、利用状況を開発者のサーバーへ収集・保存・送信しません。広告SDK、アクセス解析SDK、トラッキングSDKは使用していません。</p></Policy>
    <Policy title="2. 写真ライブラリ"><p>写真や動画を表示・整理するため、ユーザーの許可に基づいてiOSのPhotoKitを利用します。写真、動画、撮影日時、位置情報、ファイルサイズなどは、機能を提供する目的で端末上のみで処理されます。</p><p>iCloud写真を利用している場合、必要なデータをiOSがAppleのサービスから取得することがあります。Swipee独自のサーバーを経由することはありません。</p></Policy>
    <Policy title="3. 端末内に保存する情報"><p>表示条件、確認履歴、削除候補、重複候補の解析キャッシュなど、アプリの動作に必要な情報を端末内に保存します。アカウント登録や独自のクラウド同期はありません。</p></Policy>
    <Policy title="4. 写真の編集・共有"><p>削除、お気に入り、アルバム追加、背景削除、自動補正などの処理は、ユーザーの操作とiOSの権限に基づいて行います。共有機能を選んだ場合は、ユーザーがiOSの共有画面で指定した送信先にのみ共有されます。</p></Policy>
    <Policy title="5. 権限の変更とデータの削除"><p>写真ライブラリへのアクセス範囲は、iOSの「設定」からいつでも変更できます。Swipeeをアンインストールすると、アプリ内に保存された設定や履歴は削除されます。写真ライブラリ内の写真と動画は、写真アプリから管理できます。</p></Policy>
    <Policy title="6. 第三者提供"><p>Swipeeは、開発者が収集したユーザーデータを第三者へ販売、提供、共有しません。</p></Policy>
    <Policy title="7. ポリシーの変更"><p>機能追加や法令・ガイドラインの変更に応じて、本ポリシーを改定する場合があります。重要な変更がある場合は、本ページまたはアプリ内でお知らせします。</p></Policy>
    <Policy title="8. お問い合わせ"><p>お問い合わせ先メールアドレスは、正式公開前に本ページへ掲載します。</p></Policy>
    <p className="updated">制定日：2026年9月13日</p>
  </main><Footer/></>;
}

function Policy({title,children}:{title:string;children:React.ReactNode}) { return <section className="policy-section"><h2>{title}</h2>{children}</section>; }
function Header(){return <header className="site-header"><Link className="brand" href="/"><Image src="/app-icon.png" width={42} height={42} alt="" priority/><span>Swipee</span></Link><nav><Link href="/">サポート</Link><Link href="/terms/">利用規約</Link></nav></header>}
function Footer(){return <footer><div className="footer-brand">Swipee</div><div className="footer-links"><Link href="/">サポート</Link><Link href="/terms/">利用規約</Link></div><p>© 2026 Swipee Labs</p></footer>}
