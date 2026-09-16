import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title:"プライバシーポリシー", description:"Swipeeにおける写真データと端末内データの取り扱いについて。" };

export default function PrivacyPage() {
  return <><Header/><main className="policy-main">
    <section className="policy-hero"><p className="eyebrow">PRIVACY POLICY</p><h1>プライバシーポリシー</h1><p className="policy-lead">本プライバシーポリシーは、yuta hirasawaが運営する関連サービスとともに、モバイル端末向けのSwipeeアプリ（以下、総称して「本アプリケーション」）に適用されます。yuta hirasawaを以下「サービス提供者」と称します。</p></section>
    <Policy title="1. 情報の収集および利用"><p>本アプリケーションは、ユーザーの個人情報、端末のIPアドレス、訪問したページ、訪問の日時、各ページまたは本アプリケーションで費やした時間、モバイルオペレーティングシステム（OS）などの情報を、サービス提供者のサーバーへ収集、保存、送信しません。</p><p>Appleは、ユーザーが診断情報および使用状況の共有に同意した場合、App Store Connectを通じて匿名化・集計された利用状況をサービス提供者に提供することがあります。これはAppleが提供する仕組みによるものであり、本アプリケーションが独自に個人情報や利用状況を収集・送信するものではありません。</p></Policy>
    <Policy title="2. クッキーおよびトラッキング技術"><p>本アプリケーションは、クッキー、広告SDK、アクセス解析SDK、トラッキングSDK、ピクセル、および同様の技術を使用していません。今後これらの技術を導入する場合は、本プライバシーポリシーおよびApp Store上のプライバシー情報を更新し、適用法令により義務付けられている場合は、必須でないトラッキング技術を使用する前に同意を取得します。</p></Policy>
    <Policy title="3. 写真ライブラリと端末内データ"><p>写真や動画を表示・整理するため、ユーザーの許可に基づいてiOSのPhotoKitを利用します。写真、動画、撮影日時、位置情報、ファイルサイズなどは、機能を提供する目的で端末上のみで処理されます。</p><p>表示条件、整理履歴、削除候補、重複候補の解析キャッシュなど、本アプリケーションの動作に必要な情報を端末内に保存します。アカウント登録やサービス提供者独自のクラウド同期はありません。</p><p>iCloud写真を利用している場合、必要なデータをiOSがAppleのサービスから取得することがあります。本アプリケーションまたはサービス提供者独自のサーバーを経由することはありません。</p></Policy>
    <Policy title="4. 写真の編集・共有"><p>削除、お気に入り、アルバム追加、背景削除、自動補正などの処理は、ユーザーの操作とiOSの権限に基づいて行います。共有機能を選んだ場合は、ユーザーがiOSの共有画面で指定した送信先にのみ共有されます。</p></Policy>
    <Policy title="5. お客様の権利"><p>写真ライブラリへのアクセス範囲は、iOSの「設定」からいつでも変更できます。本アプリケーションをアンインストールすると、アプリ内に保存された設定や履歴は削除されます。写真ライブラリ内の写真と動画は、写真アプリから管理できます。</p><p>お問い合わせの際にユーザーが自ら提供したメールアドレスおよびお問い合わせ内容は、問い合わせへの対応に必要な範囲でのみ利用します。アクセス、訂正、または削除を希望する場合は、サービス提供者（<a className="contact-link" href="mailto:support.swipee@gmail.com">support.swipee@gmail.com</a>）までご連絡ください。</p></Policy>
    <Policy title="6. カリフォルニア州におけるプライバシー権（CCPA/CPRA）"><p>サービス提供者は、本アプリケーションを通じて個人情報を販売または共有しません。カリフォルニア州の居住者であり、個人情報に関する権利を行使する場合は、サービス提供者（<a className="contact-link" href="mailto:support.swipee@gmail.com">support.swipee@gmail.com</a>）までご連絡ください。</p></Policy>
    <Policy title="7. 第三者によるアクセス"><p>本アプリケーションからユーザーデータが定期的に外部サービスへ送信されることはなく、サービス提供者はユーザーの情報を第三者へ販売、提供、共有しません。</p><p>ユーザーがiCloud写真またはiOSの共有機能を利用する場合、Appleまたはユーザーが選択した送信先のサービスにおけるデータの取り扱いには、各サービスのプライバシーポリシーが適用されます。</p></Policy>
    <Policy title="8. 国際的なデータ転送"><p>サービス提供者は、本アプリケーションを通じて収集した個人データを国外へ転送しません。Appleのサービスまたはユーザーが選択した外部サービスを利用する場合のデータ転送については、それぞれのサービスのプライバシーポリシーが適用されます。</p></Policy>
    <Policy title="9. 法令等に基づく開示"><p>サービス提供者は、お問い合わせを通じてユーザーから提供された情報を、法律で要求される場合、または自らの権利、ユーザーや他者の安全を保護するために必要であると誠実に判断した場合に限り、適用法令に従って開示することがあります。</p></Policy>
    <Policy title="10. オプトアウトの権利とデータ保持方針"><p>本アプリケーションをアンインストールすることで、端末上での本アプリケーションによる情報処理を停止できます。アンインストールすると、本アプリケーション内に保存された設定や履歴は削除されますが、写真ライブラリ内の写真と動画は削除されません。</p><p>サービス提供者は、お問い合わせの際に提供された情報を、問い合わせへの対応および法令上必要な期間に限り保持します。削除を希望する場合は、<a className="contact-link" href="mailto:support.swipee@gmail.com">support.swipee@gmail.com</a>までご連絡ください。</p></Policy>
    <Policy title="11. 児童について"><p>本アプリケーションは、16歳未満（または適用法令により定められたそれ以上の年齢）のお子様を対象としたものではありません。サービス提供者が意図的にお子様から個人識別情報を収集したり、お子様向けにマーケティングを行ったりすることはありません。</p><p>お子様がサービス提供者に個人識別情報を提供したと信じる理由がある場合は、必要な措置を講じることができるようサービス提供者までご連絡ください。</p></Policy>
    <Policy title="12. セキュリティ"><p>サービス提供者は、ユーザーの情報の機密性を保護することに留意しています。本アプリケーションが扱う写真や設定は原則として端末内で処理され、iOSが提供する保護機能のもとで管理されます。お問い合わせを通じて受領した情報についても、適切な保護措置を講じます。</p></Policy>
    <Policy title="13. データ侵害の通知"><p>サービス提供者が保持するユーザーの個人データに影響を与えるデータ侵害が発生した場合、必要に応じて侵害の性質や対処手順に関する情報を提供するなど、適用される法的要件に従ってユーザーに通知します。</p></Policy>
    <Policy title="14. 変更"><p>サービス提供者は、本プライバシーポリシーを随時更新することがあります。重大な変更がある場合は、施行日を明記した更新後のプライバシーポリシーを本ページまたは本アプリケーション内に掲載することで通知します。法律で義務付けられている場合は、重大な変更が効力を生じる前にユーザーの同意を求めます。</p><p>過去のバージョンのプライバシーポリシーは保存されており、<a className="contact-link" href="mailto:support.swipee@gmail.com">support.swipee@gmail.com</a>までご連絡いただくことで請求に応じて提供されます。</p></Policy>
    <Policy title="15. お客様の同意"><p>処理が同意に基づいている場合、ユーザーは該当する機能またはアクションに明示的にオプトイン（同意）することで同意を提供することになります。撤回前の処理に影響を与えることなく、いつでも同意を撤回できます。</p></Policy>
    <Policy title="16. お問い合わせ"><p>本アプリケーションの利用中にプライバシーに関する質問がある場合、または取り扱いに関して不明な点がある場合は、電子メール（<a className="contact-link" href="mailto:support.swipee@gmail.com">support.swipee@gmail.com</a>）にてサービス提供者までお問い合わせください。</p></Policy>
    <p className="updated">施行日：2026年9月15日</p>
  </main><Footer/></>;
}

function Policy({title,children}:{title:string;children:React.ReactNode}) { return <section className="policy-section"><h2>{title}</h2>{children}</section>; }
function Header(){return <header className="site-header"><Link className="brand" href="/"><Image src="/app-icon.png" width={42} height={42} alt="" priority/><span>Swipee</span></Link><nav><Link href="/">サポート</Link><Link href="/terms/">利用規約</Link></nav></header>}
function Footer(){return <footer><div className="footer-brand">Swipee</div><div className="footer-links"><Link href="/">サポート</Link><Link href="/terms/">利用規約</Link></div><p>© 2026 Swipee Labs</p></footer>}
